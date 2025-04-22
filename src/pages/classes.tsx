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
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Discover the perfect Finnish language course according to your needs and goals.
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
                <span>View Schedule</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden" ref={courseSectionRef}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/20 opacity-50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-blue/5 to-aurora-purple/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-green/5 to-aurora-blue/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-aurora-blue to-aurora-purple text-white shadow-sm transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
            >
              Language Courses
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Our Finnish Learning Programs
            </h2>
            <div 
              className="w-20 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              We combine structured language learning, cultural immersion, and professional networking to offer a well-rounded educational experience at affordable prices.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
               data-aos="fade-up" 
               data-aos-delay="300">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple mb-2">25+</div>
              <p className="text-gray-700">Years of language teaching</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-green mb-2">20+</div>
              <p className="text-gray-700">Students taught</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-blue mb-2">98%</div>
              <p className="text-gray-700">Satisfaction rate</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Class - Enhanced */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                </div>
                    <span className="inline-block px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Level A1-A2</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Beginner Finnish</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                  Perfect for those with no prior knowledge of Finnish. Learn the basics of pronunciation, 
                  essential vocabulary, and simple conversational phrases.
                </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <span className="w-1.5 h-1.5 bg-aurora-green rounded-full mr-2"></span>
                      Course Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <span className="text-gray-700 text-sm">8-week course</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-700 text-sm">32 hours lessons + 12 hours conversation club</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Small group (max 12)</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-gray-700 text-sm">Hybrid format</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-green rounded-full mr-2"></span>
                        What You'll Learn
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-green rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-blue rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-purple rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Basic vocabulary & phrases
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Pronunciation fundamentals
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Everyday conversations
                  </li>
                </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-blue">€199</span>
                        <span className="text-gray-500 ml-2">/ course</span>
                      </div>
                      <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-green/30 transform hover:scale-[1.02]">
                    Enroll Now
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intermediate Class - Enhanced */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="absolute top-5 right-5 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 shadow-lg z-10">
                  Most Popular
                </div>
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Level B1-B2</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Intermediate Finnish</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                  For learners who can already handle basic conversations. Expand your vocabulary, 
                  improve your grammar, and learn to express more complex ideas.
                </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <span className="w-1.5 h-1.5 bg-aurora-blue rounded-full mr-2"></span>
                      Course Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <span className="text-gray-700 text-sm">8-week course</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-700 text-sm">32 hours lessons + 12 hours conversation club</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Small group (max 12)</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-gray-700 text-sm">Hybrid format</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-blue rounded-full mr-2"></span>
                        What You'll Learn
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-blue rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-purple rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-green rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Complex grammatical structures
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Expanded vocabulary
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Fluent discussions & debates
                  </li>
                </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple">€249</span>
                        <span className="text-gray-500 ml-2">/ course</span>
                      </div>
                      <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-[1.02]">
                    Enroll Now
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Class - Enhanced */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-night rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                </div>
                    <span className="inline-block px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Level C1-C2</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-purple transition-colors duration-300">Advanced Finnish</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                  For proficient Finnish speakers who want to refine their skills. Focus on nuanced expression, 
                  cultural subtleties, and professional language usage.
                </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <span className="w-1.5 h-1.5 bg-aurora-purple rounded-full mr-2"></span>
                      Course Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">8-week course</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-700 text-sm">32 hours lessons + 12 hours conversation club</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Small group (max 12)</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-gray-700 text-sm">Hybrid format</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-purple rounded-full mr-2"></span>
                        What You'll Learn
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-purple rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-night rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-blue rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Professional & academic Finnish
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Cultural nuances & idioms
                  </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Native-like fluency
                  </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-night">€299</span>
                        <span className="text-gray-500 ml-2">/ course</span>
                      </div>
                      <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-aurora-purple to-aurora-night text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 transform hover:scale-[1.02]">
                        Enroll Now
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Learning Support */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Core Program</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Weekly Learning Support</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Receive personalized Finnish learning materials delivered every Monday and Thursday to keep your studies structured and consistent.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-blue rounded-full mr-2"></span>
                        Program Benefits
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-blue rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-purple rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-green rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                          Tailored to your learning level
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Consistent, structured learning path
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Part of monthly subscription
                  </li>
                </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aurora-blue/10 mr-3 flex-shrink-0">
                              <svg className="w-5 h-5 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                </div>
                            <div>
                              <span className="font-medium text-gray-900">Included with All Courses!</span>
              </div>
            </div>
          </div>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finnish Conversation Club */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-purple rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-purple w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
          </div>
                    <span className="inline-block px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Practice Events</span>
        </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Finnish Conversation Club</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Weekly social gatherings in public spaces like cafés and libraries where learners can practice Finnish in real-life settings with native speakers.
              </p>
            </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-green rounded-full mr-2"></span>
                        What to Expect
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-green rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-blue rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-purple rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Relaxed, friendly environment
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Practice with native speakers
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Cultural immersion opportunities
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center mb-3">
                      <span className="w-1.5 h-1.5 bg-aurora-green rounded-full mr-2"></span>
                      Upcoming Events
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-5 h-5 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900 text-sm">Café Lingua Tampere</span>
                            <p className="text-xs text-gray-500">Sat, 17:00 • Moro SkyBar</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-xs font-medium">Every 2 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aurora-violet/10 mr-3 flex-shrink-0">
                              <svg className="w-5 h-5 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Included with All Courses!</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Life Guidance */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-violet to-aurora-green rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-violet to-aurora-green w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-violet/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-violet/10 text-aurora-violet rounded-full text-sm font-medium">Networking</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-violet transition-colors duration-300">Working Life Guidance</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      With the collaboration of partner companies, we provide specialized events for internationals and universities to enhance career opportunities.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-violet rounded-full mr-2"></span>
                        Program Benefits
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-violet rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-blue rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-green rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-violet mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Build professional networks
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-violet mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Connect with local companies
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-violet mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Improve your job prospects
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center mb-3">
                      <span className="w-1.5 h-1.5 bg-aurora-violet rounded-full mr-2"></span>
                      Partner Companies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex items-center">
                        <svg className="w-4 h-4 text-aurora-violet mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        NPE Kulplan Oy
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex items-center">
                        <svg className="w-4 h-4 text-aurora-violet mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Valkeakosken Kaupunki
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex items-center">
                        <svg className="w-4 h-4 text-aurora-violet mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Häme University of Applied Sciences
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aurora-violet/10 mr-3 flex-shrink-0">
                              <svg className="w-5 h-5 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Included with All Courses!</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="800">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Not Sure Which Program Is Right For You?</h3>
                <p className="text-gray-700 mb-4">We offer free consultation to help you choose the perfect Finnish language learning path based on your goals, learning style, and schedule.</p>
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-[1.02]">
                  Get Free Consultation
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Other Courses Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Dynamic background with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/20"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Animated blob decorations */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-aurora-purple/5 rounded-full blur-3xl animate-float-delayed opacity-70"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 mb-3 px-5 py-2 bg-white shadow-md rounded-full text-aurora-blue text-sm font-medium border border-gray-100" 
              data-aos="fade-up"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>More Learning Opportunities</span>
            </div>
            
            <h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Explore Our Other Courses
            </h2>
            
            <div 
              className="w-32 h-1.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-green mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="100"
            ></div>
            
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Beyond Finnish language, we offer other enriching educational experiences to expand your skills and broaden your horizons.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* English Courses - Enhanced */}
              <div 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/60"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-blue bg-[length:200%_auto] animate-gradient"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-aurora-blue/5 rounded-full"></div>
                <div className="absolute -top-16 -left-16 w-40 h-40 bg-aurora-green/5 rounded-full"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-aurora-blue/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                
                <div className="p-8 md:p-10 relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-blue to-aurora-green p-0.5 shadow-lg group-hover:shadow-aurora-blue/30 transition-all duration-500 transform group-hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl bg-white p-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-aurora-blue/20 to-aurora-green/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-aurora-blue text-sm font-medium border border-aurora-blue/10 shadow-sm">
                      For All Levels
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-aurora-blue transition-colors duration-300 relative">
                    English Language Courses
                    <span className="block h-1 w-16 bg-gradient-to-r from-aurora-blue to-aurora-green mt-3 rounded-full transform origin-left group-hover:scale-x-125 transition-transform duration-300"></span>
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Master English with our specialized courses designed for everyone! From business English to everyday conversation, we help you communicate with confidence.
                  </p>
                  
                  <div className="space-y-5 mb-8">
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-blue/20 to-aurora-green/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Business English alongside Presentation Skills</span>
                    </div>
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-blue/20 to-aurora-green/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Conversational Skills alongside Daily-Life Vocabularies</span>
                    </div>
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-blue/20 to-aurora-green/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Formal & Academic English Skills</span>
                    </div>
                  </div>
            
                  <Link 
                    href="/english-courses" 
                    className="group/btn relative inline-flex w-full items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:shadow-aurora-blue/20 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
                    <span className="relative z-10">Explore English Courses</span>
                    <span className="absolute right-4 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/30 group-hover/btn:translate-x-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Violin Courses - Enhanced */}
              <div 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/60"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-aurora-purple via-aurora-night to-aurora-purple bg-[length:200%_auto] animate-gradient"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-aurora-purple/5 rounded-full"></div>
                <div className="absolute -top-16 -left-16 w-40 h-40 bg-aurora-night/5 rounded-full"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-aurora-purple/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                
                <div className="p-8 md:p-10 relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-purple to-aurora-night p-0.5 shadow-lg group-hover:shadow-aurora-purple/30 transition-all duration-500 transform group-hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl bg-white p-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2zM9 10l12-3" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-aurora-purple/20 to-aurora-night/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-aurora-purple text-sm font-medium border border-aurora-purple/10 shadow-sm">
                      All Ages Welcome
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-aurora-purple transition-colors duration-300 relative">
                    Violin Lessons
                    <span className="block h-1 w-16 bg-gradient-to-r from-aurora-purple to-aurora-night mt-3 rounded-full transform origin-left group-hover:scale-x-125 transition-transform duration-300"></span>
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Discover the joy of music with our violin courses for all ages and skill levels. From classical to Finnish folk music, our experienced instructors guide you through every note.
                  </p>
                  
                  <div className="space-y-5 mb-8">
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-purple/20 to-aurora-night/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Beginner to Advanced</span>
                    </div>
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-purple/20 to-aurora-night/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Classical & Folk Techniques</span>
                    </div>
                    <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-aurora-purple/20 to-aurora-night/20 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-3.5 h-3.5 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Performance Opportunities</span>
                    </div>
                  </div>
            
                  <Link 
                    href="/violin-courses" 
                    className="group/btn relative inline-flex w-full items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-purple to-aurora-night text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:shadow-aurora-purple/20 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></span>
                    <span className="relative z-10">Discover Violin Courses</span>
                    <span className="absolute right-4 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/30 group-hover/btn:translate-x-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Coming Soon card - New */}
            <div 
              className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100/60 p-8 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-aurora-blue/30 to-aurora-purple/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-purple">Coming Soon: Art Workshops</h3>
                  <p className="text-gray-700">We're expanding our offerings with creative art workshops. Join our mailing list to be the first to know when these courses launch.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-aurora-blue/20 to-aurora-purple/20 text-aurora-purple rounded-full font-medium transition-all duration-300 hover:from-aurora-blue/30 hover:to-aurora-purple/30"
                  >
                    <span>Stay Updated</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
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
                <p className="text-lg text-gray-700 text-center leading-relaxed">
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
                <p className="text-lg text-gray-700 text-center leading-relaxed">
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
                <p className="text-lg text-gray-700 text-center leading-relaxed">
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
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  Join a community of fellow learners for practice, support, and friendship beyond the classroom.
                </p>
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
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
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
                    <p className="text-base text-gray-500">Software Developer</p>
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
                    <p className="text-base text-gray-500">Architect</p>
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
                    <p className="text-base text-gray-500">Medical Researcher</p>
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
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
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