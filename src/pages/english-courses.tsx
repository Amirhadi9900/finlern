import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout/Layout';

// Global type declaration to make TypeScript happy
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => void | (() => void);
      cleanup: () => void;
    };
  }
}

const EnglishCourses: React.FC = () => {
  // Scroll to upcoming courses section
  const scrollToUpcomingCourses = () => {
    const section = document.getElementById('upcoming-courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeTab, setActiveTab] = useState('cards');

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
        <title>English Courses | Finlern</title>
        <meta name="description" content="Learn English with our specialized courses for Finnish speakers. From business English to casual conversation, we help you communicate with confidence." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aurora-blue to-aurora-green pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-white" data-aos="fade-right" data-aos-duration="800">
              <div className="inline-block mb-3 bg-white/10 px-4 py-1 rounded-full text-sm font-medium">
                English Language Learning
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-sm">
                English Courses for Every Learning Style
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-2xl">
                Choose between personalized 1-on-1 instruction or collaborative small group learning. Our courses are designed to help you thrive in any setting, whether academic, professional, or social, with flexible scheduling and expert instruction.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToUpcomingCourses} className="px-6 py-3 bg-white text-aurora-blue rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 flex items-center">
                  View All Courses
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <a href="mailto:info@finlern.fi" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:col-span-5 hidden md:block" data-aos="fade-left" data-aos-duration="800">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-aurora-blue/30 to-aurora-green/30 rounded-lg backdrop-blur-sm -rotate-3"></div>
                <Image 
                  src="/images/english.png" 
                  alt="English learning environment" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg z-10 relative rotate-3 border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="aurora-wave-bg"></div>
        </div>
      </section>

      {/* Upcoming English Courses Section */}
      <section id="upcoming-courses" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-blue/10 to-aurora-green/10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-purple/10 to-aurora-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 bg-gradient-to-r from-aurora-blue to-aurora-green px-4 py-1 rounded-full text-white text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Available Now
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"
              data-aos="fade-up" 
              data-aos-duration="800" 
            >
              Exclusive 1-on-1 English Courses
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Personalized instruction tailored specifically to your goals, learning style, and pace!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Business English Course */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-green rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-green w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Business • Intermediate</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Business English for Professionals</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Private online lessons focused on business vocabulary, email writing, copywriting, presentations, and job interview skills. Customized for your specific industry and professional needs.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Start anytime • Flexible</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">60 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">1-on-1 online sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€44 per session</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-blue rounded-full mr-2"></span>
                        What's Included
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-blue rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-green rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-purple rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          5 specialized business modules
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Industry-specific vocabulary lists
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 w-full transform hover:scale-[1.02]">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Conversation English Course */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="absolute top-5 right-5 bg-gradient-to-r from-aurora-purple to-aurora-green text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 shadow-lg z-10">
                  Most Popular
                </div>
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Conversation • All Levels</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Casual Conversation Skills</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Master everyday English with personalized 1-on-1 lessons. Focus on practical expressions, slang, idioms, and cultural nuances for social settings. Includes optional Conversation Club events to practice your English in a real-life environment.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Start anytime • Flexible</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">60 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Online + Conversation Club</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€34 per session</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-green rounded-full mr-2"></span>
                        What's Included
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
                          Unlimited conversation topics 
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Practical expression guide
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Real-world practice opportunities
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-green/30 w-full transform hover:scale-[1.02]">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Academic Writing Course */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-purple to-aurora-blue w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Academic • All Levels</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-purple transition-colors duration-300">Academic Writing & Thesis Preparation</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Specialized 1-on-1 guidance for academic essays, research papers, and theses. Learn proper citation, academic vocabulary, and persuasive argumentation with up-to-date materials.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-gray-900 flex items-center">
                      <span className="w-1.5 h-1.5 bg-aurora-purple rounded-full mr-2"></span>
                      Course Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Start anytime • Flexible</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">60 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Research assistance</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€44 per session</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 flex items-center">
                        <span className="w-1.5 h-1.5 bg-aurora-purple rounded-full mr-2"></span>
                        What's Included
                      </h4>
                      <div className="flex">
                        <span className="w-3 h-3 bg-aurora-purple rounded-full"></span>
                        <span className="w-3 h-3 bg-aurora-blue rounded-full -ml-1"></span>
                        <span className="w-3 h-3 bg-aurora-green rounded-full -ml-1"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          APA citation guides
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Academic structure templates
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Field-specific vocabulary assistance
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 w-full transform hover:scale-[1.02]">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                <div className="mr-4 bg-aurora-blue/10 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Personalized Curriculum</p>
                  <p className="text-gray-600">Courses designed for your specific needs</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex items-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className="mr-4 bg-aurora-green/10 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Flexible Schedule</p>
                  <p className="text-gray-600">Set your own pace and timing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group English Courses Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        {/* Background decoration */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-aurora-blue/10 to-aurora-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-aurora-purple/10 to-aurora-blue/10 blur-3xl"></div>
        
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-aurora-blue rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-aurora-green rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-20 right-60 w-72 h-72 bg-aurora-purple rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              className="inline-block mb-2 bg-gradient-to-r from-aurora-green to-aurora-blue px-4 py-1 rounded-full text-white text-sm font-medium shadow-sm"
            >
              Collaborative Learning
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Small Group English Courses
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Don't like learning English alone? Then team up for top-notch, budget-friendly lessons in just 2 hours!
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green mb-2">3-6</div>
              <p className="text-gray-700">Students per group</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-purple mb-2">€10</div>
              <p className="text-gray-700">Save on each session</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-blue mb-2">100%</div>
              <p className="text-gray-700">Same quality content</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-10" data-aos="fade-up" data-aos-duration="800">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-aurora-blue to-aurora-green flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Finlern, we understand that some students prefer the dynamics and affordability of group learning. Our small group courses provide the same high-quality content at a more accessible price point, with 3-6 students per group. Each session lasts for 2 hours, giving you ample time to practice and learn.
                </p>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mt-12 border-b border-gray-200">
              <div className="flex flex-wrap -mb-px">
                <button 
                  onClick={() => setActiveTab('cards')}
                  className={`inline-block p-4 rounded-t-lg font-medium transition-colors duration-300 ${
                    activeTab === 'cards' 
                      ? 'text-aurora-blue border-b-2 border-aurora-blue' 
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                  }`} 
                  type="button"
                >
                  Course Cards
                </button>
                <button 
                  onClick={() => setActiveTab('table')}
                  className={`inline-block p-4 rounded-t-lg font-medium transition-colors duration-300 ${
                    activeTab === 'table' 
                      ? 'text-aurora-blue border-b-2 border-aurora-blue' 
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                  }`} 
                  type="button"
                >
                  Comparison Table
                </button>
              </div>
            </div>
            
            {/* Course Cards View */}
            {activeTab === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                {/* Business English Card */}
                <div 
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                >
                  <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-green"></div>
                  <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-aurora-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Business English</h3>
                      <p className="text-gray-600 mb-4 flex-grow">Same professional content, collaborative business simulations and real-world scenarios</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Small group discussions</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Live presentation practice</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Practical resources</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-aurora-blue">€34</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€44</span>  
                        </div>
                        <span className="px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Save €10</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conversation Skills Card */}
                <div 
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-blue"></div>
                  <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl h-full flex flex-col relative">
                    <div className="absolute top-0 right-0 -mt-2 -mr-2">
                      <span className="bg-gradient-to-r from-aurora-green to-aurora-blue text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">Most Popular</span>
                    </div>
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-aurora-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Conversation Skills</h3>
                      <p className="text-gray-600 mb-4 flex-grow">Enhanced practice with multiple conversation partners and authentic discussion topics</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Role-playing scenarios</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Cultural discussions</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Daily-life vocabularies</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-aurora-green">€24</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€34</span>
                        </div>
                        <span className="px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Save €10</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Academic Writing Card */}
                <div 
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <div className="h-2 bg-gradient-to-r from-aurora-purple to-aurora-blue"></div>
                  <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-full bg-aurora-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Academic Writing</h3>
                      <p className="text-gray-600 mb-4 flex-grow">Peer review opportunities, collaborative analysis and structured feedback sessions</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Citation workshops</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Peer review sessions</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Academic vocabulary focus</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-aurora-purple">€34</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€44</span>
                        </div>
                        <span className="px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Save €10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Comparison Table View */}
            {activeTab === 'table' && (
              <div className="mt-12 overflow-x-auto" data-aos="fade-up" data-aos-duration="800">
                <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-4 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Features</th>
                      <th className="py-4 px-6 text-center">
                        <span className="block text-aurora-blue font-bold">Business English</span>
                        <span className="text-sm text-gray-500">€34 per session</span>
                      </th>
                      <th className="py-4 px-6 text-center">
                        <span className="block text-aurora-green font-bold">Conversation Skills</span>
                        <span className="text-sm text-gray-500">€24 per session</span>
                      </th>
                      <th className="py-4 px-6 text-center">
                        <span className="block text-aurora-purple font-bold">Academic Writing</span>
                        <span className="text-sm text-gray-500">€34 per session</span>  
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Group Size</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">3-6 students</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">3-6 students</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">3-6 students</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Session Duration</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">2 hours</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">2 hours</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">2 hours</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Materials Included</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-purple mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Small Group Discussions</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-blue mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">
                        <svg className="w-5 h-5 text-aurora-purple mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Conversation Club Events</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Optional</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Optional</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Optional</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Specific Features</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Presentation Practice</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Role-Playing</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Peer Review</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Savings vs. Private</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center font-medium">€10 per session</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center font-medium">€10 per session</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center font-medium">€10 per session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-green/20 transform hover:scale-105">
                Inquire About Group Courses
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Benefits of Group Learning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div className="w-16 h-16 rounded-full bg-aurora-blue/10 flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">Save money while still receiving professional instruction and quality materials</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="w-16 h-16 rounded-full bg-aurora-green/10 flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Learning</h3>
              <p className="text-gray-600">Practice with peers creates an engaging, supportive community atmosphere</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="w-16 h-16 rounded-full bg-aurora-purple/10 flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Motivation Boost</h3>
              <p className="text-gray-600">Group dynamics help maintain regular practice and accountability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Stunning Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aurora-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-aurora-purple/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-blue to-aurora-green px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Our Teaching Philosophy
              </div>
              <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"
              data-aos="fade-up" 
              data-aos-duration="800"
              > 
                English Learning That Fits Your Life
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Choose between 1-on-1 private instruction or small group classes, each designed with your success in mind. Our methods balance formal academic instruction with casual conversational practice, preparing you for both professional environments and everyday social interactions.
              </p>
            </div>

            {/* Enhanced Success Rate Highlight */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-aurora-blue/5 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurora-green/5 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-aurora-blue to-aurora-green rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-aurora-blue mb-2">92%</div>
                    <p className="text-xl font-semibold text-gray-900 mb-3">Success Rate</p>
                    <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
                      Our students consistently reach their proficiency goals within their planned timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Column */}
              <div className="space-y-8" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-green/10 to-aurora-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Multiple Learning Options</h3>
                      <p className="text-gray-700 leading-relaxed">Choose private 1-on-1 instruction or collaborative small group classes based on your preference.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-blue/10 to-aurora-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Focused Pronunciation Training</h3>
                      <p className="text-gray-700 leading-relaxed">Special attention to sounds and intonation patterns that differ from Finnish.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-purple/10 to-aurora-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Practical Communication</h3>
                      <p className="text-gray-700 leading-relaxed">Emphasis on real-life scenarios and active conversation to build confidence.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-green/10 to-aurora-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Balanced Instruction</h3>
                      <p className="text-gray-700 leading-relaxed">Equal emphasis on formal academic English and casual conversational skills.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-blue/10 to-aurora-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Cultural Nuances</h3>
                      <p className="text-gray-700 leading-relaxed">Understanding the cultural contexts that shape English expressions and idioms.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-purple/10 to-aurora-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Online Convenience + In-Person Practice</h3>
                      <p className="text-gray-700 leading-relaxed">Flexible online learning with optional Conversation Club events for real-world practice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <div className="inline-block">
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-105 group">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Learn More About Our Methods
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Stunning Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aurora-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-aurora-purple/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-blue to-aurora-green px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Success Stories
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"
              data-aos="fade-up" 
              data-aos-duration="800" 
            >
              What Our Students Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple mx-auto rounded-full mb-6"></div>
            <p 
              className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Real stories from students who have improved their English skills with both our private and group courses
            </p>
          </div>
          
          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/20 to-aurora-green/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon with Enhanced Design */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-blue/10 to-aurora-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-aurora-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-aurora-green" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-grow">
                  "The Business English course was exactly what I needed for my career. I chose the 1-on-1 option for maximum focus, and I can now confidently handle international calls and write professional emails. My promotion to team lead wouldn't have been possible without these skills."
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-green rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src="/images/testimonial-1.jpg" 
                      alt="Matti Korhonen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Matti Korhonen</h4>
                    <p className="text-aurora-blue font-medium">IT Project Manager</p>
                    <p className="text-sm text-gray-500">Helsinki</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              {/* Featured Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-aurora-green to-aurora-blue text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  ⭐ Featured Review
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col mt-4">
                {/* Quote Icon with Enhanced Design */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-green/10 to-aurora-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-aurora-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-aurora-green" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-grow">
                  "As a university student on a budget, the small group Conversation Skills course was perfect. The collaborative atmosphere made it easy to practice with peers without feeling embarrassed about mistakes. Now I'm much more comfortable in my exchange studies."
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src="/images/testimonial-2.jpg" 
                      alt="Liisa Virtanen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Liisa Virtanen</h4>
                    <p className="text-aurora-green font-medium">Exchange Student</p>
                    <p className="text-sm text-gray-500">Tampere</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 - Enhanced Design */}
            <div 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple/20 to-aurora-blue/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon with Enhanced Design */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-purple/10 to-aurora-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-aurora-purple" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-aurora-green" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed flex-grow">
                  "I started with the small group Academic Writing course since I was preparing for my thesis. The peer feedback was invaluable, and I later upgraded to private lessons for intensive preparation. The structure made a huge difference in my academic writing abilities."
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src="/images/testimonial-3.jpg" 
                      alt="Juha Mäkinen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Juha Mäkinen</h4>
                    <p className="text-aurora-purple font-medium">Doctoral Student</p>
                    <p className="text-sm text-gray-500">Valkeakoski</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-blue/10 to-aurora-green/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-green/10 to-aurora-blue/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Main CTA Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-blue"></div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="800">
                  <div className="inline-block mb-4 bg-gradient-to-r from-aurora-blue to-aurora-green px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                    Start Your English Journey Today
                  </div>
                  <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"
                  data-aos="fade-up" 
                  data-aos-duration="800"
                  >
                    Ready to Improve Your English?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Choose the learning style that works best for you. Whether you prefer the focused attention of 1-on-1 instruction or the collaborative environment of small group learning, our courses will help you achieve fluency faster.
                  </p>
                </div>

                {/* Learning Options Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="group" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-blue/5 to-aurora-blue/10 rounded-2xl p-6 h-full border border-aurora-blue/10 group-hover:shadow-lg group-hover:shadow-aurora-blue/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Private 1-on-1 Lessons</h3>
                          <p className="text-gray-600">Personalized attention and customized learning pace</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Flexible scheduling
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Customized curriculum
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Maximum attention
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-left" data-aos-delay="300" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl p-6 h-full border border-aurora-green/10 group-hover:shadow-lg group-hover:shadow-aurora-green/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Small Group Classes</h3>
                          <p className="text-gray-600">Collaborative learning environment with peers</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Cost-effective learning
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Social learning dynamics
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Peer interaction practice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">92%</div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-green mb-1">6 Months</div>
                    <p className="text-sm text-gray-600">Average Progress</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-purple mb-1">20+</div>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Us Today
                    </a>
                    <button onClick={scrollToUpcomingCourses} className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-aurora-blue text-aurora-blue rounded-xl font-medium transition-all duration-300 hover:bg-aurora-blue/5 hover:shadow-lg transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      View All Courses
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Free consultation available • No commitment required • Flexible scheduling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnglishCourses; 