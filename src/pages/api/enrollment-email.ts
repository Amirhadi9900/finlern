import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { getAdminDb } from '@/lib/firebaseAdmin';

export const runtime = 'nodejs';

type Data = { 
  message: string;
};

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || '';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || '';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
    return res.status(500).json({ message: 'Email service is not configured. Missing environment variables.' });
  }

  const { fullName, email, phoneNumber, currentJobStatus, desiredOccupation, courseType } = req.body || {};

  // Normalize inputs
  const trimmedFullName = typeof fullName === 'string' ? fullName.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedPhone = typeof phoneNumber === 'string' ? phoneNumber.trim() : '';
  const trimmedJob = typeof currentJobStatus === 'string' ? currentJobStatus.trim() : '';
  const trimmedOccupation = typeof desiredOccupation === 'string' ? desiredOccupation.trim() : '';
  const normalizedCourseType = typeof courseType === 'string' ? courseType.trim() : 'General';

  // Server-side validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[+]?[0-9\s()-]{7,25}$/;

  if (!trimmedFullName || trimmedFullName.length < 2) {
    return res.status(400).json({ message: 'Full legal name is required.' });
  }
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }
  if (!phoneRegex.test(trimmedPhone)) {
    return res.status(400).json({ message: 'Invalid phone number format.' });
  }
  if (!trimmedJob || trimmedJob.length < 2) {
    return res.status(400).json({ message: 'Current job status is required.' });
  }
  if (!trimmedOccupation || trimmedOccupation.length < 2) {
    return res.status(400).json({ message: 'Desired occupation is required.' });
  }

  try {
    // 1) Persist to Firestore (primary record of truth)
    try {
      const db = getAdminDb();
      await db.collection('enrollments').add({
        fullName: trimmedFullName,
        email: trimmedEmail,
        phoneNumber: trimmedPhone,
        currentJobStatus: trimmedJob,
        desiredOccupation: trimmedOccupation,
        courseType: normalizedCourseType,
        createdAt: new Date().toISOString(),
      });
    } catch (dbErr) {
      console.error('Firestore write failed:', dbErr);
      return res.status(500).json({ message: 'Unable to save enrollment. Please try again later.' });
    }

    // 2) Send notification email (secondary)
    const accessTokenResult = await oAuth2Client.getAccessToken();
    const accessToken = typeof accessTokenResult === 'string' ? accessTokenResult : accessTokenResult?.token ?? '';
    if (!accessToken) {
      return res.status(500).json({ message: 'Unable to authenticate email service. Please try again later.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'info@finlern.fi',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    });

    await transporter.sendMail({
      from: 'info@finlern.fi',
      to: 'info@finlern.fi',
      subject: `New Enrollment for ${normalizedCourseType} Course`,
      html: `
        <p>You have a new enrollment for the <strong>${normalizedCourseType}</strong> course.</p>
        <p><strong>Full Legal Name:</strong> ${trimmedFullName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Phone Number:</strong> ${trimmedPhone}</p>
        <p><strong>Current Job Status:</strong> ${trimmedJob}</p>
        <p><strong>Desired Occupation:</strong> ${trimmedOccupation}</p>
      `,
    });

    return res.status(200).json({ message: 'Enrollment submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Email failed, but data is already persisted. Return success with note to check email service.
    return res.status(200).json({ message: 'Enrollment saved. Notification email may be delayed.' });
  }
}
