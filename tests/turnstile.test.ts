import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { verifyTurnstileToken } from '@/utils/turnstile';

describe('verifyTurnstileToken (Turnstile)', () => {
  const savedEnv = { ...process.env };
  beforeEach(() => {
    // Non-production → falls back to the universal test secret (non-empty).
    delete process.env.NODE_ENV;
    delete process.env.TURNSTILE_SECRET_KEY;
  });
  afterEach(() => {
    process.env = { ...savedEnv };
    vi.unstubAllGlobals();
  });

  it('returns true when Cloudflare reports success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: async () => ({ success: true }),
    });
    vi.stubGlobal('fetch', fetchMock);
    await expect(verifyTurnstileToken('good-token', '1.2.3.4')).resolves.toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('returns false when Cloudflare rejects the token', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ json: async () => ({ success: false, 'error-codes': ['bad-response'] }) }));
    await expect(verifyTurnstileToken('bad-token')).resolves.toBe(false);
  });

  it('fails closed (false) when the network call throws', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')));
    await expect(verifyTurnstileToken('some-token')).resolves.toBe(false);
  });

  it('returns false and skips the network call when the token is missing', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    await expect(verifyTurnstileToken(undefined)).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('fails closed in production when no secret is configured', async () => {
    process.env.NODE_ENV = 'production';
    delete process.env.TURNSTILE_SECRET_KEY;
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    await expect(verifyTurnstileToken('token')).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('production: rejects a token solved on a disallowed hostname', async () => {
    process.env.NODE_ENV = 'production';
    process.env.TURNSTILE_SECRET_KEY = 'real-secret';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ json: async () => ({ success: true, hostname: 'evil.example' }) }));
    await expect(verifyTurnstileToken('token')).resolves.toBe(false);
  });

  it('production: accepts a token solved on an allowed hostname', async () => {
    process.env.NODE_ENV = 'production';
    process.env.TURNSTILE_SECRET_KEY = 'real-secret';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ json: async () => ({ success: true, hostname: 'finlern.fi' }) }));
    await expect(verifyTurnstileToken('token')).resolves.toBe(true);
  });
});
