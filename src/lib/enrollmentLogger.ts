import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const appendFile = promisify(fs.appendFile);
const mkdir = promisify(fs.mkdir);

export interface EnrollmentData {
  fullName: string;
  email: string;
  phoneNumber: string;
  currentJobStatus: string;
  desiredOccupation: string;
  courseType: string;
  timestamp: string;
}

export async function logEnrollment(data: EnrollmentData): Promise<void> {
  try {
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    await mkdir(logsDir, { recursive: true });

    // Create CSV row
    const csvRow = [
      data.timestamp,
      escapeCSV(data.fullName),
      escapeCSV(data.email),
      escapeCSV(data.phoneNumber),
      escapeCSV(data.currentJobStatus),
      escapeCSV(data.desiredOccupation),
      escapeCSV(data.courseType)
    ].join(',') + '\n';

    // Append to CSV file (creates file if doesn't exist)
    const csvPath = path.join(logsDir, 'enrollments.csv');
    
    // Add header if file doesn't exist
    if (!fs.existsSync(csvPath)) {
      const header = 'Timestamp,Full Name,Email,Phone Number,Current Job Status,Desired Occupation,Course Type\n';
      await appendFile(csvPath, header, 'utf8');
    }

    await appendFile(csvPath, csvRow, 'utf8');
  } catch (error) {
    console.error('Failed to log enrollment:', error);
    throw new Error('Logging failed');
  }
}

function escapeCSV(field: string): string {
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return '"' + field.replace(/"/g, '""') + '"';
  }
  return field;
}
