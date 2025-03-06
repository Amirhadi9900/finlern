import React, { useState, useRef, FormEvent, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import emailjs from '@emailjs/browser'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Contact() {
  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [newsletterSubmitSuccess, setNewsletterSubmitSuccess] = useState(false);
  const [newsletterSubmitError, setNewsletterSubmitError] = useState('');

  // Initialize animations and EmailJS on component mount
  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init({
      // Your EmailJS public key from your account dashboard
      publicKey: 'yCz0bAgBayX58whbD', // Replace this with your actual public key
    });
    
    if (typeof window !== 'undefined') {
      // Trigger scroll animations
      const cleanup = window.scrollAnimations?.init();
      
      // Clean up animations when component unmounts
      return () => {
        if (cleanup && typeof cleanup === 'function') {
          cleanup();
        } else if (window.scrollAnimations?.cleanup) {
          window.scrollAnimations.cleanup();
        }
      };
    }
  }, []);

  // EmailJS service and template IDs
  const EMAILJS_SERVICE_ID = 'service_k73du03'; // Replace this with your actual service ID
  const EMAILJS_TEMPLATE_ID = 'template_s2xmj3b'; // Replace this with your actual template ID
  const EMAILJS_NEWSLETTER_TEMPLATE_ID = 'template_xqopugo'; // Replace this with your actual newsletter template ID

  // Handle contact form submission with enhanced error handling
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!firstName || !lastName || !email || !subject || !message || !privacyChecked) {
      setSubmitError('Please fill out all required fields and accept the privacy policy.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
        to_email: 'info@finlern.fi'
      };
      
      console.log('Sending email with params:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      // Reset form on success
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setPrivacyChecked(false);
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      // Show more detailed error information
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        
        // Handle specific error types
        if (error.message.includes('origin') || error.message.includes('CORS')) {
          setSubmitError('Domain not allowed. Try on production or contact administrator.');
        } else if (error.message.includes('Account not found')) {
          setSubmitError('EmailJS account configuration issue. Please check credentials.');
        } else {
          setSubmitError(`Failed to send message: ${error.message}`);
        }
      } else {
        setSubmitError('Failed to send message. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle newsletter subscription with enhanced error handling
  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!newsletterEmail) {
      setNewsletterSubmitError('Please enter your email address.');
      return;
    }
    
    try {
      const templateParams = {
        from_email: newsletterEmail,
        to_email: 'info@finlern.fi',
        subject: 'New Newsletter Subscription'
      };
      
      console.log('Sending newsletter subscription with params:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NEWSLETTER_TEMPLATE_ID,
        templateParams
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      // Reset form on success
      setNewsletterEmail('');
      setNewsletterSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setNewsletterSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      // Show more detailed error information
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        
        // Handle specific error types
        if (error.message.includes('origin') || error.message.includes('CORS')) {
          setNewsletterSubmitError('Domain not allowed. Try on production or contact administrator.');
        } else if (error.message.includes('Account not found')) {
          setNewsletterSubmitError('EmailJS account configuration issue. Please check credentials.');
        } else {
          setNewsletterSubmitError(`Failed to subscribe: ${error.message}`);
        }
      } else {
        setNewsletterSubmitError('Failed to subscribe. Please try again later.');
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Get in touch with Finlern for any questions about our Finnish language classes, events, or custom learning solutions." />
      </Head>

      {/* Hero Section */}
      <section className="bg-aurora-purple py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              We'd love to hear from you! Get in touch with any questions about our classes or services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8 text-left text-aurora-blue">Get in Touch</h2>
              
              <div className="space-y-10">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="bg-aurora-purple/10 p-4 rounded-full mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-700 mb-1">Main Office: +358 (0) 40 123 4567</p>
                    <p className="text-gray-700">Student Support: +358 (0) 40 765 4321</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="bg-aurora-blue/10 p-4 rounded-full mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-700 mb-1">General Inquiries: info@finlern.fi</p>
                    <p className="text-gray-700">Student Support: support@finlern.fi</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center">
                  <div className="bg-aurora-green/10 p-4 rounded-full mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-700 mb-1">Finlern Language Center</p>
                    <p className="text-gray-700 mb-1">Mannerheimintie 123</p>
                    <p className="text-gray-700">00100 Helsinki, Finland</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center">
                  <div className="bg-aurora-teal/10 p-4 rounded-full mr-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-aurora-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-700 mb-1">Monday to Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-sky-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-aurora-violet">Send Us a Message</h2>
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you as soon as possible.
                </div>
              )}
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {submitError}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                    placeholder="+358 40 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                  <select 
                    id="subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                    required
                  >
                    <option value="">Please select a subject</option>
                    <option value="class-inquiry">Class Inquiry</option>
                    <option value="private-lessons">Private Lessons</option>
                    <option value="events">Events Information</option>
                    <option value="business-services">Business Finnish Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aurora-blue focus:border-aurora-blue text-gray-800"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    checked={privacyChecked}
                    onChange={(e) => setPrivacyChecked(e.target.checked)}
                    className="h-4 w-4 text-aurora-blue focus:ring-aurora-blue border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="/privacy-policy" className="text-aurora-blue hover:underline">privacy policy</a> and consent to Finlern storing my submitted information to respond to my inquiry.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-aurora-purple hover:bg-aurora-purple-dark text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-aurora-blue">Find Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our main language center is conveniently located in the heart of Helsinki, easily accessible by public transport.
            </p>
          </div>
          
          <div className="relative h-[450px] rounded-lg overflow-hidden shadow-md">
            {/* Placeholder for the map */}
            <div className="absolute inset-0 bg-gray-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-aurora-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-aurora-blue text-lg font-medium">Map of Helsinki Location</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-semibold mb-2">Finlern Language Center</h3>
                <p className="text-gray-700 mb-4">Mannerheimintie 123, 00100 Helsinki</p>
                <div className="flex items-center text-sm text-gray-700 mb-4">
                  <svg className="w-4 h-4 mr-1 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Just 5 minutes walk from Helsinki Central Station</span>
                </div>
                <button className="bg-aurora-blue hover:bg-aurora-blue-dark text-white font-medium py-2 px-4 rounded-md transition duration-300 w-full">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-aurora-blue">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Some common questions about contacting us and our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="bg-cyan-800 rounded-lg p-1 text-lg font-semibold mb-3">How quickly will I receive a response to my inquiry?</h3>
              <p className="text-gray-700">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, 
                we recommend calling our office directly.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="bg-cyan-800 rounded-lg p-1 text-lg font-semibold mb-3">Do you offer virtual consultations for prospective students?</h3>
              <p className="text-gray-700">
                Yes! We offer 15-minute free consultations via Zoom or phone to discuss your Finnish learning 
                goals and help you choose the right course.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="bg-cyan-800 rounded-lg p-1 text-lg font-semibold mb-3">Can I visit the language center before signing up for a class?</h3>
              <p className="text-gray-700">
                Absolutely! We encourage prospective students to visit our center, meet our teachers, 
                and get a feel for our learning environment. Contact us to schedule a visit.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="bg-cyan-800 rounded-lg p-1 text-lg font-semibold mb-3">Do you have other locations besides Helsinki?</h3>
              <p className="text-gray-700">
                Currently, our physical language center is only in Helsinki, but we offer online classes 
                that are accessible from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-aurora-night text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest Finnish language tips, event announcements, and special offers.
            </p>
            {newsletterSubmitSuccess && (
              <div className="bg-green-700 text-white px-4 py-3 rounded mb-6">
                Thank you for subscribing to our newsletter!
              </div>
            )}
            {newsletterSubmitError && (
              <div className="bg-red-700 text-white px-4 py-3 rounded mb-6">
                {newsletterSubmitError}
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 text-gray-900 rounded-md focus:ring-2 focus:ring-aurora-blue"
                required
              />
              <button type="submit" className="btn-primary py-3 px-6">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 