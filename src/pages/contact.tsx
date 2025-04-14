import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/Layout'

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
  // Initialize animations on component mount
  useEffect(() => {
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

  return (
    <Layout>
      <Head>
        <title>Contact Us | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Get in touch with Finlern for any questions about our Finnish language classes, events, or custom learning solutions." />
      </Head>

      {/* Hero Section - Enhanced with animations and patterns */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background with Aurora Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-green to-aurora-purple">
          {/* Animated floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-aurora-blue/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-aurora-purple/15 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          {/* Mesh overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-white font-medium" data-aos="fade-up" data-aos-duration="800">
              Contact Us
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Let's Connect
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We're here to help you on your Finnish language journey. Reach out to us with any questions.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex justify-center"
            >
              <a 
                href="#contact-info" 
                className="px-8 py-3 bg-white text-aurora-blue rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
              >
                <span>Contact Us</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Redesigned */}
      <section id="contact-info" className="py-24 md:py-32 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-block mb-4">
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                  Get in Touch
                </span>
                  </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our courses, want to discuss custom learning solutions, or just want to say hello.
              </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-4">
              {/* Phone Contact Card - Enhanced */}
              <div 
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="0"
              >
                <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
                <div className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-aurora-blue to-aurora-purple rounded-full flex items-center justify-center mb-8 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">Call Us</h3>
                  <div className="text-center">
                    <p className="text-lg text-gray-600 mb-3">Main Office</p>
                    <a href="tel:+358417567339" className="text-xl font-medium text-gray-800 block hover:text-aurora-blue transition-colors">
                      +358 41 756 7339
                    </a>
                    <p className="text-sm text-gray-500 mt-3">Mon-Fri 9:00-17:00</p>
                  </div>
                  </div>
                </div>

              {/* Email Contact Card - Enhanced */}
              <div 
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-teal w-full"></div>
                <div className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-aurora-green to-aurora-teal rounded-full flex items-center justify-center mb-8 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">Email Us</h3>
                  <div className="text-center">
                    <p className="text-lg text-gray-600 mb-3">General Inquiries</p>
                    <a href="mailto:info@finlern.fi" className="text-xl font-medium text-gray-800 block hover:text-aurora-green transition-colors">
                      info@finlern.fi
                    </a>
                    <p className="text-sm text-gray-500 mt-3">We respond within 24 hours</p>
                  </div>
                  </div>
                </div>

              {/* Location Contact Card - Enhanced */}
              <div 
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-1"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-violet w-full"></div>
                <div className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-aurora-purple to-aurora-violet rounded-full flex items-center justify-center mb-8 mx-auto">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-4">Visit Us</h3>
                  <div className="text-center">
                    <p className="text-lg text-gray-600 mb-3">Finlern Language Center</p>
                    <p className="text-xl font-medium text-gray-800">
                      Kaakonojantie<br />
                      Valkeakoski, Finland
                    </p>
                    <p className="text-sm text-gray-500 mt-3">Open Mon-Fri 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Section - Enhanced */}
            <div 
              className="relative rounded-2xl overflow-hidden my-16 mx-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/10 to-aurora-purple/10">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
              
              <div className="relative p-10 md:p-16 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Finnish Journey?</h3>
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      We're excited to help you learn Finnish in a fun and effective way. If you have any questions about our courses, scheduling, or teaching methods, please reach out to us via email.
                    </p>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-aurora-green to-aurora-blue rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-800 mb-2">
                            Send us an email at:
                          </p>
                          <a 
                            href="mailto:info@finlern.fi" 
                            className="text-2xl font-bold text-aurora-blue hover:text-aurora-purple transition-colors"
                          >
                            info@finlern.fi
                  </a>
                </div>
              </div>
            </div>
                  </div>
                  <div className="relative hidden md:block">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-aurora-blue to-aurora-purple blur-lg opacity-30"></div>
                    <div className="relative bg-white p-2 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <Image 
                        src="/images/finlern.png" 
                        alt="Finlern Logo" 
                        width={500} 
                        height={300} 
                        className="rounded-lg" 
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/500x300?text=Finlern";
                          target.onerror = null; // Prevent infinite loop
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section - Enhanced */}
            <div className="mt-20 text-center px-4" data-aos="fade-up" data-aos-duration="800">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-8"></div>
              <div className="flex justify-center items-center space-x-8">
                <a 
                  href="#" 
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/finlern-oy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 md:py-28 relative">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,transparent_10%,#6B8AFD05_45%,#6B8AFD10_55%,transparent_90%)]"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>
        
        <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-block mb-4">
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-gray-600 px-4 leading-relaxed">
                Have questions? Find quick answers to common inquiries about our services.
            </p>
          </div>
          
            <div className="space-y-8 px-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-aurora-blue mb-4">How quickly will I receive a response to my inquiry?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, 
                we recommend calling our office directly.
              </p>
            </div>
            
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-aurora-blue mb-4">Do you offer virtual consultations for prospective students?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                Yes! We offer 15-minute free consultations via Zoom or phone to discuss your Finnish learning 
                goals and help you choose the right course.
              </p>
            </div>
            
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-aurora-blue mb-4">Can I visit the language center before signing up for a class?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                Absolutely! We encourage prospective students to visit our center, meet our teachers, 
                and get a feel for our learning environment. Contact us to schedule a visit.
              </p>
            </div>
            
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-aurora-blue mb-4">Do you have other locations besides Helsinki?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                Currently, our physical language center is only in Helsinki, but we offer online classes 
                that are accessible from anywhere in the world.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 