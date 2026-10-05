// Cloudflare Turnstile server-side verification.
// Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// Cloudflare's universal TEST keys (always pass). Used only outside production so
// local/dev works without configuring anything. In production we NEVER fall back
// to test keys — if the real secret is missing we fail closed.
const TEST_SECRET_KEY = '1x0000000000000000000000000000000AA';

// Hostnames the widget is allowed to be solved on. Only enforced in production
// (dev uses Cloudflare's test keys whose hostname differs). Override via env.
const DEFAULT_HOSTNAMES = ['finlern.vercel.app', 'finlern.fi', 'www.finlern.fi'];
function expectedHostnames(): string[] {
  const env = process.env.TURNSTILE_HOSTNAMES;
  if (env) return env.split(',').map((s) => s.trim()).filter(Boolean);
  return DEFAULT_HOSTNAMES;
}

export function getTurnstileSecretKey(): string {
  if (process.env.TURNSTILE_SECRET_KEY) return process.env.TURNSTILE_SECRET_KEY;
  return process.env.NODE_ENV === 'production' ? '' : TEST_SECRET_KEY;
}

export function isTurnstileConfigured(): boolean {
  return getTurnstileSecretKey().length > 0;
}

// Returns true only when Cloudflare confirms the token. Fails closed on any
// error, missing token, or unconfigured secret.
export async function verifyTurnstileToken(
  token: string | undefined,
  remoteIp?: string
): Promise<boolean> {
  const secret = getTurnstileSecretKey();
  if (!secret || !token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.append('remoteip', remoteIp);

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      body,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    const data = (await res.json()) as { success?: boolean; hostname?: string };
    if (data?.success !== true) return false;
    // Defense-in-depth: in production the token must have been solved on an allowed hostname.
    if (
      process.env.NODE_ENV === 'production' &&
      data.hostname &&
      !expectedHostnames().includes(data.hostname)
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
