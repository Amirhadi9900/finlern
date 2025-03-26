import { NextPage } from 'next';
import { ErrorProps } from 'next/error';
import Link from 'next/link';
import { NextPageContext } from 'next';

interface CustomErrorProps {
  statusCode: number;
}

// Custom error page
const CustomError: NextPage<CustomErrorProps> = ({ statusCode }) => {
  // Handling different types of errors with appropriate messages
  let errorMessage = 'An unexpected error has occurred';
  let errorDescription = 'Please try again later or contact support if the problem persists.';

  // Customize messages based on status code
  switch (statusCode) {
    case 400:
      errorMessage = 'Bad Request';
      errorDescription = 'The request could not be understood or was missing required parameters.';
      break;
    case 401:
      errorMessage = 'Unauthorized';
      errorDescription = 'Authentication is required to access this resource.';
      break;
    case 403:
      errorMessage = 'Access Denied';
      errorDescription = 'You do not have permission to access this resource.';
      break;
    case 404:
      errorMessage = 'Page Not Found';
      errorDescription = 'The page you are looking for might have been removed or is temporarily unavailable.';
      break;
    case 500:
      errorMessage = 'Server Error';
      errorDescription = 'We\'re experiencing some difficulties. Please try again later.';
      break;
    default:
      // Use default message for other status codes
      break;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-aurora-blue">
            {statusCode}
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {errorMessage}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {errorDescription}
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

// This getInitialProps is necessary for custom error pages
CustomError.getInitialProps = ({ res, err }: NextPageContext): CustomErrorProps => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  
  // Log the error server-side but don't expose details to the client
  if (err && process.env.NODE_ENV !== 'production') {
    console.error('Error:', err);
  }
  
  return { statusCode: statusCode || 500 };
};

export default CustomError; 