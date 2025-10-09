export interface EnrollmentData {
  fullName: string;
  email: string;
  phoneNumber: string;
  currentJobStatus: string;
  desiredOccupation: string;
  courseType: string;
  timestamp: string;
}

// Simple in-memory storage for the current session
// Note: This will reset on each deployment, but serves as a fallback
let enrollmentBuffer: EnrollmentData[] = [];

export async function logEnrollment(data: EnrollmentData): Promise<void> {
  try {
    // Store in memory buffer (fallback)
    enrollmentBuffer.push(data);
    
    // Log to console for debugging (visible in Vercel function logs)
    console.log('New enrollment logged:', {
      timestamp: data.timestamp,
      course: data.courseType,
      email: data.email.replace(/(.{3}).*(@.*)/, '$1***$2') // Partially mask email for privacy
    });
    
    // For now, we'll rely on email notifications as the primary record
    // In production, this would integrate with a database like Supabase or PlanetScale
    
  } catch (error) {
    // Security: Only log error message in production, full stack in development
    console.error('Failed to log enrollment:', process.env.NODE_ENV === 'production' 
      ? (error instanceof Error ? error.message : 'Enrollment logging error')
      : error
    );
    throw new Error('Logging failed');
  }
}

export function getEnrollmentBuffer(): EnrollmentData[] {
  return [...enrollmentBuffer];
}

export function clearEnrollmentBuffer(): void {
  enrollmentBuffer = [];
}

function escapeCSV(field: string): string {
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return '"' + field.replace(/"/g, '""') + '"';
  }
  return field;
}

export function convertToCSV(enrollments: EnrollmentData[]): string {
  const header = 'Timestamp,Full Name,Email,Phone Number,Current Job Status,Desired Occupation,Course Type\n';
  const rows = enrollments.map(data => [
    data.timestamp,
    escapeCSV(data.fullName),
    escapeCSV(data.email),
    escapeCSV(data.phoneNumber),
    escapeCSV(data.currentJobStatus),
    escapeCSV(data.desiredOccupation),
    escapeCSV(data.courseType)
  ].join(','));
  
  return header + rows.join('\n');
}
