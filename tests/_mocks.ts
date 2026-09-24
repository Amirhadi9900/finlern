import type { NextApiRequest, NextApiResponse } from 'next';

// Minimal NextApiResponse mock capturing status/headers/body and writableEnded.
export function makeMockRes() {
  const headers: Record<string, string> = {};
  const res: any = {
    writableEnded: false,
    statusCode: 0,
    body: null as unknown,
    headers,
    setHeader(k: string, v: string) { headers[k] = String(v); return res; },
    getHeader(k: string) { return headers[k]; },
    status(code: number) { res.statusCode = code; return res; },
    json(body: unknown) { res.body = body; res.writableEnded = true; return res; },
    send(body: unknown) { res.body = body; res.writableEnded = true; return res; },
    end() { res.writableEnded = true; return res; },
  };
  return res as NextApiResponse & { statusCode: number; body: unknown; headers: Record<string, string>; writableEnded: boolean };
}

export function makeMockReq(over: Partial<NextApiRequest> = {}): NextApiRequest {
  return {
    method: 'GET',
    headers: { host: 'localhost:3000' },
    socket: { remoteAddress: '127.0.0.1' },
    query: {},
    body: {},
    cookies: {},
    ...over,
  } as unknown as NextApiRequest;
}
