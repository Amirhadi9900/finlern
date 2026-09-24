import { NextApiRequest, NextApiResponse } from 'next';
import { apiRateLimiter, authRateLimiter, sensitiveOpRateLimiter } from './rateLimiter';

// Types of API handlers
type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void;
type RateLimitType = 'standard' | 'auth' | 'sensitive';

// Interface for handler options
interface HandlerOptions {
  rateLimitType?: RateLimitType;
  // Allow bypassing CSRF for specific endpoints (e.g., webhooks)
  bypassCsrf?: boolean;
}

// Apply middleware to Next.js API routes using connect-style middleware
const applyMiddleware = (middleware: any) => (handler: ApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await new Promise<void>((resolve, reject) => {
        const next = (error?: unknown) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        };

        Promise.resolve(middleware(req, res, next))
          .then(() => {
            // Middleware may end the response itself (e.g. 429); then don't run the handler.
            if (res.writableEnded) {
              resolve();
            }
          })
          .catch(reject);
      });

      if (!res.writableEnded) {
        return handler(req, res);
      }
    } catch (error: unknown) {
      // Security: Only log error message in production, full stack in development
      console.error('Middleware error:', process.env.NODE_ENV === 'production' 
        ? (error instanceof Error ? error.message : 'Middleware failure')
        : error
      );
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};

// Higher-order function to wrap API handlers with security middleware
export const withApiHandler = (handler: ApiHandler, options: HandlerOptions = {}) => {
  const { 
    rateLimitType = 'standard', 
    bypassCsrf = false
  } = options;
  
  // Apply rate limiting based on the specified type
  let rateLimit;
  switch (rateLimitType) {
    case 'auth':
      rateLimit = authRateLimiter;
      break;
    case 'sensitive':
      rateLimit = sensitiveOpRateLimiter;
      break;
    case 'standard':
    default:
      rateLimit = apiRateLimiter;
      break;
  }
  
  // Apply rate limiting middleware
  let enhancedHandler = applyMiddleware(rateLimit)(handler);
  
  // Final handler with CSRF protection applied before the rate-limited handler
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Set common security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      
      // CSRF protection for state-changing methods: require an exact same-origin
      // Origin (or Referer) match. https-only in production; http/localhost in dev.
      if (!bypassCsrf && !['GET', 'HEAD', 'OPTIONS'].includes(req.method || '')) {
        const expectedHost = req.headers.host;
        const origin = req.headers.origin;
        const referer = req.headers.referer;
        const isDev = process.env.NODE_ENV !== 'production';

        const allowedOrigins = new Set<string>();
        if (expectedHost) {
          allowedOrigins.add(`https://${expectedHost}`);
          if (isDev) {
            allowedOrigins.add(`http://${expectedHost}`);
            allowedOrigins.add('http://localhost:3000');
            allowedOrigins.add('http://127.0.0.1:3000');
          }
        }

        const originOk = !!origin && allowedOrigins.has(origin);
        let refererOk = false;
        if (referer) {
          try {
            refererOk = allowedOrigins.has(new URL(referer).origin);
          } catch {
            refererOk = false;
          }
        }

        if (!originOk && !refererOk) {
          console.warn('CSRF validation failed');
          return res.status(403).json({
            error: 'Forbidden',
            message: 'CSRF validation failed'
          });
        }
      }
      
      // Execute the handler with all middleware applied
      return enhancedHandler(req, res);
    } catch (error: unknown) {
      // Security: Only log error message in production, full stack in development
      console.error('API Error:', process.env.NODE_ENV === 'production' 
        ? (error instanceof Error ? error.message : 'Request processing failed')
        : error
      );
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};
