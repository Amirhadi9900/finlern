import { NextApiRequest, NextApiResponse } from 'next';

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

// Try to safely import RateLimiterMemory
let RateLimiterMemory: any;
try {
  // Import rate-limiter-flexible
  const rateLimiterModule = require('rate-limiter-flexible');
  RateLimiterMemory = rateLimiterModule.RateLimiterMemory;
} catch (e) {
  // Fallback if the module is not installed
  console.warn('Rate limiter not available:', e);

  // Create a dummy rate limiter that always allows requests
  RateLimiterMemory = class DummyRateLimiter {
    async consume() {
      return { remainingPoints: 1 };
    }
  };
}

// Create the rate limiter instances with error handling
const createLimiter = (points: number, duration: number, blockDuration?: number) => {
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
    console.warn(`Failed to create rate limiter (${points}/${duration}s):`, e);
    // Return a dummy limiter that always allows requests
    return new RateLimiterMemory();
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
      // Check if we have a valid limiter
      if (!limiter || typeof limiter.consume !== 'function') {
        // If limiter is not available, just continue
        console.warn('Rate limiter not available, skipping rate limit check');
        return next();
      }

      // Get client IP with fallbacks
      const clientIp =
        ((req.headers['x-forwarded-for'] as string) || '')?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        'unknown';

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
