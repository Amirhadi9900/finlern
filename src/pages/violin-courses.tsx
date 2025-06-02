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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-sm">
                Master the Violin with Finlern  
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-2xl">
                From first notes to advanced techniques, our expert instructor provides personalized violin education in Finnish, English, Kurdish, and Persian for students of all ages and skill levels.
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
                  src="/images/violin.png" 
                  alt="Violin learning environment" 
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
              Specialized instruction for every skill level, from first-time players to advanced violinists!
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-blue mb-2">5+</div>
              <p className="text-gray-700">Years of teaching excellence</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green mb-2">100+</div>
              <p className="text-gray-700">Students taught</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aurora-green to-aurora-purple mb-2">94%</div>
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-purple transition-colors duration-300">Beginner Violin Course</h3>
                  
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
                        <span className="text-gray-700 text-sm">Sundays, 17:00-17:45</span>
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
                        <span className="text-gray-700 text-sm">€35 • Materials included</span>
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-blue transition-colors duration-300">Intermediate Violin Course</h3>
                  
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
                        <span className="text-gray-700 text-sm">Mondays, 17:00-17:45</span>
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
                        <span className="text-gray-700 text-sm">€35 • Materials included</span>
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aurora-green transition-colors duration-300">Advanced Violin Workshop</h3>
                  
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
                        <span className="text-gray-700 text-sm">Tuesdays, 17:00-17:45</span>
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
                        <span className="text-gray-700 text-sm">€35 • Materials included</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Not Sure Which Course Is Right For You?</h3>
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
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Stunning Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-aurora-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-aurora-green/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-purple to-aurora-blue px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Teaching Philosophy
              </div>
              <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green"
              data-aos="fade-up" 
              data-aos-duration="800"
              >
                Violin Education for All Skill Levels
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our approach combines classical training techniques with modern teaching methods, focusing on developing well-rounded musicians through personalized instruction.
              </p>
            </div>

            {/* Enhanced Success Rate Highlight */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-aurora-purple/5 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurora-blue/5 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-aurora-purple to-aurora-blue rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-aurora-purple mb-2">94%</div>
                    <p className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Rate</p>
                    <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
                      Our students consistently achieve their musical goals and continue their violin education with us.
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
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-purple/10 to-aurora-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Proper Technique Foundation</h3>
                      <p className="text-gray-700 leading-relaxed">Emphasis on correct posture and technique to prevent injuries and ensure long-term progress.</p>
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
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Music Theory Integration</h3>
                      <p className="text-gray-700 leading-relaxed">Comprehensive understanding of music fundamentals to create more complete musicians.</p>
                    </div>
                  </div>
                </div>
                
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
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Performance Opportunities</h3>
                      <p className="text-gray-700 leading-relaxed">Regular recitals and ensemble experiences to build confidence and performance skills.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-purple/10 to-aurora-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Personalized Curriculum</h3>
                      <p className="text-gray-700 leading-relaxed">Customized learning paths that address individual goals, learning styles, and musical interests.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-blue/10 to-aurora-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Multilingual Instruction</h3>
                      <p className="text-gray-700 leading-relaxed">Our instructor speaks fluent Finnish, English, Kurdish, and Persian, making lessons accessible to students from diverse backgrounds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <div className="inline-block">
                <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-2xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 transform hover:scale-105 group">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Ask About Our Approach
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-aurora-green/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-aurora-purple to-aurora-blue px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Success Stories
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              What Our Violin Students Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
            <p 
              className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Real stories from our students who have discovered the joy of violin with Finlern
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
                  "I never thought I could learn violin at my age, but the instructors at Finlern made it accessible and enjoyable. After just a few months, I'm already playing simple pieces!"
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src="" 
                      alt="Matti Virtanen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Matti Virtanen</h4>
                    <p className="text-aurora-purple font-medium">Beginner Student</p>
                    <p className="text-sm text-gray-500">Tampere</p>
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
                <div className="bg-gradient-to-r from-aurora-blue to-aurora-green text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  ⭐ Featured Review
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue/20 to-aurora-purple/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col mt-4">
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
                  "The personalized feedback and encouragement from my violin teacher has helped me overcome technical challenges I've struggled with for years. Highly recommended!"
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-purple rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src=""  
                      alt="Liisa Korhonen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Liisa Korhonen</h4>
                    <p className="text-aurora-blue font-medium">Intermediate Student</p>
                    <p className="text-sm text-gray-500">Hämeenlinna</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-green/20 to-aurora-blue/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
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
                  "The advanced workshops have transformed how I approach musical interpretation. The instructors are not only excellent violinists but also exceptional teachers who can communicate complex concepts clearly."
                </p>
                
                {/* Author Info with Enhanced Design */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-aurora-green to-aurora-blue rounded-full blur-sm opacity-30"></div>
                    <Image 
                      src=""
                      alt="Juha Nieminen" 
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Juha Nieminen</h4>
                    <p className="text-aurora-green font-medium">Advanced Student</p>
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
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-purple/10 to-aurora-blue/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-aurora-blue/10 to-aurora-green/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Main CTA Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green"></div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="800">
                  <div className="inline-block mb-4 bg-gradient-to-r from-aurora-purple to-aurora-blue px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                    Start Your Musical Journey Today
                  </div>
                  <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green"
                  data-aos="fade-up" 
                  data-aos-duration="800"
                  >
                    Ready to Begin Your Violin Journey?
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-aurora-purple to-aurora-blue mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Join our community of musicians and discover the joy of playing the violin. Whether you're a complete beginner or an experienced player, we have the perfect course for you.
                  </p>
                </div>

                {/* Learning Highlights Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="group" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-purple/5 to-aurora-purple/10 rounded-2xl p-6 h-full border border-aurora-purple/10 group-hover:shadow-lg group-hover:shadow-aurora-purple/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">All Skill Levels</h3>
                          <p className="text-gray-600">From beginner to advanced instruction tailored to your experience</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Beginner-friendly courses
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Intermediate skill building
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Advanced workshops
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-blue/5 to-aurora-blue/10 rounded-2xl p-6 h-full border border-aurora-blue/10 group-hover:shadow-lg group-hover:shadow-aurora-blue/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Flexible Schedule</h3>
                          <p className="text-gray-600">Online classes that fit around your lifestyle and commitments</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Evening time slots
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Online convenience
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          45-minute sessions
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl p-6 h-full border border-aurora-green/10 group-hover:shadow-lg group-hover:shadow-aurora-green/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-13-1V6m0 0V4.5a2 2 0 011-1.732l.5-.289a1 1 0 011 0l.5.289A2 2 0 017 4.5V6m0 0v1.5a2 2 0 001 1.732l.5.289a1 1 0 001 0l.5-.289A2 2 0 0010 7.5V6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Expert Instruction</h3>
                          <p className="text-gray-600">Multilingual instruction with proven teaching methods</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Classical training methods
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Multilingual support
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Personalized feedback
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-blue mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-purple mb-1">94%</div>
                    <p className="text-sm text-gray-600">Satisfaction Rate</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">5+ Years</div>
                    <p className="text-sm text-gray-600">Teaching Excellence</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-green to-aurora-purple mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-green mb-1">100+</div>
                    <p className="text-sm text-gray-600">Students Taught</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:info@finlern.fi" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30 transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Us Today
                    </a>
                    <button onClick={scrollToUpcomingCourses} className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-aurora-purple text-aurora-purple rounded-xl font-medium transition-all duration-300 hover:bg-aurora-purple/5 hover:shadow-lg transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      View Courses Again
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Free consultation available • Multilingual instruction • Flexible scheduling
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

export default ViolinCourses; 