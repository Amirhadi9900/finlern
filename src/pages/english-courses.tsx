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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-sm">
                English Courses for Every Learning Style
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
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
                  src="/images/english-course-hero.jpg" 
                  alt="English learning environment" 
                  width={500}
                  height={350}
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
              Personalized instruction tailored specifically to your goals, learning style, and pace
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
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Business English for Professionals</h3>
                  
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
                        <span className="text-gray-700 text-sm">60-75 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">1-on-1 sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€49 per session</span>
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
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Casual Conversation Skills</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Master everyday English with personalized 1-on-1 lessons. Focus on practical expressions, slang, and cultural nuances for social settings. Includes optional Cafe Lingua in-person practice events.
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
                        <span className="text-gray-700 text-sm">60-75 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Online + Cafe Lingua</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€39 per session</span>
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
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-purple transition-colors duration-300">Academic Writing & Thesis Preparation</h3>
                  
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
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Start anytime • Flexible</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">60-75 min sessions</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Research assistance</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€49 per session</span>
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
              Learn with peers at a more affordable price while still receiving quality instruction
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
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  At Finlern, we understand that some students prefer the dynamics and affordability of group learning. Our small group courses provide the same high-quality content at a more accessible price point, with 3-6 students per group.
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
                          <span className="text-2xl font-bold text-aurora-blue">€39</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€49</span>
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
                        <span className="text-sm text-gray-600">Cafe Lingua events included</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-aurora-green">€29</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€39</span>
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
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Citation workshops</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Peer review sessions</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-aurora-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-gray-600">Academic vocabulary focus</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-aurora-purple">€39</span>
                          <span className="text-sm text-gray-500 line-through ml-2">€49</span>
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
                        <span className="text-sm text-gray-500">€39 per session</span>
                      </th>
                      <th className="py-4 px-6 text-center">
                        <span className="block text-aurora-green font-bold">Conversation Skills</span>
                        <span className="text-sm text-gray-500">€29 per session</span>
                      </th>
                      <th className="py-4 px-6 text-center">
                        <span className="block text-aurora-purple font-bold">Academic Writing</span>
                        <span className="text-sm text-gray-500">€39 per session</span>
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
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">60-75 minutes</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">60-75 minutes</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">60-75 minutes</td>
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
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">Cafe Lingua Events</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Optional</td>
                      <td className="py-4 px-6 text-sm text-gray-700 text-center">Included</td>
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="/images/english-teaching-approach.jpg" 
                    alt="Our English teaching approach" 
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <svg className="w-10 h-10 text-aurora-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                    <p className="ml-3 text-sm text-gray-700">
                      <span className="font-bold block">92% Success Rate</span>
                      Our students consistently reach their proficiency goals within their planned timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="800">
              <div className="inline-block mb-2 bg-aurora-blue/10 px-4 py-1 rounded-full text-aurora-blue text-sm font-medium">
                Our Teaching Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                English Learning That Fits Your Life
              </h2>
              <p className="text-gray-700 mb-6">
                Choose between 1-on-1 private instruction or small group classes, each designed with your success in mind. Our methods balance formal academic instruction with casual conversational practice, preparing you for both professional environments and everyday social interactions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Multiple Learning Options</h3>
                    <p className="text-gray-700">Choose private 1-on-1 instruction or collaborative small group classes based on your preference.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Focused Pronunciation Training</h3>
                    <p className="text-gray-700">Special attention to sounds and intonation patterns that differ from Finnish.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Practical Communication</h3>
                    <p className="text-gray-700">Emphasis on real-life scenarios and active conversation to build confidence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Balanced Instruction</h3>
                    <p className="text-gray-700">Equal emphasis on formal academic English and casual conversational skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Cultural Nuances</h3>
                    <p className="text-gray-700">Understanding the cultural contexts that shape English expressions and idioms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Online Convenience + In-Person Practice</h3>
                    <p className="text-gray-700">Flexible online learning with optional Cafe Lingua events for real-world practice.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-6 py-3 bg-aurora-blue text-white rounded-lg font-medium transition-all duration-300 hover:bg-aurora-blue-dark">
                  Learn More About Our Methods
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 bg-aurora-blue/10 px-4 py-1 rounded-full text-aurora-blue text-sm font-medium">
              Success Stories
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              What Our Students Say
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Real stories from students who have improved their English skills with both our private and group courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg p-6 relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-aurora-blue/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Business English course was exactly what I needed for my career. I chose the 1-on-1 option for maximum focus, and I can now confidently handle international calls and write professional emails. My promotion to team lead wouldn't have been possible without these skills."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-1.jpg" 
                  alt="Matti Korhonen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-blue mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Matti Korhonen</h4>
                  <p className="text-sm text-gray-600">IT Project Manager, Helsinki</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg p-6 relative"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-aurora-green/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a university student on a budget, the small group Conversation Skills course was perfect. The collaborative atmosphere made it easy to practice with peers without feeling embarrassed about mistakes. Now I'm much more comfortable in my exchange studies."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-2.jpg" 
                  alt="Liisa Virtanen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-green mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Liisa Virtanen</h4>
                  <p className="text-sm text-gray-600">Exchange Student, Tampere</p>
                </div>

              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg p-6 relative"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-aurora-purple/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I started with the small group Academic Writing course since I was preparing for my thesis. The peer feedback was invaluable, and I later upgraded to private lessons for intensive preparation. The structure made a huge difference in my academic writing abilities."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-3.jpg" 
                  alt="Juha Mäkinen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-purple mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Juha Mäkinen</h4>
                  <p className="text-sm text-gray-600">Doctoral Student, Valkeakoski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-aurora-blue to-aurora-green text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            Ready to Improve Your English?
          </h2>
          <p 
            className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Choose the learning style that works best for you. Whether you prefer the focused attention of 1-on-1 instruction or the collaborative environment of small group learning, our courses will help you achieve fluency faster at a price point that fits your budget.
          </p>
          <div 
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up" 
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <a href="mailto:info@finlern.fi" className="px-6 py-3 bg-white text-aurora-blue rounded-lg font-medium transition-all duration-300 hover:bg-gray-100">
              Contact Us Today
            </a>
            <Link href="#upcoming-courses" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/10">
              View Courses Again
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnglishCourses; 