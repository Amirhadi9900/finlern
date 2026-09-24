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
  let value = field ?? '';
  // Neutralize spreadsheet formula (CSV) injection: if the cell begins with a
  // formula-triggering character (ignoring leading whitespace/control chars), prefix a
  // single quote so spreadsheet apps treat it as literal text rather than a formula.
  const lead = value.replace(/^[\s\x00-\x1f]+/, '').charAt(0);
  if (lead === '=' || lead === '+' || lead === '-' || lead === '@' || lead === '\t' || lead === '\r') {
    value = "'" + value;
  }
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return '"' + value.replace(/"/g, '""') + '"';
  }
  return value;
}

export function convertToCSV(enrollments: EnrollmentData[]): string {
  const header = 'Timestamp,Full Name,Email,Phone Number,Current Job Status,Desired Occupation,Course Type\n';
  const rows = enrollments.map(data => [
    escapeCSV(data.timestamp),
    escapeCSV(data.fullName),
    escapeCSV(data.email),
    escapeCSV(data.phoneNumber),
    escapeCSV(data.currentJobStatus),
    escapeCSV(data.desiredOccupation),
    escapeCSV(data.courseType)
  ].join(','));
  
  return header + rows.join('\n');
}
