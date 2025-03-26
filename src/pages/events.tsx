import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
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

export default function Events() {
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

  const scrollToUpcomingEvents = () => {
    const upcomingEventsSection = document.getElementById('upcoming-events');
    if (upcomingEventsSection) {
      upcomingEventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Head>
        <title>Our Events | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Join our Finnish language and cultural events to practice your skills and immerse yourself in Finnish culture." />
      </Head>

      {/* Hero Section - Enhanced */}
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
              Finlern Events
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Finnish Language Events
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Immerse yourself in Finnish language and culture through our engaging events and activities.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-wrap justify-center gap-4"
            >
              <button 
                onClick={scrollToUpcomingEvents}
                className="px-8 py-3 bg-white text-aurora-blue rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Enhanced */}
      <section id="upcoming-events" className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue">
                Calendar
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Upcoming Events
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
              Join us for these exciting opportunities to practice your Finnish and connect with fellow learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Event 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-60 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-green opacity-90"></div>
                {/* Optional: Add a background pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 flex items-center justify-center mb-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <div className="text-6xl font-bold leading-none">29</div>
                      </div>
                      <div className="text-2xl uppercase tracking-wider font-medium">March</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Finnish Conversation Club</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Practice your Finnish in a relaxed, charming environment with native speakers and fellow learners. 
                </p>
                <div className="flex items-center text-gray-700 mb-4">
                  <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>4:30 PM - 7:30 PM</span>
                </div>
                <div className="flex items-center text-gray-700 mb-8">
                  <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Espresso House, IdeaPark</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-aurora-blue/10 text-aurora-blue font-bold">
                    Free Entrance!
                  </span>
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center font-medium text-aurora-blue hover:text-aurora-green transition-colors">
                    Register via Email
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Event 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-60 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue opacity-90"></div>
                {/* Optional: Add a background pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 flex items-center justify-center mb-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <div className="text-6xl font-bold leading-none">22</div>
                      </div>
                      <div className="text-2xl uppercase tracking-wider font-medium">April</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Finnish Film Night</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join us for a screening of the award-winning Finnish film "Miekkailija" (The Fencer) 
                  with English subtitles, followed by a discussion in Finnish and English.
                </p>
                <div className="flex items-center text-gray-700 mb-4">
                  <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>7:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700 mb-8">
                  <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Cultural Center, Helsinki</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-aurora-purple/10 text-aurora-purple font-bold">
                    €5 (Students free)
                  </span>
                  <a href="mailto:info@finlern.fi" className="inline-flex items-center font-medium text-aurora-purple hover:text-aurora-blue transition-colors">
                    Register via Email
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>

      {/* Monthly Cultural Exchange - Redesigned */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/5 to-aurora-purple/5">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section header with elegant gradient underline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Monthly Cultural Exchange
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-8" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
              Connect with Finnish culture and language in our vibrant community gatherings
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row">
                {/* Image section with overlay */}
                <div className="w-full lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-aurora-purple to-aurora-blue">
                  <div className="absolute inset-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="p-8 text-white text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold">Cultural Exchange</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content section with elegant styling */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Join Our Community</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Join our popular monthly cultural exchange events where Finnish locals and language learners
                    come together to share experiences, practice language skills, and build lasting friendships.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* Feature 1 */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Monthly Schedule</h4>
                        <p className="text-gray-600">Last Thursday of every month</p>
                      </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Diverse Locations</h4>
                        <p className="text-gray-600">Rotating venues around Helsinki</p>
                      </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Themed Activities</h4>
                        <p className="text-gray-600">New experiences every month</p>
                      </div>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Affordable</h4>
                        <p className="text-gray-600">Free for students, €5 for others</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA section with modern styling */}
                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-aurora-blue/10 to-aurora-purple/10 rounded-xl p-6 mb-8">
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                          <h4 className="text-xl font-bold text-gray-900 mb-1">Next Exchange:</h4>
                          <p className="text-gray-700">Thursday, 30th June - "Finnish Summer Traditions"</p>
                        </div>
                        <a 
                          href="mailto:info@finlern.fi?subject=Cultural Exchange Registration" 
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <span>Register Now</span>
                          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="mt-12 mx-auto max-w-4xl text-center bg-white rounded-xl shadow-lg p-8 relative border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-purple flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <blockquote className="italic text-lg text-gray-700 mb-6">
                "The cultural exchange events have been the highlight of my language learning journey. 
                I've made amazing Finnish friends and my speaking confidence has improved dramatically!"
              </blockquote>
              <div className="font-medium text-gray-900">
                Maria S. — Finlern Student
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Immersion Weekends - Enhanced */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,transparent_10%,#6B8AFD05_45%,#6B8AFD10_55%,transparent_90%)]"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(107,138,253,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(107,138,253,0.1)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-aurora-purple/10 text-aurora-purple">
                Intensive Retreats
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Language Immersion Weekends
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
              Take your Finnish to the next level with our intensive weekend retreats. Immerse yourself in the 
              language through workshops, activities, and cultural experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Weekend 1 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-green to-aurora-blue w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-aurora-green/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-aurora-green/10 text-aurora-green rounded-full">
                    Beginner-Friendly
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner Immersion Weekend</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A supportive environment for beginners to dive into Finnish through interactive activities, 
                  simple conversations, and cultural experiences.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 20-21, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-8">
                  <svg className="h-5 w-5 mr-2 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Nuuksio Nature Center</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-aurora-green">€199</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-aurora-green to-aurora-blue text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Weekend 2 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-blue to-aurora-purple w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-aurora-blue/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-aurora-blue/10 text-aurora-blue rounded-full">
                    Intermediate Level
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intermediate Immersion Weekend</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Deepen your Finnish skills through guided discussions, role-playing scenarios, 
                  and authentic cultural activities with native speakers.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>June 10-11, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-8">
                  <svg className="h-5 w-5 mr-2 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hanasaari Cultural Center</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-aurora-blue">€249</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-aurora-blue to-aurora-purple text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Weekend 3 - Enhanced */}
            <div 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-3 bg-gradient-to-r from-aurora-purple to-aurora-night w-full"></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 bg-aurora-purple/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-aurora-purple/10 text-aurora-purple rounded-full">
                    Advanced Level
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Immersion Weekend</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Challenge yourself with complex discussions, debates, and creative projects 
                  conducted entirely in Finnish with minimal English support.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>July 15-16, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-8">
                  <svg className="h-5 w-5 mr-2 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Villa Kivi, Helsinki</span>
                </div>
                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-aurora-purple">€299</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-aurora-purple to-aurora-night text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
                  Join Our Events
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Ready to Immerse Yourself in Finnish Culture?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join our events to practice your Finnish language skills in real-world settings.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                  <button className="px-8 py-4 bg-white text-aurora-blue rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>View All Events</span>
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span>Subscribe to Events</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 