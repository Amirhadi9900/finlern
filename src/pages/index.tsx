import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import ClientOnly from '@/components/ClientOnly'
import SEO from '@/components/SEO'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Home() {
  // Reference for animated text elements
  const counterRefs = useRef([]);
  // Reference for the stats section
  const statsRef = useRef<HTMLElement>(null);
  
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

  // Handle scroll down click
  const handleScrollDown = () => {
    if (statsRef.current) {
      statsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Schema.org structured data for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Finlern",
    "url": "https://finlern.com",
    "logo": "https://finlern.com/images/finlern.png",
    "description": "Learn Finnish language with Finlern's interactive online courses, designed for all levels from beginner to advanced. Join our community and discover Finland's language and culture.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Helsinki",
      "addressRegion": "Uusimaa",
      "addressCountry": "Finland"
    },
    "sameAs": [
      "https://facebook.com/finlern",
      "https://instagram.com/finlern",
      "https://linkedin.com/company/finlern"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+358-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Finnish"]
    }
  };

  return (
    <Layout>
      <SEO 
        title="Finnish Language Learning Made Easy"
        description="Learn Finnish language with Finlern's interactive online courses, designed for all levels from beginner to advanced. Join our community and discover Finland's language and culture."
        canonical="https://finlern.com"
        ogImage="/images/finlern.png"
        structuredData={homePageSchema}
      />

      {/* Hero Section - Enhanced with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Aurora Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-aurora-night">
          {/* Animated floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-aurora-green/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-aurora-blue/20 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          
          {/* Mesh overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ClientOnly fallback={
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Master Finnish with <span className="text-aurora-green">Finlern</span>
              </h1>
            }>
              <div className="mb-8" data-aos="fade-up" data-aos-duration="800">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                  Master Finnish with <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-aurora-green to-aurora-blue bg-clip-text text-transparent">Finlern</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-aurora-green/30 -z-10 transform -skew-x-6"></span>
                  </span>
                </h1>
              </div>
            </ClientOnly>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              The most effective, accessible, and engaging way to learn Finnish language, culture, and working life.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Link href="/classes" className="relative overflow-hidden group px-8 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-blue to-aurora-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Explore Our Classes</span>
              </Link>
              <Link href="/contact" className="relative overflow-hidden group px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating scroll indicator */}
        <ClientOnly>
          <div 
            onClick={handleScrollDown}
            className="absolute bottom-12 w-full flex justify-center items-center cursor-pointer z-10"
            aria-label="Scroll to stats section"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleScrollDown();
              }
            }}
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="w-10 h-14 border-2 border-white/70 rounded-full flex justify-center items-start p-2 hover:border-white transition-colors duration-300">
              <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </ClientOnly>
      </section>

      {/* Stats Section - Enhanced */}
      <section ref={statsRef} className="py-16 md:py-20 relative overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-30"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {/* Stat 1 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="absolute inset-0 bg-aurora-blue/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-blue mb-2">15+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-blue mb-2" data-target="15">15</h3>
                      <span className="text-2xl font-bold text-aurora-blue">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Students Taught</p>
                </div>
              </div>
              
              {/* Stat 2 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="absolute inset-0 bg-aurora-green/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-green mb-2">2+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-green mb-2" data-target="2">2</h3>
                      <span className="text-2xl font-bold text-aurora-green">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Expert Teachers</p>
                </div>
              </div>
              
              {/* Stat 3 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="absolute inset-0 bg-aurora-violet/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-violet mb-2">5+</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-violet mb-2" data-target="5">5</h3>
                      <span className="text-2xl font-bold text-aurora-violet">+</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Courses Offered</p>
                </div>
              </div>
              
              {/* Stat 4 - Enhanced */}
              <div 
                className="p-6 text-center relative group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="absolute inset-0 bg-aurora-purple/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-purple mb-2">98%</h3>}>
                    <div className="flex justify-center items-baseline">
                      <h3 className="counter text-5xl font-bold text-aurora-purple mb-2" data-target="98">98</h3>
                      <span className="text-2xl font-bold text-aurora-purple">%</span>
                    </div>
                  </ClientOnly>
                  <p className="text-lg text-gray-700 font-medium">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Beginning */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with sophisticated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-70"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up" data-aos-duration="800">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                Our Advantages
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Why Choose Finlern?
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We provide networking opportunities for internationals interested in building connections and expanding their professional and social circles through specialized networking events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-blue/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Expert Teachers</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Learn from native Finnish speakers with years of teaching experience and a passion for the language.
                  </p>
                </div>
              </div>
            </ClientOnly>

            {/* Feature 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-green/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Small Group Classes</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Enjoy personalized attention in our small group settings, ensuring you get the support you need.
                  </p>
                </div>
              </div>
            </ClientOnly>

            {/* Feature 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-violet to-aurora-violet/70 w-full"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-aurora-violet/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cultural Immersion</h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Learn not just the language but also Finnish culture, traditions, and working life.
                  </p>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with sophisticated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white opacity-80"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-aurora-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-aurora-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up" data-aos-duration="800">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                Student Feedback
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              What Our Students Say
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-purple to-aurora-blue mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Hear from our students who have successfully improved their Finnish language skills with Finlern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-blue/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-aurora-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Maria K.</h4>
                      <p className="text-sm text-gray-700">Beginner Course</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-aurora-blue/30 pl-4 py-2 mb-6">
                    &ldquo;I had tried learning Finnish on my own for months without much progress. After just 8 weeks with Finlern, I can now have basic conversations and understand simple texts. The teachers are amazing!&rdquo;
                  </p>
                  
                  <div className="mt-4 flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 2 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-green/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-aurora-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      J
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">John T.</h4>
                      <p className="text-sm text-gray-700">Intermediate Course</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-aurora-green/30 pl-4 py-2 mb-6">
                    &ldquo;The cultural aspects integrated into the lessons made learning Finnish so much more interesting. I not only improved my language skills but also gained a deeper understanding of Finland.&rdquo;
                  </p>
                  
                  <div className="mt-4 flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </ClientOnly>
            
            {/* Testimonial 3 - Enhanced */}
            <ClientOnly>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="h-2 bg-gradient-to-r from-aurora-violet to-aurora-violet/70 w-full"></div>
                <div className="p-8 relative">
                  {/* Quote icon */}
                  <div className="absolute top-2 right-4 text-aurora-violet/10">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-aurora-violet rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      S
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Sarah L.</h4>
                      <p className="text-sm text-gray-700">Advanced Course</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-aurora-violet/30 pl-4 py-2 mb-6">
                    &ldquo;The advanced course helped me refine my Finnish to a professional level. The teachers are incredibly knowledgeable and supportive. I now use Finnish confidently in my work environment.&rdquo;
                  </p>
                  
                  <div className="mt-4 flex text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background with Aurora Effect */}
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-xl border border-white/20" data-aos="fade-up" data-aos-duration="800">
              <div className="text-center">
                <div className="inline-block mb-4 bg-white/20 px-4 py-1 rounded-full text-white/90 backdrop-blur-sm">
                  Start Your Journey
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Ready to Start Your Finnish Journey?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Join our community of Finnish language learners and take the first step towards fluency.
                </p>
                <Link 
                  href="/classes" 
                  className="relative overflow-hidden group px-10 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center inline-flex"
                  data-aos="fade-up" 
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-blue to-aurora-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <span>Get Started Today</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 