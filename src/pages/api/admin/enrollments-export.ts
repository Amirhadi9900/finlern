import type { NextApiRequest, NextApiResponse } from 'next';
import { getEnrollmentBuffer, convertToCSV } from '@/lib/enrollmentLogger';
import { withApiHandler } from '@/utils/withApiHandler';

export const runtime = 'nodejs';

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  // Enhanced security: Multi-factor authentication check
  const adminKey = process.env.ADMIN_API_KEY;
  const authHeader = req.headers.authorization;

  // Validate admin key exists and matches
  if (!adminKey || !authHeader || !authHeader.startsWith('Bearer ')) {
    console.warn('Admin API unauthorized access attempt', {
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      timestamp: new Date().toISOString(),
      path: req.url,
    });
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const providedKey = authHeader.substring(7); // Remove 'Bearer '
  
  // Use timing-safe comparison to prevent timing attacks
  const crypto = require('crypto');
  const expectedBuffer = Buffer.from(adminKey, 'utf-8');
  const providedBuffer = Buffer.from(providedKey, 'utf-8');
  
  // Ensure buffers are same length to prevent length-based timing attacks
  if (expectedBuffer.length !== providedBuffer.length) {
    console.warn('Admin API invalid key length', {
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      timestamp: new Date().toISOString(),
    });
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // Timing-safe comparison
  if (!crypto.timingSafeEqual(expectedBuffer, providedBuffer)) {
    console.warn('Admin API invalid key', {
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      timestamp: new Date().toISOString(),
    });
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    // Audit log: Record successful admin access
    console.log('Admin API access granted', {
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      timestamp: new Date().toISOString(),
      action: 'enrollment-export',
      userAgent: req.headers['user-agent'],
    });

    const enrollments = getEnrollmentBuffer();
    
    if (enrollments.length === 0) {
      res.status(404).json({ message: 'No enrollment data found in current session' });
      return;
    }

    const csvData = convertToCSV(enrollments);
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=enrollments.csv');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200).send(csvData);
  } catch (error) {
    console.error('Error generating CSV:', process.env.NODE_ENV === 'production' ? 'Export failed' : error);
    res.status(500).json({ message: 'Error retrieving enrollment data' });
  }
}

// Apply security middleware: Rate limiting (5 req/min) + CSRF protection
export default withApiHandler(handler, { 
  rateLimitType: 'auth',
  bypassCsrf: false // Require CSRF validation even for GET requests on admin endpoints
});
