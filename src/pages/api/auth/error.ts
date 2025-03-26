import { NextApiRequest, NextApiResponse } from 'next';
import { withApiHandler } from '@/utils/withApiHandler';

async function errorHandler(req: NextApiRequest, res: NextApiResponse) {
  const { error } = req.query;
  
  let errorMessage = 'An unknown authentication error occurred';
  let statusCode = 500;
  
  switch (error) {
    case 'Configuration':
      errorMessage = 'Server configuration error';
      statusCode = 500;
      break;
    case 'AccessDenied':
      errorMessage = 'Access denied';
      statusCode = 403;
      break;
    case 'Verification':
      errorMessage = 'Email verification error';
      statusCode = 400;
      break;
    case 'OAuthSignin':
    case 'OAuthCallback':
    case 'OAuthCreateAccount':
    case 'EmailCreateAccount':
    case 'Callback':
    case 'OAuthAccountNotLinked':
    case 'EmailSignin':
    case 'CredentialsSignin':
      errorMessage = 'Authentication error';
      statusCode = 401;
      break;
    case 'SessionRequired':
      errorMessage = 'Authentication required';
      statusCode = 401;
      break;
    default:
      errorMessage = 'An unknown authentication error occurred';
      statusCode = 500;
  }
  
  // Return appropriate error response
  res.status(statusCode).json({
    error: true,
    message: errorMessage,
    code: error || 'unknown',
  });
}

// No authentication required for error handler, but apply rate limiting
export default withApiHandler(errorHandler, {
  requireAuth: false,
  rateLimitType: 'standard',
}); 