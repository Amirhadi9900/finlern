import { NextApiRequest, NextApiResponse } from 'next';
import { getClientIp } from './clientIp';

interface RateLimitResult {
  remainingPoints: number;
  msBeforeNext: number;
}

function isRateLimitResult(value: unknown): value is RateLimitResult {
  return (
    typeof value === 'object' &&
    value !== null &&
    'msBeforeNext' in value &&
    typeof (value as RateLimitResult).msBeforeNext === 'number'
  );
}

// Import RateLimiterMemory. If the module is unavailable we do NOT fall back to
// an allow-all limiter — limiter instances become null and withRateLimit fails
// closed (503), so a broken limiter can never silently disable throttling.
let RateLimiterMemory: any = null;
try {
  const rateLimiterModule = require('rate-limiter-flexible');
  RateLimiterMemory = rateLimiterModule.RateLimiterMemory || null;
} catch (e) {
  console.error('Rate limiter module unavailable — requests will fail closed:', e);
  RateLimiterMemory = null;
}

// Create the rate limiter instances. Any failure yields null (fail closed).
const createLimiter = (points: number, duration: number, blockDuration?: number) => {
  if (!RateLimiterMemory) return null;
  try {
    // Sanitize inputs to prevent errors
    const sanitizedPoints = Math.max(1, Math.floor(points) || 1);
    const sanitizedDuration = Math.max(1, Math.floor(duration) || 60);
    const sanitizedBlockDuration = blockDuration ? Math.max(0, Math.floor(blockDuration)) : undefined;

    return new RateLimiterMemory({
      points: sanitizedPoints,
      duration: sanitizedDuration,
      blockDuration: sanitizedBlockDuration,
    });
  } catch (e) {
    console.error(`Failed to create rate limiter (${points}/${duration}s) — failing closed:`, e);
    return null;
  }
};

// General API rate limiter - 20 requests per minute
const apiLimiterInstance = createLimiter(20, 60);

// Auth rate limiter - 5 requests per minute, block for 2 minutes if exceeded
const authLimiterInstance = createLimiter(5, 60, 120);

// Sensitive operations rate limiter - 3 requests per minute, block for 5 minutes if exceeded
const sensitiveOpLimiterInstance = createLimiter(3, 60, 300);

// Higher-order function to apply rate limiting to API routes
export const withRateLimit = (limiter: any) => {
  return async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    try {
      // Fail closed: if the limiter is unavailable, reject rather than serve unthrottled.
      if (!limiter || typeof limiter.consume !== 'function') {
        console.error('Rate limiter unavailable — rejecting request (fail closed).');
        res.status(503).json({ error: 'Service Unavailable', message: 'Rate limiting unavailable' });
        return;
      }

      // Get the trusted client IP (never the client-controlled XFF leftmost hop).
      const clientIp = getClientIp(req);

      // Rate-limit key: client IP (the site has no authenticated users).
      const key = clientIp;

      // Consume a point from the rate limiter
      const rateLimitResult = await limiter.consume(key);

      // Add rate limit headers even on successful requests
      if (rateLimitResult && typeof rateLimitResult.remainingPoints === 'number') {
        res.setHeader('X-RateLimit-Limit', String(limiter.points || 0));
        res.setHeader('X-RateLimit-Remaining', String(rateLimitResult.remainingPoints));
        res.setHeader('X-RateLimit-Reset', String(Date.now() + (rateLimitResult.msBeforeNext || 0)));
      }

      // If not rate limited, continue
      next();
    } catch (error: unknown) {
      if (isRateLimitResult(error)) {
        const retryAfterSeconds = Math.ceil(error.msBeforeNext / 1000) || 60;

        res.setHeader('Retry-After', String(retryAfterSeconds));
        res.setHeader('X-RateLimit-Limit', String(limiter.points || 0));
        res.setHeader('X-RateLimit-Remaining', '0');
        res.setHeader('X-RateLimit-Reset', String(Date.now() + error.msBeforeNext));
        res.status(429).json({
          error: 'Too Many Requests',
          message: 'Please try again later',
          retryAfter: retryAfterSeconds,
        });
        return;
      }

      // Unexpected limiter fault: fail closed rather than serve the request unthrottled.
      console.error('Rate limiter error:', process.env.NODE_ENV === 'production'
        ? (error instanceof Error ? error.message : 'Rate limit check failed')
        : error
      );
      res.status(503).json({ error: 'Service Unavailable', message: 'Rate limiter unavailable' });
    }
  };
};

// Middleware for general API endpoints
export const apiRateLimiter = withRateLimit(apiLimiterInstance);

// Middleware for authentication endpoints
export const authRateLimiter = withRateLimit(authLimiterInstance);

// Middleware for sensitive operations
export const sensitiveOpRateLimiter = withRateLimit(sensitiveOpLimiterInstance);
