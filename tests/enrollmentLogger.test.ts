import { describe, it, expect } from 'vitest';
import { convertToCSV, type EnrollmentData } from '@/lib/enrollmentLogger';

const base: EnrollmentData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '+358 12 345 6789',
  currentJobStatus: 'Student',
  desiredOccupation: 'Engineer',
  courseType: 'General',
  timestamp: '2026-01-01T00:00:00.000Z',
};

describe('convertToCSV — CSV formula-injection neutralization (F-14)', () => {
  it('prefixes cells beginning with = + - @', () => {
    expect(convertToCSV([{ ...base, fullName: '=1+1' }])).toContain("'=1+1");
    expect(convertToCSV([{ ...base, fullName: '-1+1' }])).toContain("'-1+1");
  });

  it('neutralizes a formula that follows leading whitespace', () => {
    expect(convertToCSV([{ ...base, desiredOccupation: ' +1+1' }])).toContain("' +1+1");
  });

  it('leaves normal values untouched (no spurious prefix)', () => {
    const csv = convertToCSV([base]);
    expect(csv).toContain('John Doe');
    expect(csv).not.toContain("'John Doe");
  });

  it('still quotes cells containing commas', () => {
    expect(convertToCSV([{ ...base, currentJobStatus: 'a,b' }])).toContain('"a,b"');
  });
});
