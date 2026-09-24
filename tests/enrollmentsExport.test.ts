import { describe, it, expect } from 'vitest';
import exportHandler from '@/pages/api/admin/enrollments-export';
import { makeMockRes, makeMockReq } from './_mocks';

describe('admin export auth', () => {
  it('rejects a request with no bearer token (401) and never leaks data', async () => {
    const res = makeMockRes();
    await (exportHandler as any)(
      makeMockReq({ method: 'GET', headers: { host: 'localhost:3000' } }),
      res as any,
    );
    expect(res.statusCode).toBe(401);
    expect(res.body).not.toContain('Timestamp,Full Name');
  });
});
