import { describe, it, expect, vi } from 'vitest';
import { withApiHandler } from '@/utils/withApiHandler';
import { makeMockRes, makeMockReq } from './_mocks';

const post = (headers: Record<string, string>) =>
  makeMockReq({ method: 'POST', headers: { host: 'localhost:3000', ...headers } });

describe('withApiHandler CSRF (F-07)', () => {
  it('rejects POST from a mismatched origin (403) and does not run the handler', async () => {
    const handler = vi.fn();
    const res = makeMockRes();
    await withApiHandler(handler as any, {})(post({ origin: 'https://evil.example' }), res as any);
    expect(res.statusCode).toBe(403);
    expect(handler).not.toHaveBeenCalled();
  });

  it('rejects a referer substring-attack (403)', async () => {
    const handler = vi.fn();
    const res = makeMockRes();
    await withApiHandler(handler as any, {})(post({ referer: 'https://localhost:3000.evil.example/' }), res as any);
    expect(res.statusCode).toBe(403);
    expect(handler).not.toHaveBeenCalled();
  });

  it('allows a matching dev origin and runs the handler', async () => {
    const handler = vi.fn(async (_req: any, res: any) => { res.status(200).json({ ok: true }); });
    const res = makeMockRes();
    await withApiHandler(handler as any, {})(post({ origin: 'http://localhost:3000' }), res as any);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(res.statusCode).toBe(200);
  });
});
