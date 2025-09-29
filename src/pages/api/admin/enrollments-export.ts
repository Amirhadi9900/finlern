import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Simple API key authentication
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey || req.headers.authorization !== `Bearer ${adminKey}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const csvPath = path.join(process.cwd(), 'logs', 'enrollments.csv');
    
    if (!fs.existsSync(csvPath)) {
      return res.status(404).json({ message: 'No enrollment data found' });
    }

    const csvData = fs.readFileSync(csvPath, 'utf8');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=enrollments.csv');
    res.status(200).send(csvData);
  } catch (error) {
    console.error('Error reading CSV:', error);
    res.status(500).json({ message: 'Error retrieving enrollment data' });
  }
}
