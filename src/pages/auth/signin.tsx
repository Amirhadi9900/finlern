import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Initialize signIn conditionally
let signIn: ((provider: string, options?: any) => Promise<any>) | null = null;

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authConfigured, setAuthConfigured] = useState(false);

  useEffect(() => {
    // Check if NextAuth is available in client-side code
    try {
      const { signIn: nextAuthSignIn } = require('next-auth/react');
      signIn = nextAuthSignIn;
      setAuthConfigured(true);
    } catch (err) {
      console.warn("NextAuth not available:", err);
      setAuthConfigured(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signIn) {
      setError('Authentication is not configured.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('email', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!signIn) {
      setError('Authentication is not configured.');
      return;
    }

    try {
      await signIn('google', { callbackUrl: '/dashboard' });
    } catch (err) {
      setError('Failed to sign in with Google');
    }
  };

  if (!authConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 pt-20">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-2xl">
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Finlern Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Authentication Not Available
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              The authentication system is not properly configured.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-aurora-blue hover:text-aurora-purple font-medium">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 pt-20">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Finlern Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-aurora-blue focus:border-aurora-blue focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-aurora-blue focus:border-aurora-blue focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
            >
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 