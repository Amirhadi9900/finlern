/**
 * Professional Input Sanitizer Utility
 * 
 * Addresses CodeQL vulnerability: Incomplete multi-character sanitization
 * Uses industry-standard techniques from OWASP guidelines
 * 
 * Security Features:
 * 1. Multi-pass sanitization (prevents pattern reformation)
 * 2. Character-by-character filtering (prevents bypass)
 * 3. DOMPurify integration (for HTML contexts)
 * 4. Context-aware sanitization (name, email, phone, text)
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Multi-pass regex replacement
 * Applies regex repeatedly until no more matches (prevents pattern reformation)
 */
const multiPassReplace = (input: string, pattern: RegExp, replacement: string): string => {
  let result = input;
  let previousResult;
  let iterations = 0;
  const MAX_ITERATIONS = 10; // Prevent infinite loops
  
  do {
    previousResult = result;
    result = result.replace(pattern, replacement);
    iterations++;
  } while (result !== previousResult && iterations < MAX_ITERATIONS);
  
  return result;
};

/**
 * Character-by-character dangerous pattern removal
 * More secure than regex for certain patterns
 */
const removeEventHandlers = (input: string): string => {
  // Remove any occurrence of "on" followed by alphanumeric and "="
  // This approach prevents "oonclick" -> "onclick" bypass
  let result = '';
  let i = 0;
  
  while (i < input.length) {
    // Check if current position starts with "on" followed by word chars and "="
    if (i <= input.length - 3 && 
        input[i].toLowerCase() === 'o' && 
        input[i + 1].toLowerCase() === 'n') {
      
      // Look ahead for event handler pattern: on[word chars][optional spaces]=
      let j = i + 2;
      let foundEventHandler = false;
      
      // Skip word characters (letters, numbers, underscore)
      while (j < input.length && /\w/.test(input[j])) {
        j++;
      }
      
      // Skip optional whitespace
      while (j < input.length && /\s/.test(input[j])) {
        j++;
      }
      
      // Check for equals sign
      if (j < input.length && input[j] === '=') {
        foundEventHandler = true;
        i = j + 1; // Skip the entire event handler
        continue;
      }
    }
    
    result += input[i];
    i++;
  }
  
  return result;
};

/**
 * Sanitize dangerous HTML/JavaScript patterns
 * Uses multi-pass approach to prevent pattern reformation
 */
const sanitizeDangerousPatterns = (input: string): string => {
  let sanitized = input;
  
  // 1. Remove null bytes and control characters (single pass is safe here)
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  
  // 2. Multi-pass removal of script tags
  sanitized = multiPassReplace(sanitized, /<script[^>]*>.*?<\/script>/gi, '');
  sanitized = multiPassReplace(sanitized, /<script/gi, '');
  sanitized = multiPassReplace(sanitized, /script>/gi, '');
  
  // 3. Multi-pass removal of iframe tags
  sanitized = multiPassReplace(sanitized, /<iframe[^>]*>.*?<\/iframe>/gi, '');
  sanitized = multiPassReplace(sanitized, /<iframe/gi, '');
  sanitized = multiPassReplace(sanitized, /iframe>/gi, '');
  
  // 4. Multi-pass removal of javascript: protocol
  sanitized = multiPassReplace(sanitized, /javascript:/gi, '');
  sanitized = multiPassReplace(sanitized, /java\s*script:/gi, '');
  
  // 5. Remove event handlers using character-by-character approach
  sanitized = removeEventHandlers(sanitized);
  
  // 6. Additional dangerous patterns (multi-pass)
  sanitized = multiPassReplace(sanitized, /vbscript:/gi, '');
  sanitized = multiPassReplace(sanitized, /data:text\/html/gi, '');
  sanitized = multiPassReplace(sanitized, /<embed/gi, '');
  sanitized = multiPassReplace(sanitized, /<object/gi, '');
  
  return sanitized;
};

/**
 * Professional input sanitization function
 * Context-aware and secure against bypass attacks
 */
export const sanitizeInput = (input: string, type: 'name' | 'text' | 'email' | 'phone'): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // First pass: Basic trimming
  let sanitized = input.trim();
  
  // Second pass: Remove dangerous patterns (multi-pass approach)
  sanitized = sanitizeDangerousPatterns(sanitized);
  
  // Third pass: Type-specific sanitization
  if (type === 'name') {
    // Only allow letters, spaces, hyphens, apostrophes, and international characters
    // Character-by-character filtering (most secure)
    sanitized = sanitized
      .split('')
      .filter(char => {
        const code = char.charCodeAt(0);
        return (
          (code >= 65 && code <= 90) ||   // A-Z
          (code >= 97 && code <= 122) ||  // a-z
          (code >= 192 && code <= 255) || // À-ÿ (international)
          char === ' ' ||
          char === "'" ||
          char === '-'
        );
      })
      .join('');
    
    // Remove multiple consecutive spaces
    sanitized = multiPassReplace(sanitized, /\s+/g, ' ');
    
  } else if (type === 'text') {
    // Allow alphanumeric, spaces, and basic punctuation
    // Character-by-character filtering
    sanitized = sanitized
      .split('')
      .filter(char => {
        const code = char.charCodeAt(0);
        return (
          (code >= 48 && code <= 57) ||   // 0-9
          (code >= 65 && code <= 90) ||   // A-Z
          (code >= 97 && code <= 122) ||  // a-z
          (code >= 192 && code <= 255) || // À-ÿ (international)
          char === ' ' ||
          char === '.' ||
          char === ',' ||
          char === '-' ||
          char === "'" ||
          char === '/' ||
          char === '(' ||
          char === ')'
        );
      })
      .join('');
    
    // Remove multiple consecutive spaces
    sanitized = multiPassReplace(sanitized, /\s+/g, ' ');
    
  } else if (type === 'phone') {
    // Only allow digits, +, spaces, parentheses, and hyphens
    // Character-by-character filtering
    sanitized = sanitized
      .split('')
      .filter(char => {
        const code = char.charCodeAt(0);
        return (
          (code >= 48 && code <= 57) ||  // 0-9
          char === '+' ||
          char === ' ' ||
          char === '(' ||
          char === ')' ||
          char === '-'
        );
      })
      .join('');
    
  } else if (type === 'email') {
    // Remove spaces and convert to lowercase
    sanitized = sanitized.replace(/\s/g, '').toLowerCase();
    
    // Additional email-specific sanitization
    // Only allow valid email characters
    sanitized = sanitized
      .split('')
      .filter(char => {
        const code = char.charCodeAt(0);
        return (
          (code >= 48 && code <= 57) ||   // 0-9
          (code >= 65 && code <= 90) ||   // A-Z
          (code >= 97 && code <= 122) ||  // a-z
          char === '.' ||
          char === '_' ||
          char === '%' ||
          char === '+' ||
          char === '-' ||
          char === '@'
        );
      })
      .join('');
  }
  
  // Final pass: DOMPurify for any remaining HTML context
  // (Extra layer of security)
  sanitized = DOMPurify.sanitize(sanitized, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No HTML attributes allowed
    KEEP_CONTENT: true // Keep text content
  });
  
  return sanitized.trim();
};

/**
 * Detect suspicious patterns (unchanged from original, works well)
 */
export const containsSuspiciousPattern = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /<iframe/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /<embed/i,
    /<object/i,
    /SELECT.*FROM/i,
    /INSERT.*INTO/i,
    /DELETE.*FROM/i,
    /DROP.*TABLE/i,
    /UNION.*SELECT/i,
    /\.\.\//,  // Path traversal
    /\.\.\\/,  // Path traversal
    /\\x[0-9a-f]{2}/i, // Hex encoding
    /%[0-9a-f]{2}/i,   // URL encoding of suspicious chars
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(input));
};

/**
 * Sanitize for HTML context (when displaying user input)
 * Uses DOMPurify with strict configuration
 */
export const sanitizeForHTML = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'], // Very limited
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
    RETURN_TRUSTED_TYPE: false
  });
};

/**
 * Sanitize for URL context
 */
export const sanitizeForURL = (input: string): string => {
  // Only allow safe URL protocols
  const urlPattern = /^(https?|mailto|tel):/i;
  
  if (!urlPattern.test(input)) {
    return '';
  }
  
  // Use DOMPurify with URI_SAFE_ATTRIBUTES
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    ALLOW_DATA_ATTR: false,
    SAFE_FOR_TEMPLATES: true
  });
};

