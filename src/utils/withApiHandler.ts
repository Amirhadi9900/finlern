import { NextApiRequest, NextApiResponse } from 'next';
import { apiRateLimiter, authRateLimiter, sensitiveOpRateLimiter } from './rateLimiter';

// Check if NextAuth is configured
let getToken: ((options: { req: NextApiRequest }) => Promise<any>) | null = null;
try {
  getToken = require('next-auth/jwt').getToken;
} catch (e) {
  console.warn('NextAuth JWT not available:', e);
}

// Types of API handlers
type ApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void;
type RateLimitType = 'standard' | 'auth' | 'sensitive';

// Interface for handler options
interface HandlerOptions {
  rateLimitType?: RateLimitType;
  requireAuth?: boolean;
  requiredRole?: string;
  // Allow bypassing CSRF for specific endpoints (e.g., webhooks)
  bypassCsrf?: boolean;
}

// Apply middleware to Next.js API routes using connect-style middleware
const applyMiddleware = (middleware: any) => (handler: ApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await new Promise<void>((resolve) => {
        middleware(req, res, () => {
          resolve();
        });
      });
      
      return handler(req, res);
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

// Validate a token is properly formatted
const isValidToken = (token: any): boolean => {
  return (
    typeof token === 'object' &&
    token !== null &&
    typeof token.sub === 'string' &&
    token.sub.length > 0
  );
};

// Higher-order function to wrap API handlers with security middleware
export const withApiHandler = (handler: ApiHandler, options: HandlerOptions = {}) => {
  const { 
    rateLimitType = 'standard', 
    requireAuth = false, 
    requiredRole,
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
  
  // Final handler with authentication checks if required
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Set common security headers
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      
      // Apply CSRF protection for non-GET, non-HEAD, non-OPTIONS methods
      if (!bypassCsrf && !['GET', 'HEAD', 'OPTIONS'].includes(req.method || '')) {
        // Check Origin header against Host
        const expectedHost = req.headers.host;
        const origin = req.headers.origin;
        
        // Check Referer as a fallback (less secure but better than nothing)
        const referer = req.headers.referer;
        
        // Multiple ways to check CSRF
        const hasValidOrigin = origin && expectedHost && (
          origin === `https://${expectedHost}` || 
          origin === `http://${expectedHost}` ||
          // Allow localhost in development
          (process.env.NODE_ENV !== 'production' && 
           (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')))
        );
        
        const hasValidReferer = referer && expectedHost && (
          referer.includes(`https://${expectedHost}/`) || 
          referer.includes(`http://${expectedHost}/`) ||
          // Allow localhost in development
          (process.env.NODE_ENV !== 'production' && 
           (referer.startsWith('http://localhost:') || referer.startsWith('http://127.0.0.1:')))
        );
        
        // Also check for CSRF token in header or body
        const csrfToken = 
          req.headers['x-csrf-token'] || 
          req.headers['x-xsrf-token'] ||
          (req.body && typeof req.body === 'object' ? req.body._csrf : undefined);
          
        // If no valid origin and no valid referer and no CSRF token
        if (!hasValidOrigin && !hasValidReferer && !csrfToken) {
          console.warn(`CSRF validation failed. Origin: ${origin}, Host: ${expectedHost}, Referer: ${referer}`);
          return res.status(403).json({ 
            error: 'Forbidden', 
            message: 'CSRF validation failed' 
          });
        }
      }
      
      // Apply authentication check if required
      if (requireAuth) {
        // Check if auth is configured
        if (!getToken) {
          return res.status(501).json({ 
            error: 'Authentication Required', 
            message: 'Authentication is not configured on this server' 
          });
        }
        
        try {
          const token = await getToken({ req });
          
          if (!token || !isValidToken(token)) {
            return res.status(401).json({ 
              error: 'Unauthorized', 
              message: 'Valid authentication is required' 
            });
          }
          
          // Check for specific role if required
          if (requiredRole && token.role !== requiredRole) {
            return res.status(403).json({ 
              error: 'Forbidden', 
              message: 'Insufficient permissions' 
            });
          }
        } catch (authError: unknown) {
          // Security: Only log error message in production, full stack in development
          console.error('Authentication error:', process.env.NODE_ENV === 'production' 
            ? (authError instanceof Error ? authError.message : 'Auth validation failed')
            : authError
          );
          return res.status(401).json({ 
            error: 'Authentication Error', 
            message: 'Failed to validate authentication' 
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