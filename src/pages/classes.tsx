import React, { useEffect, useRef } from 'react'
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

export default function Classes() {
  // Reference for the course section
  const courseSectionRef = useRef<HTMLDivElement>(null);
  
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

  // Handle scroll to course section
  const scrollToCourseSection = () => {
    if (courseSectionRef.current) {
      courseSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>Finnish Classes | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Join our Finnish language classes for all levels, from beginner to advanced. Learn Finnish with native teachers in a supportive environment." />
      </Head>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
            <div className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-white font-medium" data-aos="fade-up" data-aos-duration="800">
              Finlern Finnish Courses
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Our Finnish Language Classes
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Discover the perfect Finnish language course for your level and goals.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-wrap justify-center gap-4"
            >
              <button 
                className="px-8 py-3 bg-white text-aurora-blue rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
                onClick={scrollToCourseSection}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>View Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden" ref={courseSectionRef}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                Language Courses
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Find Your Perfect Course
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              We offer comprehensive Finnish language courses for all levels, taught by native speakers in a supportive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Class - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Beginner Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Level A1-A2</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Perfect for those with no prior knowledge of Finnish. Learn the basics of pronunciation, 
                  essential vocabulary, and simple conversational phrases.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">8-week course</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">4 hours per week</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Small group size (max 10)</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Online or in-person</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-aurora-green">€219</span>
                      <span className="text-gray-500 ml-2">/ course</span>
                    </div>
                    <a href="mailto:info@finlern.fi" className="inline-flex items-center font-medium text-aurora-green hover:text-aurora-blue transition-colors">
                      Enroll Now
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Intermediate Class - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Intermediate Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Level B1-B2</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For learners who can already handle basic conversations. Expand your vocabulary, 
                  improve your grammar, and learn to express more complex ideas.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">8-week course</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">4 hours per week</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Small group size (max 10)</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Online or in-person</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-aurora-blue">€279</span>
                      <span className="text-gray-500 ml-2">/ course</span>
                    </div>
                    <a href="mailto:info@finlern.fi" className="inline-flex items-center font-medium text-aurora-blue hover:text-aurora-purple transition-colors">
                      Enroll Now
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advanced Class - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Advanced Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Level C1-C2</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For proficient Finnish speakers who want to refine their skills. Focus on nuanced expression, 
                  cultural subtleties, and professional language usage.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">8-week course</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">4 hours per week</span>
                  </div>
                  <div className="flex items-center py-2 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Small group size (max 10)</span>
                  </div>
                  <div className="flex items-center py-2">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Online or in-person</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-aurora-purple">€345</span>
                      <span className="text-gray-500 ml-2">/ course</span>
                    </div>
                    <a href="mailto:info@finlern.fi" className="inline-flex items-center font-medium text-aurora-purple hover:text-aurora-night transition-colors">
                      Enroll Now
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Course Banner - Enhanced */}
      <section className="py-12 relative overflow-hidden">
        {/* Background with animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-blue">
          {/* Aurora-like effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-24 bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/10 blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0)_100%)] animate-shimmer"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                  Limited Seats
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Intensive Summer Course</h3>
                <p className="text-white/90 text-lg">
                  4-week accelerated learning for all levels. Limited spots available!
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="px-8 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center">
                  <span>Learn More</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Classes - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                Our Approach
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Why Choose Our Finnish Classes
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              We combine proven teaching methods with engaging content and a supportive environment to make learning Finnish effective and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-blue/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-blue/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Native Finnish Teachers</h3>
                <p className="text-gray-700 text-center">
                  Learn from experienced native Finnish speakers who understand the challenges faced by learners.
                </p>
              </div>
            </div>
            
            {/* Feature 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-green/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-green/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Practical & Relevant</h3>
                <p className="text-gray-700 text-center">
                  Our curriculum focuses on practical language skills you can use in everyday situations.
                </p>
              </div>
            </div>
            
            {/* Feature 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-2 bg-gradient-to-r from-aurora-purple to-aurora-purple/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-purple/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cultural Immersion</h3>
                <p className="text-gray-700 text-center">
                  Learn not just the language but also the cultural context that gives Finnish its unique flavor.
                </p>
              </div>
            </div>
            
            {/* Feature 4 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-2 bg-gradient-to-r from-aurora-teal to-aurora-teal/70 w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-aurora-teal/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Supportive Community</h3>
                <p className="text-gray-700 text-center">
                  Join a community of fellow learners for practice, support, and friendship beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teaching Approach - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white opacity-80"></div>
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl border border-gray-100" data-aos="fade-up">
              <div className="flex flex-col md:flex-row">
                {/* Image section with overlay */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-gradient-to-br from-aurora-blue to-aurora-purple">
                  <div className="absolute inset-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="p-8 text-white text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <h3 className="text-xl font-semibold">Our Approach</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Teaching Approach</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    At Finlern, we believe in a communicative approach to language learning. Our classes are designed 
                    to get you speaking Finnish from day one in practical, real-world contexts.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center text-white shadow-md mr-5">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Immersive Learning</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Finnish is spoken as much as possible during classes to improve your listening skills for the language.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-aurora-green to-aurora-blue flex items-center justify-center text-white shadow-md mr-5">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Practical Focus</h4>
                        <p className="text-gray-700 leading-relaxed">
                          We emphasize vocabulary and phrases you'll actually use in everyday situations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-aurora-purple to-aurora-night flex items-center justify-center text-white shadow-md mr-5">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Interactive Sessions</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Classes involve role-playing, games, and conversation practice to make learning engaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/5 to-aurora-purple/5">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                Student Feedback
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              What Our Students Say
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-purple to-aurora-blue mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Don't just take our word for it—hear what our students have to say about their experience learning Finnish with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
              <div className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-2 right-4 text-aurora-blue/10">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 italic leading-relaxed">
                    "I tried learning Finnish with various apps before, but nothing worked until I joined Finlern's classes. 
                    The structured approach and supportive teachers made all the difference. After just a month, I was
                    able to have basic conversations with my Finnish colleagues!"
                  </p>
                </div>
                
                <div className="flex items-center border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 bg-aurora-blue/10 rounded-full flex items-center justify-center text-aurora-blue font-bold text-xl mr-4">
                    JM
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">John Miller</p>
                    <p className="text-gray-500">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-2 right-4 text-aurora-green/10">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 italic leading-relaxed">
                    "The way Finlern incorporates Finnish culture into language learning is brilliant. 
                    I not only learned the language but also gained insights into Finnish lifestyle and customs, 
                    which made my transition to living in Helsinki so much smoother."
                  </p>
                </div>
                
                <div className="flex items-center border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 bg-aurora-green/10 rounded-full flex items-center justify-center text-aurora-green font-bold text-xl mr-4">
                    SM
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sophie Martinez</p>
                    <p className="text-gray-500">Architect</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
              <div className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-2 right-4 text-aurora-purple/10">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 italic leading-relaxed">
                    "As someone who's tried to learn several languages, I can confidently say that Finlern's 
                    approach to teaching Finnish is exceptional. The small class sizes allowed for personalized 
                    attention, and the interactive sessions made learning fun rather than a chore."
                  </p>
                </div>
                
                <div className="flex items-center border-t border-gray-100 pt-6">
                  <div className="w-14 h-14 bg-aurora-purple/10 rounded-full flex items-center justify-center text-aurora-purple font-bold text-xl mr-4">
                    AK
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Aisha Khan</p>
                    <p className="text-gray-500">Medical Researcher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background with animation */}
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-xl border border-white/20">
              <div className="text-center">
                <div className="inline-block mb-4 bg-white/20 px-4 py-1 rounded-full text-white/90 backdrop-blur-sm">
                  Start Learning Now
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Begin Your Finnish Journey Today
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join our vibrant community of Finnish language learners and take the first step toward fluency.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                  <Link href="/classes" className="px-8 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Explore Our Classes</span>
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 