import { NextApiRequest, NextApiResponse } from 'next';
import { withApiHandler } from '@/utils/withApiHandler';

// Check if NextAuth is configured
let getToken: ((options: { req: NextApiRequest }) => Promise<any>) | null = null;
try {
  getToken = require('next-auth/jwt').getToken;
} catch (e) {
  console.warn('NextAuth JWT not available:', e);
}

async function userInfoHandler(req: NextApiRequest, res: NextApiResponse) {
  // This is a protected endpoint, so normally we should have a token
  // But we'll add an extra check just in case
  if (!getToken) {
    return res.status(501).json({ 
      error: 'Auth Not Configured', 
      message: 'Authentication is not configured on this server' 
    });
  }
  
  try {
    const token = await getToken({ req });
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Return user information
    res.status(200).json({
      id: token.sub,
      email: token.email,
      name: token.name,
      role: token.role || 'user',
      // Don't include sensitive information
    });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Failed to fetch user info' });
  }
}

// Apply security middleware - require authentication, limit to 10 requests per minute
export default withApiHandler(userInfoHandler, {
  requireAuth: true,  // Requires authentication
  rateLimitType: 'standard',  // Standard rate limiting
}); 