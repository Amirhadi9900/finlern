import { describe, it, expect, vi } from 'vitest';
import { withRateLimit } from '@/utils/rateLimiter';
import { makeMockRes, makeMockReq } from './_mocks';

describe('withRateLimit (F-04)', () => {
  it('calls next() when under the limit', async () => {
    const limiter = { points: 3, consume: async () => ({ remainingPoints: 2, msBeforeNext: 1000 }) };
    const res = makeMockRes();
    const next = vi.fn();
    await withRateLimit(limiter)(makeMockReq(), res as any, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res.statusCode).toBe(0);
  });

  it('returns 429 and does NOT call next() when over the limit', async () => {
    const limiter = {
      points: 3,
      consume: async () => {
        throw { remainingPoints: 0, msBeforeNext: 60000 }; // RateLimiterRes-like
      },
    };
    const res = makeMockRes();
    const next = vi.fn();
    await withRateLimit(limiter)(makeMockReq(), res as any, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.statusCode).toBe(429);
    expect(res.headers['Retry-After']).toBeTruthy();
  });

  it('fails closed (503) on an unexpected limiter error', async () => {
    const limiter = { points: 3, consume: async () => { throw new Error('boom'); } };
    const res = makeMockRes();
    const next = vi.fn();
    await withRateLimit(limiter)(makeMockReq(), res as any, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.statusCode).toBe(503);
  });
});
