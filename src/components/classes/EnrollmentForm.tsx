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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-6 w-64 h-64 bg-aurora-blue/30 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-16 -left-8 w-72 h-72 bg-aurora-green/25 rounded-full blur-3xl opacity-70"></div>
      </div>
      <div className="relative w-full max-w-2xl">
        <div className="relative bg-white/85 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_20px_80px_rgba(15,23,42,0.45)] overflow-hidden animate-scale-in max-h-[90vh] flex flex-col">
          <div className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-aurora-blue/20 via-transparent to-aurora-purple/30 opacity-70"></div>
          <div className="relative p-6 sm:p-8 lg:p-10 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-all duration-300 text-3xl font-light leading-none"
              aria-label="Close enrollment form"
            >
              &times;
            </button>

            {/* Header */}
            <div className="text-center space-y-3 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 bg-white/70 border border-aurora-blue/20 shadow-sm">
                Secure Enrollment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Begin Your Journey with&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple">
                  {displayCourseName}
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                Our concierge team carefully reviews every submission. Expect a personalized response with tailored next steps within one business day.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="rounded-2xl bg-white/80 border border-slate-100 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Course Focus</p>
                <p className="text-lg font-semibold text-aurora-blue">{displayCourseName}</p>
                <p className="text-xs text-slate-500 mt-1">Premium learning guarantee</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-aurora-green/10 to-aurora-blue/10 border border-aurora-blue/20 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Response Time</p>
                <p className="text-lg font-semibold text-slate-900">Within 24 hours</p>
                <p className="text-xs text-slate-500 mt-1">Direct access to our team</p>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
          
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

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1">Full Legal Name</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={() => handleFieldInteraction('fullName')}
                  className="mt-1 block w-full rounded-2xl border border-white/60 bg-white/90 py-3 pl-12 pr-4 text-base text-slate-900 shadow-inner shadow-white/10 focus:border-aurora-blue/40 focus:ring-2 focus:ring-aurora-blue/40 placeholder-slate-400 transition"
                  placeholder="John Doe"
                  pattern="^[a-zA-ZÀ-ÿ\s'\-]{2,100}$"
                  title="Please enter your full legal name (2-100 characters, letters only)"
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFieldInteraction('email')}
                  className="mt-1 block w-full rounded-2xl border border-white/60 bg-white/90 py-3 pl-12 pr-4 text-base text-slate-900 shadow-inner focus:border-aurora-blue/40 focus:ring-2 focus:ring-aurora-blue/40 placeholder-slate-400 transition"
                  placeholder="john.doe@example.com"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address (e.g., john.doe@example.com)"
                  maxLength={254}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11 18h2" />
                  </svg>
                </span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onFocus={() => handleFieldInteraction('phoneNumber')}
                  className="mt-1 block w-full rounded-2xl border border-white/60 bg-white/90 py-3 pl-12 pr-4 text-base text-slate-900 shadow-inner focus:border-aurora-blue/40 focus:ring-2 focus:ring-aurora-blue/40 placeholder-slate-400 transition"
                  placeholder="+358 123 4567"
                  pattern="^[+]?[0-9\s()-]{7,25}$"
                  title="Please enter a valid phone number (7-25 characters, e.g., +358 123 4567)"
                  minLength={7}
                  maxLength={25}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="currentJobStatus" className="block text-sm font-semibold text-slate-700 mb-1">Current Job Status</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 11c2.21 0 4-1.567 4-3.5S14.21 4 12 4 8 5.567 8 7.5 9.79 11 12 11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6.5 20a6 6 0 0111 0" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="currentJobStatus"
                  name="currentJobStatus"
                  value={currentJobStatus}
                  onChange={(e) => setCurrentJobStatus(e.target.value)}
                  onFocus={() => handleFieldInteraction('currentJobStatus')}
                  className="mt-1 block w-full rounded-2xl border border-white/60 bg-white/90 py-3 pl-12 pr-4 text-base text-slate-900 shadow-inner focus:border-aurora-blue/40 focus:ring-2 focus:ring-aurora-blue/40 placeholder-slate-400 transition"
                  placeholder="Student, Employed, Entrepreneur..."
                  pattern="^[a-zA-Z0-9À-ÿ\s.,\-'/()]{2,100}$"
                  title="Please enter your current job status (2-100 characters)"
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="desiredOccupation" className="block text-sm font-semibold text-slate-700 mb-1">Desired Occupation</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7v10m5-5H7" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="desiredOccupation"
                  name="desiredOccupation"
                  value={desiredOccupation}
                  onChange={(e) => setDesiredOccupation(e.target.value)}
                  onFocus={() => handleFieldInteraction('desiredOccupation')}
                  className="mt-1 block w-full rounded-2xl border border-white/60 bg-white/90 py-3 pl-12 pr-4 text-base text-slate-900 shadow-inner focus:border-aurora-blue/40 focus:ring-2 focus:ring-aurora-blue/40 placeholder-slate-400 transition"
                  placeholder="Software Developer, Nurse..."
                  pattern="^[a-zA-Z0-9À-ÿ\s.,\-'/()]{2,100}$"
                  title="Please enter your desired occupation (2-100 characters)"
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-aurora-green to-aurora-blue shadow-[0_15px_45px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.35)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
                <>
                  <span>Submit Enrollment</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 5l7 7-7 7M21 12H3" />
                  </svg>
                </>
              )}
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-aurora-green animate-pulse"></span>
                Military-grade validation & encryption
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" />
                </svg>
                No spam • No automated emails
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <p className="text-center text-green-700 font-medium mt-4 p-4 bg-green-50/90 rounded-2xl border border-green-200 animate-fade-in">
              Enrollment submitted successfully! We will contact you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-red-700 font-medium mt-4 p-4 bg-red-50/90 rounded-2xl border border-red-200 animate-fade-in" role="alert" aria-live="assertive">
              {errorMessage}
            </p>
          )}
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
