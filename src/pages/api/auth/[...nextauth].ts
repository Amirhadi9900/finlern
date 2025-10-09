import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import type { NextAuthOptions } from 'next-auth';
import { InMemoryAdapter } from '@/utils/inMemoryAdapter';

export const runtime = 'nodejs';

// Check if Firebase configuration is available
const hasFirebaseConfig = 
  process.env.FIREBASE_PROJECT_ID &&
  process.env.FIREBASE_CLIENT_EMAIL &&
  process.env.FIREBASE_PRIVATE_KEY;

// We only import FirestoreAdapter and cert if Firebase config is available
let firebaseAdapter: any = null;

// Only try to load Firebase adapter if configuration is available and we're not in development
if (hasFirebaseConfig && process.env.NODE_ENV !== 'development') {
  (async () => {
    try {
      const { FirestoreAdapter } = await import('@auth/firebase-adapter');
      const { cert } = await import('firebase-admin/app');

      firebaseAdapter = FirestoreAdapter({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    } catch (e) {
      console.warn('Firebase adapter could not be initialized:', e);
    }
  })();
}

// Extend the session and user types
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: string;
  }
}

// Extend the token type
declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}

// Construct NextAuth options with proper typing
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'MISSING_CLIENT_ID',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'MISSING_CLIENT_SECRET',
    }),
    // In development, use a console-based email provider
    process.env.NODE_ENV === 'development'
      ? EmailProvider({
          server: {
            host: 'localhost',
            port: 1025,
            auth: {
              user: '',
              pass: '',
            },
          },
          from: 'noreply@localhost',
          sendVerificationRequest: ({ identifier, url, provider }) => {
            console.log('LOGIN LINK:', url);
            console.log('For:', identifier);
            console.log('---------------------');
            return Promise.resolve();
          },
        })
      : EmailProvider({
          server: process.env.EMAIL_SERVER_HOST ? {
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT) || 587,
            auth: {
              user: process.env.EMAIL_SERVER_USER || '',
              pass: process.env.EMAIL_SERVER_PASSWORD || '',
            },
          } : '',
          from: process.env.EMAIL_FROM || 'noreply@finlern.fi',
        }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days (improved security from 30 days)
    updateAge: 24 * 60 * 60, // Update session every 24 hours (rolling sessions)
  },
  jwt: {
    // Use a secure secret at least 32 characters long in production
    secret: process.env.NEXTAUTH_SECRET,
    // Set short expiry time to improve security
    maxAge: 24 * 60 * 60, // 24 hours (improved from 1 hour for better UX)
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }: { session: any, token: any }) {
      if (session?.user) {
        session.user.id = token.sub!;
        if (token.role) {
          session.user.role = token.role;
        }
      }
      return session;
    },
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        // Only copy needed properties to the token
        token.role = user.role;
        // Don't copy sensitive info to the JWT (e.g. password)
      }
      return token;
    },
  },
  events: {
    async signIn(message: any) {
      // Log sign-in events
      console.log('User signed in:', message);
    },
    async signOut(message: any) {
      // Log sign-out events
      console.log('User signed out:', message);
    },
  },
  // Security options
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  // Use different adapters based on environment
  adapter: process.env.NODE_ENV === 'development' ? InMemoryAdapter() : undefined,
};

// Only add the Firebase adapter if Firebase is properly configured and we're not in development
if (firebaseAdapter && process.env.NODE_ENV !== 'development') {
  (authOptions as any).adapter = firebaseAdapter;
}

export default NextAuth(authOptions);

// Export NextAuth options for reuse in other files
export { authOptions }; 