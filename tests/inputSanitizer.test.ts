import { describe, it, expect } from 'vitest';
import { sanitizeInput, containsSuspiciousPattern } from '@/utils/inputSanitizer';

describe('sanitizeInput — boundary validation (input sanitization)', () => {
  it('strips script tags and non-name characters', () => {
    expect(sanitizeInput('<script>alert(1)</script>John', 'name')).toBe('John');
  });

  it('keeps only phone-permitted characters and trims', () => {
    expect(sanitizeInput('+358 41 756 7339 abc', 'phone')).toBe('+358 41 756 7339');
  });

  it('lowercases and removes spaces for email', () => {
    expect(sanitizeInput('John@Example.com', 'email')).toBe('john@example.com');
  });

  it('returns empty for non-string input', () => {
    expect(sanitizeInput(undefined as unknown as string, 'text')).toBe('');
  });
});

describe('containsSuspiciousPattern', () => {
  it('flags script tags', () => {
    expect(containsSuspiciousPattern('<script>x</script>')).toBe(true);
  });

  it('allows ordinary occupation text', () => {
    expect(containsSuspiciousPattern('Software Developer')).toBe(false);
  });
});
