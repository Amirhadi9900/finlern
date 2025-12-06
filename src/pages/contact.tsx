import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import SEO from '@/components/SEO'

const contactKeywords = [
  'Finnish relocation partner',
  'Consulting services in Finland',
  'Complete integration support',
  'Language proficiency Finland',
  'Cultural immersion Finland',
  'Workplace etiquette Finland',
  'Professional networking Finland',
  'Relocation services in Finland',
  'Finnish life support',
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Finlern',
  url: 'https://finlern.vercel.app/contact',
  email: 'info@finlern.fi',
  telephone: '+358417567339',
  image: 'https://finlern.vercel.app/images/finlern.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tietotie 1',
    addressLocality: 'Valkeakoski',
    postalCode: '37630',
    addressCountry: 'FI',
  },
  areaServed: [
    'Helsinki',
    'Espoo',
    'Vantaa',
    'Tampere',
    'Hämeenlinna',
    'Lahti',
    'Lappeenranta',
    'Riihimäki',
    'Jyväskylä',
  ],
  sameAs: [
    'https://www.facebook.com/people/Finlern/61578171630486/',
    'https://www.linkedin.com/company/finlern-oy/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@finlern.fi',
    telephone: '+358417567339',
    availableLanguage: ['English', 'Finnish'],
  },
  serviceType: [
    'Finnish language mastery',
    'Relocation consulting',
    'Cultural integration programs',
  ],
}

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
      <SEO
        title="Contact Us"
        description="Reach Finlern for Finnish language mastery, relocation consulting, cultural integration, and workplace etiquette support across Finland."
        canonical="https://finlern.vercel.app/contact"
        keywords={contactKeywords}
        structuredData={contactSchema}
      />

      {/* Hero Section - Enhanced with modern design */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Modern background with aurora effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-night via-aurora-purple/90 to-aurora-blue/80">
          {/* Simplified atmospheric glow */}
          <div className="absolute inset-0 bg-[conic-gradient(at_80%_20%,rgba(71,167,106,0.1),rgba(62,138,193,0.1),rgba(157,78,221,0.1),rgba(255,97,239,0.15),rgba(71,167,106,0.1))] opacity-50"></div>
          
          {/* Floating orb effects */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[15%] left-[15%] w-[40vw] max-w-[400px] aspect-square rounded-full bg-gradient-to-br from-aurora-blue/20 via-aurora-purple/10 to-transparent blur-[60px] animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-aurora-green/15 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
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
              We're here to help you with language learning, relocation services, and building your success in Finland. Reach out to us with any questions🤗  
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

      {/* Contact Information Section - Redesigned with modern styling */}
      <section id="contact-info" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Animated aurora blobs */}
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-aurora-blue/5 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-aurora-purple/5 rounded-full blur-3xl animate-float-delayed opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-block mb-4">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in Touch
                </span>
                  </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-purple">Get in Touch</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you! Whether you have questions about our language courses, need relocation assistance, want to discuss hiring international talent, or just want to say hello.
              </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Phone Contact Card - Enhanced */}
              <div 
                className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="0"
              >
                {/* Decorative top bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-blue bg-[length:200%_auto] animate-gradient"></div>
                
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-aurora-blue to-aurora-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">Main Office</p>
                    <a href="tel:+358417567339" className="text-xl font-bold text-aurora-blue hover:text-aurora-purple transition-colors block">
                      +358 41 756 7339
                    </a>
                    <p className="text-sm text-gray-500">Mon-Fri 9:00-17:00</p>
                  </div>
                  </div>
                </div>

              {/* Email Contact Card - Enhanced */}
              <div 
                className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                {/* Decorative top bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-green via-aurora-teal to-aurora-green bg-[length:200%_auto] animate-gradient"></div>
                
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-aurora-green to-aurora-teal rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">General Inquiries</p>
                    <a href="mailto:info@finlern.fi" className="text-xl font-bold text-aurora-green hover:text-aurora-teal transition-colors block">
                      info@finlern.fi
                    </a>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                  </div>
                </div>

              {/* Location Contact Card - Enhanced */}
              <div 
                className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {/* Decorative top bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-purple via-aurora-violet to-aurora-purple bg-[length:200%_auto] animate-gradient"></div>
                
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-aurora-purple to-aurora-violet rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">Häme University of Applied Sciences</p>  
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=H%C3%A4me%20University%20of%20Applied%20Sciences%20Tietotie%201%2037630%20Valkeakoski%20Finland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-aurora-purple hover:text-aurora-blue transition-colors inline-block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-purple/60 rounded-md"
                      aria-label="Open Häme University of Applied Sciences location on Google Maps"
                    >
                    Tietotie 1<br />
                    37630 Valkeakoski, Pirkanmaa, Finland 
                    </a>
                    <p className="text-sm text-gray-500">Open Mon-Fri 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Relocation Services Section */}
            <div className="my-20" data-aos="fade-up" data-aos-duration="800">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-aurora-green/10 text-aurora-green flex items-center gap-2 justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Relocation Services
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Complete Relocation Support</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-aurora-green to-aurora-blue mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  We're more than just a language school. Finlern provides comprehensive relocation services to help international professionals and Finnish employers connect seamlessly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For International Professionals */}
                <div className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-blue bg-[length:200%_auto] animate-gradient"></div>
                  
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-aurora-blue to-aurora-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">For International Professionals</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-green mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Language mastery (Finnish & English)</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-green mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Cultural integration support</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-green mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Workplace culture navigation</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-green mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Professional networking assistance</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-green mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Career development guidance</span>
                      </div>
                    </div>
                    <div className="bg-aurora-blue/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "Complete integration support for building your successful life in Finland"
                      </p>
                    </div>
                  </div>
                </div>

                {/* For Finnish Employers */}
                <div className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-green via-aurora-purple to-aurora-green bg-[length:200%_auto] animate-gradient"></div>
                  
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-aurora-green to-aurora-purple rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">For Finnish Employers</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">International talent acquisition</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Employee language training programs</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Cross-cultural integration workshops</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Relocation support for new hires</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Long-term retention strategies</span>
                      </div>
                    </div>
                    <div className="bg-aurora-purple/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "Bridging the gap between global talent and Finnish opportunities"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Section - Enhanced */}
            <div 
              className="relative rounded-2xl overflow-hidden my-16"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/5 to-aurora-purple/10">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
              
              <div className="relative p-10 md:p-16 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Journey in Finland?</h3>
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      We're excited to help you learn languages, relocate successfully, or find international talent. Whether you need Finnish language courses, English instruction, violin lessons, or comprehensive relocation support, please reach out to us via email.
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-aurora-green to-aurora-blue rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                          target.onerror = null;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section - Enhanced */}
            <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="800">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-8"></div>
              <div className="flex justify-center items-center space-x-6">
                <a 
                  href="https://www.facebook.com/people/Finlern/61578171630486/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/finlernoy?igsh=amdobWp0NTlrYnFu" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/finlern-oy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with modern design */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with aurora effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-aurora-night">
          {/* Aurora-like effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 right-0 h-40 bg-aurora-green/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-aurora-purple/20 blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-block mb-4 bg-white/20 px-4 py-1 rounded-full text-white/90 backdrop-blur-sm">
                  FAQ
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-white/90 leading-relaxed">
                Have questions? Find quick answers to common inquiries about our services.
            </p>
          </div>
          
            <div className="space-y-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">How quickly will I receive a response to my inquiry?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, 
                  we recommend calling our office directly at +358 41 756 7339.
              </p>
            </div>
            
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">What services do you offer?</h3>  
                <p className="text-lg text-white/90 leading-relaxed">
                  We offer a range of services designed to help you succeed in Finland:
                </p>
                <h4 className="text-lg font-bold text-white mb-2 mt-4">Language Services:</h4>
                <ul className="list-disc list-inside text-lg text-white/90 leading-relaxed mt-2 pl-4">
                  <li>Finnish language courses (€99 per 4-week course)</li> 
                  <li>English language courses (private €19-29 per session, group €14-24 per session)</li> 
                </ul>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  You can choose between private 1-on-1 instruction or small group classes (3-6 students) for English courses.
                </p>
                <h4 className="text-lg font-bold text-white mb-2 mt-4">Music Education:</h4>
                <ul className="list-disc list-inside text-lg text-white/90 leading-relaxed mt-2 pl-4">
                  <li>Violin lessons (€35 per session, online, private, available in Finnish, English, Kurdish, and Persian)</li>
                </ul>
                <h4 className="text-lg font-bold text-white mb-2 mt-4">VIP Relocation Services:</h4>
                <ul className="list-disc list-inside text-lg text-white/90 leading-relaxed mt-2 pl-4">
                  <li>Phone Consultation & Support (20 mins)</li>
                  <li>Accommodation & Housing</li>
                  <li>School Enrollment for Children</li>
                  <li>Special Residency Solutions</li>
                  <li>Administrative & Government Affairs</li>
                  <li>Car Purchase & Registration</li>
                  <li>Translation & Interpreter Services</li>
                  <li>Residential & Social Integration Support</li>
                  <li>Airport Transfer & Transportation Services</li>
                </ul>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  We also offer comprehensive package deals: Single Person Package | Family Package.
                </p>
            </div>
            
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">What is the difference between private and group courses?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Private 1-on-1 courses offer personalized instruction tailored exactly to your needs and pace, while our small group courses (3-6 students) provide a collaborative learning environment at a more affordable price (saving €5 per session). Both options deliver high-quality content with expert instruction.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                    Our violin lessons are only available in online, private format. Furthermore, violin lessons are taught in Finnish, English, Kurdish, and Persian.
              </p>
            </div>
            
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Where are your physical locations?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Our central office is at the Häme University of Applied Sciences in Valkeakoski, Finland. Currently, we provide relocation services in the following cities: Helsinki, Espoo, Vantaa, Tampere, Valkeakoski, Hämeenlinna, Forssa, Lahti, Lappeenranta, Riihimäki, and Jyväskylä. 
              </p>
            </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer free consultation before signing up?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Yes! We offer free 20-minute consultations to discuss your learning goals and help you choose the right course. Contact us at info@finlern.fi to schedule your consultation with one of our expert instructors.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Are there any additional benefits with your courses?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Yes! All our language courses include weekly learning support materials, access to our Language Conversation Club events, and working life guidance with our partner companies. These benefits are provided free of charge to all our language students.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">How do your relocation services work?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Our comprehensive VIP relocation services are designed to support individuals and families moving to Finland, as well as Finnish employers hiring international talent. We offer a range of services including:
                </p>
                <ul className="list-disc list-inside text-lg text-white/90 leading-relaxed mt-2 pl-4">
                  <li>Assistance with Accommodation & Housing, School Enrollment for Children, and Special Residency Solutions.</li>
                  <li>Support for Administrative & Government Affairs (e.g., Social Security, Kela, permits, bank accounts, tax cards).</li>
                  <li>Guidance for Car Purchase & Registration, and Translation & Interpreter Services.</li>
                  <li>Comprehensive Residential & Social Integration Support, including access to libraries, cultural spaces, recreational activities, public transport, and shopping guidance.</li>
                  <li>Phone Consultation & Support, and Airport Transfer & Transportation Services.</li>
                </ul>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  We also provide complete integration support for international professionals, covering language mastery, cultural integration, workplace culture navigation, and career development. For Finnish employers, we assist with international talent acquisition, employee language training, cross-cultural integration workshops, and relocation support for new hires. Our services boast a 95% integration success rate and 24/7 support available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 