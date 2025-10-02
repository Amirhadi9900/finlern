import React, { useState } from 'react';
import { sanitizeInput, containsSuspiciousPattern } from '@/utils/inputSanitizer';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseType: string; // To differentiate between Beginner, Intermediate, Advanced
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ isOpen, onClose, courseType }) => {
  // Real form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentJobStatus, setCurrentJobStatus] = useState('');
  const [desiredOccupation, setDesiredOccupation] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // 🍯 HONEYPOT FIELDS (Anti-Bot Protection)
  // 1. Classic honeypot - hidden field with attractive name
  const [website, setWebsite] = useState(''); // Bots love filling "website" fields
  
  // 2. Time-based detection - track when form was opened
  const [formOpenTime] = useState(Date.now());
  
  // 3. Interaction tracking - detect if user actually interacted with form
  const [userInteracted, setUserInteracted] = useState(false);
  
  // 4. Field fill order tracking - humans don't fill forms in DOM order
  const [fieldFillOrder, setFieldFillOrder] = useState<string[]>([]);

  if (!isOpen) return null;

  // Track field interactions (humans interact with fields, bots don't)
  const handleFieldInteraction = (fieldName: string) => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
    // Track the order in which fields are filled
    if (!fieldFillOrder.includes(fieldName)) {
      setFieldFillOrder(prev => [...prev, fieldName]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    // 🍯 BOT DETECTION - Multi-layered honeypot checks
    
    // Check 1: Classic honeypot field (if filled, it's a bot)
    if (website && website.trim().length > 0) {
      console.warn('Bot detected: Honeypot field filled');
      setErrorMessage('There was an error submitting your enrollment. Please try again.');
      setSubmitStatus('error');
      return;
    }

    // Check 2: Time-based detection (humans need at least 2 seconds to fill a form)
    const timeSpent = Date.now() - formOpenTime;
    if (timeSpent < 2000) {
      console.warn('Bot detected: Form submitted too quickly', { timeSpent });
      setErrorMessage('Please take your time filling out the form.');
      setSubmitStatus('error');
      return;
    }

    // Check 3: Interaction detection (humans interact with form fields)
    if (!userInteracted) {
      console.warn('Bot detected: No user interaction detected');
      setErrorMessage('Please fill out all form fields.');
      setSubmitStatus('error');
      return;
    }

    // Check 4: Field fill order (optional - too strict may cause false positives)
    // Humans typically don't fill all fields in exact DOM order
    const expectedOrder = ['fullName', 'email', 'phoneNumber', 'currentJobStatus', 'desiredOccupation'];
    const isExactOrder = fieldFillOrder.length === expectedOrder.length && 
                         fieldFillOrder.every((field, index) => field === expectedOrder[index]);
    
    if (isExactOrder && timeSpent < 10000) {
      // If filled in exact order AND very quickly, likely a bot
      console.warn('Bot detected: Suspicious fill order pattern');
      setErrorMessage('There was an error submitting your enrollment. Please try again.');
      setSubmitStatus('error');
      return;
    }

    // Sanitize all inputs before validation
    const sanitizedFullName = sanitizeInput(fullName, 'name');
    const sanitizedEmail = sanitizeInput(email, 'email');
    const sanitizedPhone = sanitizeInput(phoneNumber, 'phone');
    const sanitizedJob = sanitizeInput(currentJobStatus, 'text');
    const sanitizedOccupation = sanitizeInput(desiredOccupation, 'text');

    // Client-side validation for security
    if (sanitizedFullName.length < 2 || sanitizedFullName.length > 100) {
      setErrorMessage('Full name must be between 2 and 100 characters.');
      setSubmitStatus('error');
      return;
    }

    if (sanitizedEmail.length > 254) {
      setErrorMessage('Email address is too long.');
      setSubmitStatus('error');
      return;
    }

    if (sanitizedPhone.length < 7 || sanitizedPhone.length > 25) {
      setErrorMessage('Phone number must be between 7 and 25 characters.');
      setSubmitStatus('error');
      return;
    }

    if (sanitizedJob.length < 2 || sanitizedJob.length > 100) {
      setErrorMessage('Current job status must be between 2 and 100 characters.');
      setSubmitStatus('error');
      return;
    }

    if (sanitizedOccupation.length < 2 || sanitizedOccupation.length > 100) {
      setErrorMessage('Desired occupation must be between 2 and 100 characters.');
      setSubmitStatus('error');
      return;
    }

    // Check for suspicious patterns
    const allInputs = [sanitizedFullName, sanitizedEmail, sanitizedPhone, sanitizedJob, sanitizedOccupation, courseType];
    if (allInputs.some(input => containsSuspiciousPattern(input))) {
      setErrorMessage('Invalid input detected. Please check your information and try again.');
      setSubmitStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/enrollment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          fullName: sanitizedFullName, 
          email: sanitizedEmail, 
          phoneNumber: sanitizedPhone, 
          currentJobStatus: sanitizedJob, 
          desiredOccupation: sanitizedOccupation, 
          courseType,
          // 🍯 Honeypot metadata for server-side verification
          _honeypot: {
            website: website, // Should always be empty
            timeSpent: timeSpent, // Time spent filling form
            userInteracted: userInteracted, // Did user interact with fields
            fieldFillOrder: fieldFillOrder // Order in which fields were filled
          }
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFullName('');
          setEmail('');
          setPhoneNumber('');
          setCurrentJobStatus('');
          setDesiredOccupation('');
          setSubmitStatus('idle');
          setErrorMessage('');
        }, 3000); // Close after 3 seconds and reset form
      } else {
        let message = 'There was an error submitting your enrollment. Please try again.';
        try {
          const data = await response.json();
          if (data && typeof data.message === 'string' && data.message.trim().length > 0) {
            message = data.message;
          }
        } catch (_) {
          // ignore JSON parse errors and keep default message
        }
        setErrorMessage(message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  const getDisplayCourseName = (course: string) => {
    if (course.endsWith(' Course')) {
      return course.substring(0, course.lastIndexOf(' Course'));
    }
    return course;
  };

  const displayCourseName = getDisplayCourseName(courseType);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 md:p-6 lg:p-8 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md md:max-w-lg w-full transform scale-95 animate-scale-in border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-all duration-300 text-3xl font-light leading-none focus:outline-none"
          aria-label="Close enrollment form"
        >
          &times;
        </button>
        
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-purple">
          Enroll in <span className="block text-xl sm:text-2xl md:text-3xl font-semibold mt-1 text-aurora-green">{displayCourseName}</span>
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8">Fill out the form below to begin your learning journey with Finlern.</p>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          
          {/* 🍯 HONEYPOT FIELD - INVISIBLE TO HUMANS, ATTRACTIVE TO BOTS */}
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <div 
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden'
            }}
            aria-hidden="true"
          >
            <label htmlFor="website">Website (leave blank)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">Full Legal Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => handleFieldInteraction('fullName')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="John Doe"
              pattern="^[a-zA-ZÀ-ÿ\s'\-]{2,100}$"
              title="Please enter your full legal name (2-100 characters, letters only)"
              minLength={2}
              maxLength={100}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFieldInteraction('email')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="john.doe@example.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address (e.g., john.doe@example.com)"
              maxLength={254}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onFocus={() => handleFieldInteraction('phoneNumber')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="+358 123 4567"
              pattern="^[+]?[0-9\s()-]{7,25}$"
              title="Please enter a valid phone number (7-25 characters, e.g., +358 123 4567)"
              minLength={7}
              maxLength={25}
              required
            />
          </div>
          <div>
            <label htmlFor="currentJobStatus" className="block text-sm font-semibold text-gray-700 mb-1">Current Job Status</label>
            <input
              type="text"
              id="currentJobStatus"
              name="currentJobStatus"
              value={currentJobStatus}
              onChange={(e) => setCurrentJobStatus(e.target.value)}
              onFocus={() => handleFieldInteraction('currentJobStatus')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="Student, Employed, Unemployed, etc."
              pattern="^[a-zA-Z0-9À-ÿ\s.,\-'/()]{2,100}$"
              title="Please enter your current job status (2-100 characters)"
              minLength={2}
              maxLength={100}
              required
            />
          </div>
          <div>
            <label htmlFor="desiredOccupation" className="block text-sm font-semibold text-gray-700 mb-1">Desired Occupation</label>
            <input
              type="text"
              id="desiredOccupation"
              name="desiredOccupation"
              value={desiredOccupation}
              onChange={(e) => setDesiredOccupation(e.target.value)}
              onFocus={() => handleFieldInteraction('desiredOccupation')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="Software Developer, Nurse, Entrepreneur, etc."
              pattern="^[a-zA-Z0-9À-ÿ\s.,\-'/()]{2,100}$"
              title="Please enter your desired occupation (2-100 characters)"
              minLength={2}
              maxLength={100}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gradient-to-r from-aurora-green to-aurora-blue hover:from-aurora-green/90 hover:to-aurora-blue/90 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2"
            disabled={submitStatus === 'loading'}
          >
            {submitStatus === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Enrollment</span>
            )}
          </button>
          {submitStatus === 'success' && (
            <p className="text-center text-green-700 font-medium mt-4 p-3 bg-green-50 rounded-lg border border-green-200 animate-fade-in">Enrollment submitted successfully! We will contact you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-red-700 font-medium mt-4 p-3 bg-red-50 rounded-lg border border-red-200 animate-fade-in" role="alert" aria-live="assertive">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
