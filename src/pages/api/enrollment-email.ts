import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { logEnrollment } from '@/lib/enrollmentLogger';
import { withApiHandler } from '@/utils/withApiHandler';
import he from 'he';

export const runtime = 'nodejs';

type Data = { 
  message: string;
};

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || '';
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || '';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@finlern.fi';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Enhanced server-side validation and sanitization
interface ValidationResult {
  valid: boolean;
  error?: string;
}

// Validate full name - only letters, spaces, hyphens, apostrophes
const validateFullName = (name: string): ValidationResult => {
  if (!name || typeof name !== 'string') {
    return { valid: false, error: 'Full name is required.' };
  }
  
  const trimmed = name.trim();
  
  if (trimmed.length < 2 || trimmed.length > 100) {
    return { valid: false, error: 'Full name must be between 2 and 100 characters.' };
  }
  
  // Only allow letters, spaces, hyphens, apostrophes, and international characters
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'\-]+$/;
  if (!nameRegex.test(trimmed)) {
    return { valid: false, error: 'Full name can only contain letters, spaces, hyphens, and apostrophes.' };
  }
  
  // Check for excessive repeated characters
  if (/(.)\1{4,}/.test(trimmed)) {
    return { valid: false, error: 'Full name contains invalid patterns.' };
  }
  
  return { valid: true };
};

// Validate email with comprehensive checks
const validateEmail = (email: string): ValidationResult => {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email address is required.' };
  }
  
  const trimmed = email.trim().toLowerCase();
  
  if (trimmed.length > 254) {
    return { valid: false, error: 'Email address is too long.' };
  }
  
  // RFC 5322 compliant email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Invalid email format.' };
  }
  
  // Check for suspicious patterns in email
  if (/<|>|script|javascript/i.test(trimmed)) {
    return { valid: false, error: 'Invalid email address.' };
  }
  
  return { valid: true };
};

// Validate phone number
const validatePhone = (phone: string): ValidationResult => {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Phone number is required.' };
  }
  
  const trimmed = phone.trim();
  
  if (trimmed.length < 7 || trimmed.length > 25) {
    return { valid: false, error: 'Phone number must be between 7 and 25 characters.' };
  }
  
  // Only allow digits, +, spaces, parentheses, and hyphens
  const phoneRegex = /^[+]?[0-9\s()\-]+$/;
  if (!phoneRegex.test(trimmed)) {
    return { valid: false, error: 'Phone number can only contain digits, spaces, +, parentheses, and hyphens.' };
  }
  
  // Check if there are at least 7 digits
  const digitCount = (trimmed.match(/\d/g) || []).length;
  if (digitCount < 7) {
    return { valid: false, error: 'Phone number must contain at least 7 digits.' };
  }
  
  return { valid: true };
};

// Validate text fields (job status, occupation)
const validateTextField = (text: string, fieldName: string): ValidationResult => {
  if (!text || typeof text !== 'string') {
    return { valid: false, error: `${fieldName} is required.` };
  }
  
  const trimmed = text.trim();
  
  if (trimmed.length < 2 || trimmed.length > 100) {
    return { valid: false, error: `${fieldName} must be between 2 and 100 characters.` };
  }
  
  // Allow alphanumeric, spaces, and basic punctuation
  const textRegex = /^[a-zA-Z0-9À-ÿ\s.,\-'/()]+$/;
  if (!textRegex.test(trimmed)) {
    return { valid: false, error: `${fieldName} contains invalid characters.` };
  }
  
  // Check for excessive repeated characters
  if (/(.)\1{4,}/.test(trimmed)) {
    return { valid: false, error: `${fieldName} contains invalid patterns.` };
  }
  
  return { valid: true };
};

// Detect malicious patterns across all inputs
const containsMaliciousPattern = (input: string): boolean => {
  const maliciousPatterns = [
    /<script/i,
    /<iframe/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /<embed/i,
    /<object/i,
    /SELECT\s+.*\s+FROM/i,
    /INSERT\s+INTO/i,
    /DELETE\s+FROM/i,
    /DROP\s+TABLE/i,
    /UNION\s+SELECT/i,
    /UPDATE\s+.*\s+SET/i,
    /--\s*$/,  // SQL comment
    /\/\*.*\*\//,  // Multi-line comment
    /\.\.\//,  // Path traversal
    /\.\.\\/,  // Path traversal (Windows)
    /\$\{/,  // Template injection
    /<%/,  // Template injection
    /%3Cscript/i,  // URL encoded script
    /&#/,  // HTML entity encoding
    /\\x[0-9a-f]{2}/i,  // Hex encoding
  ];
  
  return maliciousPatterns.some(pattern => pattern.test(input));
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
    res.status(500).json({ message: 'Email service is not configured. Missing environment variables.' });
    return;
  }

  const { fullName, email, phoneNumber, currentJobStatus, desiredOccupation, courseType, _honeypot } = req.body || {};

  // 🍯 SERVER-SIDE HONEYPOT VALIDATION (Double-check bot detection)
  if (_honeypot) {
    // Check 1: Honeypot field should be empty
    if (_honeypot.website && _honeypot.website.trim().length > 0) {
      console.warn('Bot detected (server): Honeypot field filled', {
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        timestamp: new Date().toISOString(),
      });
      res.status(400).json({ message: 'Invalid submission detected.' });
      return;
    }

    // Check 2: Time spent should be at least 2 seconds
    if (typeof _honeypot.timeSpent === 'number' && _honeypot.timeSpent < 2000) {
      console.warn('Bot detected (server): Form submitted too quickly', {
        timeSpent: _honeypot.timeSpent,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        timestamp: new Date().toISOString(),
      });
      res.status(400).json({ message: 'Please take your time filling out the form.' });
      return;
    }

    // Check 3: User should have interacted with the form
    if (_honeypot.userInteracted === false) {
      console.warn('Bot detected (server): No user interaction', {
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        timestamp: new Date().toISOString(),
      });
      res.status(400).json({ message: 'Invalid submission detected.' });
      return;
    }

    // Check 4: Suspicious field fill order (optional but powerful)
    if (Array.isArray(_honeypot.fieldFillOrder) && _honeypot.fieldFillOrder.length >= 5) {
      const expectedOrder = ['fullName', 'email', 'phoneNumber', 'currentJobStatus', 'desiredOccupation'];
      const isExactOrder = _honeypot.fieldFillOrder.length === expectedOrder.length && 
                           _honeypot.fieldFillOrder.every((field: string, index: number) => field === expectedOrder[index]);
      
      if (isExactOrder && typeof _honeypot.timeSpent === 'number' && _honeypot.timeSpent < 10000) {
        console.warn('Bot detected (server): Suspicious fill pattern', {
          fillOrder: _honeypot.fieldFillOrder,
          timeSpent: _honeypot.timeSpent,
          ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
          timestamp: new Date().toISOString(),
        });
        res.status(400).json({ message: 'Invalid submission detected.' });
        return;
      }
    }
  }

  // Normalize inputs
  const trimmedFullName = typeof fullName === 'string' ? fullName.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const trimmedPhone = typeof phoneNumber === 'string' ? phoneNumber.trim() : '';
  const trimmedJob = typeof currentJobStatus === 'string' ? currentJobStatus.trim() : '';
  const trimmedOccupation = typeof desiredOccupation === 'string' ? desiredOccupation.trim() : '';
  const normalizedCourseType = typeof courseType === 'string' ? courseType.trim() : 'General';

  // Comprehensive server-side validation
  const nameValidation = validateFullName(trimmedFullName);
  if (!nameValidation.valid) {
    res.status(400).json({ message: nameValidation.error || 'Invalid full name.' });
    return;
  }

  const emailValidation = validateEmail(trimmedEmail);
  if (!emailValidation.valid) {
    res.status(400).json({ message: emailValidation.error || 'Invalid email address.' });
    return;
  }

  const phoneValidation = validatePhone(trimmedPhone);
  if (!phoneValidation.valid) {
    res.status(400).json({ message: phoneValidation.error || 'Invalid phone number.' });
    return;
  }

  const jobValidation = validateTextField(trimmedJob, 'Current job status');
  if (!jobValidation.valid) {
    res.status(400).json({ message: jobValidation.error || 'Invalid job status.' });
    return;
  }

  const occupationValidation = validateTextField(trimmedOccupation, 'Desired occupation');
  if (!occupationValidation.valid) {
    res.status(400).json({ message: occupationValidation.error || 'Invalid desired occupation.' });
    return;
  }

  // Check for malicious patterns across all inputs
  const allInputs = [trimmedFullName, trimmedEmail, trimmedPhone, trimmedJob, trimmedOccupation, normalizedCourseType];
  if (allInputs.some(input => containsMaliciousPattern(input))) {
    console.warn('Malicious pattern detected in enrollment form submission', {
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    });
    res.status(400).json({ message: 'Invalid input detected. Please ensure all fields contain valid information.' });
    return;
  }

  // Additional security: Check for null bytes
  if (allInputs.some(input => input.includes('\0'))) {
    res.status(400).json({ message: 'Invalid characters detected in input.' });
    return;
  }

  // Validate course type is from a known list
  const validCourseTypes = [
    // Finnish Language Courses
    'Beginner Finnish',
    'Intermediate Finnish',
    'Advanced Finnish',
    'Beginner Finnish Course',
    'Intermediate Finnish Course',
    'Advanced Finnish Course',
    // English Language Courses
    'English Language - General Inquiry',
    'Business English Course',
    'Conversation Skills Course',
    'Academic Writing Course',
    'English Language - Group Course Inquiry',
    'English Language - Method Inquiry',
    'English Language - CTA Inquiry',
    'Beginner English Course',
    'Intermediate English Course',
    'Advanced English Course',
    // Violin Courses
    'Violin Course - General Inquiry',
    'Beginner Violin Course',
    'Intermediate Violin Course',
    'Advanced Violin Course',
    'Violin Course - Consultation',
    // Legacy/General
    'Beginner Course',
    'Intermediate Course', 
    'Advanced Course',
    'General'
  ];
  
  if (!validCourseTypes.includes(normalizedCourseType)) {
    console.warn('Invalid course type submitted', { courseType: normalizedCourseType });
    res.status(400).json({ message: 'Invalid course type selected.' });
    return;
  }

  try {
    // 1) Log enrollment to CSV (primary record of truth)
    try {
      await logEnrollment({
        fullName: trimmedFullName,
        email: trimmedEmail,
        phoneNumber: trimmedPhone,
        currentJobStatus: trimmedJob,
        desiredOccupation: trimmedOccupation,
        courseType: normalizedCourseType,
        timestamp: new Date().toISOString(),
      });
    } catch (logErr) {
      // Security: Only log error message in production, full stack in development
      console.error('CSV logging failed:', process.env.NODE_ENV === 'production' 
        ? (logErr instanceof Error ? logErr.message : 'Unknown error')
        : logErr
      );
      res.status(500).json({ message: 'Unable to save enrollment. Please try again later.' });
      return;
    }

    // 2) Send notification email (secondary)
    const accessTokenResult = await oAuth2Client.getAccessToken();
    const accessToken = typeof accessTokenResult === 'string' ? accessTokenResult : accessTokenResult?.token ?? '';
    if (!accessToken) {
      res.status(500).json({ message: 'Unable to authenticate email service. Please try again later.' });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: NOTIFICATION_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    });

    await transporter.sendMail({
      from: NOTIFICATION_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Enrollment for ${he.escape(normalizedCourseType)} Course`,
      html: `
        <p>You have a new enrollment for the <strong>${he.escape(normalizedCourseType)}</strong> course.</p>
        <p><strong>Full Legal Name:</strong> ${he.escape(trimmedFullName)}</p>
        <p><strong>Email:</strong> ${he.escape(trimmedEmail)}</p>
        <p><strong>Phone Number:</strong> ${he.escape(trimmedPhone)}</p>
        <p><strong>Current Job Status:</strong> ${he.escape(trimmedJob)}</p>
        <p><strong>Desired Occupation:</strong> ${he.escape(trimmedOccupation)}</p>
      `,
    });

    res.status(200).json({ message: 'Enrollment submitted successfully!' });
  } catch (error) {
    // Security: Only log error message in production, full stack in development
    console.error('Error sending email:', process.env.NODE_ENV === 'production' 
      ? (error instanceof Error ? error.message : 'Email service error')
      : error
    );
    // Email failed, but data is already logged. Return success with note to check email service.
    res.status(200).json({ message: 'Enrollment saved. Notification email may be delayed.' });
  }
}

// Export the handler wrapped with security middleware
// This adds rate limiting (3 requests per minute with 5-minute block on exceed) and CSRF protection
export default withApiHandler(handler, { rateLimitType: 'sensitive' });
