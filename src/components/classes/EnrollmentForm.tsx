import React, { useState } from 'react';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseType: string; // To differentiate between Beginner, Intermediate, Advanced
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ isOpen, onClose, courseType }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentJobStatus, setCurrentJobStatus] = useState('');
  const [desiredOccupation, setDesiredOccupation] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enrollment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phoneNumber, currentJobStatus, desiredOccupation, courseType }),
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
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">Full Legal Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="John Doe"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="john.doe@example.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address (e.g., john.doe@example.com)"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="+358 123 4567"
              pattern="^[+]?[0-9\s()-]{7,25}$"
              title="Please enter a valid phone number (e.g., +358 123 4567)"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="Student, Employed, Unemployed, etc."
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-aurora-blue focus:border-aurora-blue text-base sm:text-sm placeholder-gray-400 text-gray-900 bg-white"
              placeholder="Software Developer, Nurse, Entrepreneur, etc."
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
