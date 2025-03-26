import { NextResponse, NextRequest } from 'next/server';

// Simple middleware that checks if authentication is configured
// If not, redirects to home page or returns 401
export default function middleware(req: NextRequest) {
  // Check if the request is for a protected route
  const isProtectedRoute = [
    '/dashboard/',
    '/profile/',
    '/settings/',
    '/api/protected/',
  ].some(path => req.nextUrl.pathname.startsWith(path));

  // If not a protected route, just continue
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Check if auth token exists in cookies - check all possible NextAuth cookie variants
  const hasAuthCookie = 
    req.cookies.has('next-auth.session-token') || 
    req.cookies.has('__Secure-next-auth.session-token') ||
    req.cookies.has('__Host-next-auth.session-token') ||
    // Also check for development/localhost cookies which don't use the Secure prefix
    req.cookies.has('next-auth.session-token.0') || 
    req.cookies.has('next-auth.session-token.1');

  // If user has a session cookie, allow the request
  if (hasAuthCookie) {
    return NextResponse.next();
  }

  // Otherwise, this is a protected route without a valid session
  // For API routes, return a JSON error
  if (req.nextUrl.pathname.startsWith('/api/')) {
    return new NextResponse(
      JSON.stringify({ 
        error: 'Unauthorized', 
        message: 'Authentication required' 
      }),
      { 
        status: 401, 
        headers: { 
          'content-type': 'application/json',
          // Add proper CORS headers to ensure error responses work cross-domain
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        } 
      }
    );
  }

  // For web pages, redirect to the sign-in page
  const signInUrl = new URL('/auth/signin', req.url);
  signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/api/protected/:path*',
  ],
}; 