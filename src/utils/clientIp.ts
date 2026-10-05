import { NextApiRequest } from 'next';

// Resolve the real client IP without trusting a client-supplied
// `X-Forwarded-For` leftmost value (which any scripted client can forge to
// mint a fresh rate-limit bucket).
//
// On Vercel, the edge sets `x-real-ip` to the actual connection IP and appends
// the trusted hop to `x-forwarded-for`; both are not attacker-controllable.
// Off Vercel (e.g. local `next start`, direct connections) there is no trusted
// proxy, so we ignore forwarded headers entirely and use the socket address.

const sanitize = (value: string): string =>
  value.replace(/[\x00-\x1f\x7f]/g, '').trim().slice(0, 45);

export function getClientIp(req: NextApiRequest): string {
  const behindTrustedProxy = !!process.env.VERCEL;

  if (behindTrustedProxy) {
    const realIp = req.headers['x-real-ip'];
    if (typeof realIp === 'string' && realIp.trim()) return sanitize(realIp);

    const xff = req.headers['x-forwarded-for'];
    if (typeof xff === 'string' && xff.trim()) {
      const hops = xff.split(',').map((h) => h.trim()).filter(Boolean);
      // Rightmost hop is the one appended by the trusted edge proxy.
      if (hops.length) return sanitize(hops[hops.length - 1]);
    }
  }

  return sanitize(req.socket?.remoteAddress || 'unknown');
}
