import { describe, it, expect, afterEach } from 'vitest';
import { getClientIp } from '@/utils/clientIp';
import { makeMockReq } from './_mocks';

describe('getClientIp (rate-limit bypass fix #1)', () => {
  const saved = process.env.VERCEL;
  afterEach(() => {
    if (saved === undefined) delete process.env.VERCEL;
    else process.env.VERCEL = saved;
  });

  it('OFF Vercel: ignores a forged X-Forwarded-For and uses the socket IP', () => {
    delete process.env.VERCEL;
    const req = makeMockReq({
      headers: { host: 'localhost:3000', 'x-forwarded-for': '1.2.3.4' },
      socket: { remoteAddress: '10.0.0.9' } as any,
    });
    expect(getClientIp(req)).toBe('10.0.0.9');
  });

  it('ON Vercel: prefers x-real-ip (edge-set, not client-controllable)', () => {
    process.env.VERCEL = '1';
    const req = makeMockReq({
      headers: { host: 'x', 'x-real-ip': '9.9.9.9', 'x-forwarded-for': 'evil' },
      socket: { remoteAddress: '10.0.0.9' } as any,
    });
    expect(getClientIp(req)).toBe('9.9.9.9');
  });

  it('ON Vercel: falls back to the RIGHTMOST XFF hop (edge-appended real IP)', () => {
    process.env.VERCEL = '1';
    const req = makeMockReq({
      headers: { host: 'x', 'x-forwarded-for': 'spoofed-by-attacker, 8.8.8.8' },
      socket: { remoteAddress: '10.0.0.9' } as any,
    });
    expect(getClientIp(req)).toBe('8.8.8.8');
  });

  it('sanitizes control characters and caps length', () => {
    delete process.env.VERCEL;
    const req = makeMockReq({
      socket: { remoteAddress: '1.1.1.1\nINJECTED' } as any,
    });
    const ip = getClientIp(req);
    expect(ip).not.toContain('\n');
    expect(ip.length).toBeLessThanOrEqual(45);
  });
});
