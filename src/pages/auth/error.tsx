import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function AuthError() {
  const router = useRouter();
  const { error } = router.query;
  
  let errorTitle = 'Authentication Error';
  let errorMessage = 'An unexpected error occurred during authentication.';
  
  // Map error codes to user-friendly messages
  switch (error) {
    case 'Configuration':
      errorTitle = 'Server Configuration Error';
      errorMessage = 'There is a problem with the server configuration. Please contact support.';
      break;
    case 'AccessDenied':
      errorTitle = 'Access Denied';
      errorMessage = 'You do not have permission to access this resource.';
      break;
    case 'Verification':
      errorTitle = 'Verification Error';
      errorMessage = 'The verification link may have expired or was already used.';
      break;
    case 'OAuthSignin':
    case 'OAuthCallback':
    case 'OAuthCreateAccount':
    case 'Callback':
      errorTitle = 'Authentication Failed';
      errorMessage = 'There was an error while trying to authenticate with the provider.';
      break;
    case 'OAuthAccountNotLinked':
      errorTitle = 'Account Not Linked';
      errorMessage = 'This email is already associated with another account.';
      break;
    case 'EmailSignin':
      errorTitle = 'Email Sign In Failed';
      errorMessage = 'The email could not be sent or the verification link was invalid.';
      break;
    case 'CredentialsSignin':
      errorTitle = 'Sign In Failed';
      errorMessage = 'The credentials you provided are incorrect.';
      break;
    case 'SessionRequired':
      errorTitle = 'Authentication Required';
      errorMessage = 'You must be signed in to access this page.';
      break;
    default:
      errorTitle = 'Authentication Error';
      errorMessage = 'An unexpected error occurred during authentication.';
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center">
            <Image 
              src="/images/finlern.png" 
              alt="Finlern Logo" 
              width={80} 
              height={80} 
              className="mb-4"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {errorTitle}
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 mt-8">
          <Link 
            href="/auth/signin" 
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
          >
            Try Again
          </Link>
          
          <Link 
            href="/" 
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
          >
            Back to Home
          </Link>
          
          <button
            onClick={() => router.back()}
            className="text-aurora-blue hover:text-aurora-purple text-sm font-medium mt-2"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
} 