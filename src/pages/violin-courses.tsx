import React, { useEffect } from 'react';
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

const ViolinCourses: React.FC = () => {
  // Scroll to upcoming courses section
  const scrollToUpcomingCourses = () => {
    const section = document.getElementById('upcoming-courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <title>Violin Courses | Finlern</title>
        <meta name="description" content="Learn violin with experienced teachers in Finland. From beginners to advanced players, our violin courses offer personalized instruction in a supportive environment." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aurora-purple to-aurora-blue pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-white" data-aos="fade-right" data-aos-duration="800">
              <div className="inline-block mb-3 bg-white/10 px-4 py-1 rounded-full text-sm font-medium">
                Violin Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-sm">
                Master the Violin with Finlern  
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                From first notes to advanced techniques, our expert instructors provide personalized violin education for students of all ages and skill levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToUpcomingCourses} className="px-6 py-3 bg-white text-aurora-purple rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 flex items-center">
                  View Upcoming Courses
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
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-aurora-purple/30 to-aurora-blue/30 rounded-lg backdrop-blur-sm -rotate-3"></div>
                <Image 
                  src="/images/violin-hero.jpg" 
                  alt="Violin learning environment" 
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

      {/* Upcoming Violin Courses Section */}
      <section id="upcoming-courses" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-purple/10 to-aurora-blue/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-blue/10 to-aurora-purple/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 bg-gradient-to-r from-aurora-purple to-aurora-blue px-4 py-1 rounded-full text-white text-sm font-medium shadow-md transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Available Now
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Upcoming Violin Courses
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Specialized instruction for every skill level, from first-time players to advanced violinists
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-blue mb-2">4+</div>
              <p className="text-gray-700">Years of teaching excellence</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green mb-2">100+</div>
              <p className="text-gray-700">Students taught</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-purple mb-2">90%</div>
              <p className="text-gray-700">Satisfaction rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Beginner Violin Course */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-purple to-aurora-blue w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Beginner • Online</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-purple transition-colors duration-300">Beginner Violin Course</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Start your musical journey with fundamentals of violin playing. Learn proper posture, basic bow techniques, and play simple melodies.
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
                        <span className="text-gray-700 text-sm">Starts: May, 2025</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Sundays, 14:00-14:45</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Online</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€45 • Materials included</span>
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
                          Proper posture and holding
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Basic bow techniques
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-purple mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Simple melodies and notes
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

            {/* Intermediate Violin Course */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="absolute top-5 right-5 bg-gradient-to-r from-aurora-green to-aurora-blue text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 shadow-lg z-10">
                  Most Popular
                </div>
                <div className="h-2 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Intermediate • Online</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Intermediate Violin Course</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Advance your skills with more complex techniques, music theory, and repertoire. Perfect for those with at least one year of experience.
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
                        <span className="text-gray-700 text-sm">Starts: May, 2025</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Tuesdays, 17:00-17:45</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Online</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€55 • Materials included</span>
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
                          Advanced bowing techniques
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Music theory and notation
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Solo and ensemble playing
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 w-full transform hover:scale-[1.02]">
                    Register Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Advanced Violin Workshop */}
            <div 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className="h-2 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <span className="inline-block px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Advanced • Online</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Advanced Violin Workshop</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-5">
                    <p className="text-gray-700">
                      Master advanced techniques, interpretation, and performance skills. For experienced violinists looking to refine their artistry.
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
                        <span className="text-gray-700 text-sm">Starts: May, 2025</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Mondays, 18:00-18:45</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">Online</span>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-aurora-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-700 text-sm">€65 • Materials included</span>
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
                          Professional interpretation
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Advanced repertoire
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-aurora-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Performance masterclass
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
          </div>
          
          <div className="mt-16 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="800">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-blue flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Not Sure Which Course Is Right For You?</h3>
                <p className="text-gray-700 mb-4">We offer free consultation to help you choose the perfect violin course based on your experience level, goals, and schedule.</p>
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 transform hover:scale-[1.02]">
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

      {/* Teaching Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="/images/teaching-approach.jpg" 
                    alt="Our violin teaching approach" 
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <svg className="w-10 h-10 text-aurora-purple mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="ml-3 text-sm text-gray-700">
                      <span className="font-bold block">90% Satisfaction Rate</span>
                      Our students consistently achieve their musical goals and continue their violin education with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="800">
              <div className="inline-block mb-2 bg-aurora-purple/10 px-4 py-1 rounded-full text-aurora-purple text-sm font-medium">
                Our Teaching Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Violin Education for All Skill Levels
              </h2>
              <p className="text-gray-700 mb-6">
                Our approach combines classical training techniques with modern teaching methods, focusing on developing well-rounded musicians through personalized instruction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Proper Technique Foundation</h3>
                    <p className="text-gray-700">Emphasis on correct posture and technique to prevent injuries and ensure long-term progress.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Music Theory Integration</h3>
                    <p className="text-gray-700">Comprehensive understanding of music fundamentals to create more complete musicians.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Performance Opportunities</h3>
                    <p className="text-gray-700">Regular recitals and ensemble experiences to build confidence and performance skills.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <svg className="w-6 h-6 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Personalized Curriculum</h3>
                    <p className="text-gray-700">Customized learning paths that address individual goals, learning styles, and musical interests.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-6 py-3 bg-aurora-purple text-white rounded-lg font-medium transition-all duration-300 hover:bg-aurora-purple-dark">
                  Ask About Our Approach
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
            <div className="inline-block mb-2 bg-aurora-purple/10 px-4 py-1 rounded-full text-aurora-purple text-sm font-medium">
              Success Stories
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              What Our Violin Students Say
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Real stories from our students who have discovered the joy of violin with Finlern
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
                <svg className="w-12 h-12 text-aurora-purple/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I never thought I could learn violin at my age, but the instructors at Finlern made it accessible and enjoyable. After just a few months, I'm already playing simple pieces!"
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-1.jpg" 
                  alt="Matti Virtanen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-purple mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Matti Virtanen</h4>
                  <p className="text-sm text-gray-600">Beginner Student, Tampere</p>
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
                <svg className="w-12 h-12 text-aurora-blue/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The personalized feedback and encouragement from my violin teacher has helped me overcome technical challenges I've struggled with for years. Highly recommended!"
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-2.jpg" 
                  alt="Liisa Korhonen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-blue mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Liisa Korhonen</h4>
                  <p className="text-sm text-gray-600">Intermediate Student, Hämeenlinna</p>
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
                <svg className="w-12 h-12 text-aurora-green/20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H8.81A4 4 0 0 1 14 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3zm8 0h-1.19A4 4 0 0 1 22 8.5a1 1 0 0 0 1-1 1 1 0 0 0-1-1 6 6 0 0 0-6 6v.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3 2.997 2.997 0 0 0-3-3z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The advanced workshops have transformed how I approach musical interpretation. The instructors are not only excellent violinists but also exceptional teachers who can communicate complex concepts clearly."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/images/testimonial-3.jpg" 
                  alt="Juha Nieminen" 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-aurora-green mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Juha Nieminen</h4>
                  <p className="text-sm text-gray-600">Advanced Student, Valkeakoski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-aurora-purple to-aurora-blue text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            Ready to Begin Your Violin Journey?
          </h2>
          <p 
            className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Join our community of musicians and discover the joy of playing the violin. Whether you're a complete beginner or an experienced player, we have the perfect course for you.
          </p>
          <div 
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up" 
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <a href="mailto:info@finlern.fi" className="px-6 py-3 bg-white text-aurora-purple rounded-lg font-medium transition-all duration-300 hover:bg-gray-100">
              Contact Us Today
            </a>
            <button onClick={scrollToUpcomingCourses} className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/10">
              View Courses Again
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViolinCourses; 