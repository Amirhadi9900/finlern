import React, { useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import SEO from '@/components/SEO'

const eventKeywords = [
  'Finnish language events',
  'Finnish cultural integration',
  'Conversation club Finland',
  'Professional networking Finland',
  'Complete integration support',
  'Relocation partner Finland',
  'Language immersion Finland',
]

const eventsSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  name: 'Finlern Language & Integration Events',
  description:
    'Weekly conversation clubs, cultural immersions, and professional networking sessions that help internationals in Finland build fluency and confidence.',
  organizer: {
    '@type': 'Organization',
    name: 'Finlern',
    url: 'https://finlern.vercel.app/',
  },
  location: {
    '@type': 'Place',
    name: 'Finlern Community Venues',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Helsinki',
      addressCountry: 'FI',
    },
  },
  eventSchedule: {
    '@type': 'Schedule',
    repeatFrequency: 'P1W',
    byDay: ['MO', 'TH'],
    startTime: '17:00',
    endTime: '19:00',
    scheduleTimezone: 'Europe/Helsinki',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://finlern.vercel.app/events',
  },
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
      <SEO
        title="Our Events"
        description="Experience Finnish language events, conversation clubs, and cultural immersion meetups hosted by Finlern to speed up your integration journey."
        canonical="https://finlern.vercel.app/events"
        keywords={eventKeywords}
        structuredData={eventsSchema}
      />

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
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
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
                className="px-8 py-3 bg-white text-aurora-blue rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
              >
                <span>Browse Events</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Enhanced */}
      <section id="upcoming-events" className="py-16 md:py-24 relative overflow-hidden">
        {/* Dynamic background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6B8AFD_1px,transparent_1px)] [background-size:20px_20px]"></div>
        {/* Animated aurora blobs */}
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-aurora-blue/10 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-aurora-purple/10 rounded-full blur-3xl animate-float-delayed opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-aurora-blue/10 text-aurora-blue flex items-center gap-2 justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Events
              </span>
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-aurora-blue to-aurora-purple"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Conversation Club Events
            </h2>
            <div 
              className="w-24 h-1.5 bg-gradient-to-r from-aurora-blue to-aurora-purple mx-auto rounded-full mb-6"
              data-aos="fade-up" 
              data-aos-delay="150"
            ></div>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Join our Conversation Club events to practice your Finnish, connect with fellow learners, and meet native speakers in a relaxed environment. Our events are held regularly in Tampere, Valkeakoski, and Lempäälä (IdeaPark).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Event 1 - Enhanced */}
            <div 
              className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Decorative top bar with gradient animation */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-blue bg-[length:200%_auto] animate-gradient"></div>
              
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-aurora-blue to-aurora-green p-8 md:p-10 flex justify-between items-start text-white">
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1 inline-block mb-4 text-sm font-medium">
                      May 2025
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Hiking Event Tampere</h3>
                    <p className="text-white/90 max-w-xs">
                      Practice Finnish conversation with locals and peers while exploring the picturesque and idyllic nature of Tampere.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-lg transition-transform group-hover:scale-110">
                      <div className="text-5xl font-bold leading-none">10</div>
                    </div>
                    <span className="mt-2 text-sm font-medium">Saturday</span>
                  </div>
                </div>
                
                {/* Light pattern overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                    </div>
                    <span>17:00 - 19:00</span>
                </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                    </div>
                    <span>Tredu, Santalahdentie 10, Tampere</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span>Minimum 15 participants are expected!</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
                  <div className="bg-gradient-to-r from-aurora-blue/10 to-aurora-green/10 rounded-full px-6 py-2 text-aurora-blue font-bold">
                    Free Entrance!
                  </div>
                  <Link href="mailto:info@finlern.fi?subject=Hiking Event Tampere Registration" className="inline-flex items-center justify-center bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30">
                    Register Now
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Event 2 - Enhanced */}
            <div 
              className="relative group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Decorative top bar with gradient animation */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-purple bg-[length:200%_auto] animate-gradient"></div>
              
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-aurora-purple to-aurora-blue p-8 md:p-10 flex justify-between items-start text-white">
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1 inline-block mb-4 text-sm font-medium">
                      April 2025
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Cafe Lingua Valkeakoski</h3>
                    <p className="text-white/90 max-w-xs">
                      Informal conversation practice with Finnish students.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl shadow-lg transition-transform group-hover:scale-110">
                      <div className="text-5xl font-bold leading-none">12</div>
                    </div>
                    <span className="mt-2 text-sm font-medium">Saturday</span>
                  </div>
                </div>
                
                {/* Light pattern overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                    </div>
                    <span>16:00 - 18:00</span>
                </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                    </div>
                    <span>HAMK Campus, Valkeakoski</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-5 w-5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span>15-30 participants expected</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
                  <div className="bg-gradient-to-r from-aurora-purple/10 to-aurora-blue/10 rounded-full px-6 py-2 text-aurora-purple font-bold">
                    Free Entrance!
                  </div>
                  <Link href="mailto:info@finlern.fi?subject=Cafe Lingua Valkeakoski Registration" className="inline-flex items-center justify-center bg-gradient-to-r from-aurora-purple to-aurora-blue text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/30">
                    Register Now
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* New - View all events button */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <Link href="mailto:info@finlern.fi?subject=Event Calendar Request" className="inline-flex items-center justify-center group">
              <span className="text-aurora-blue group-hover:text-aurora-purple transition-colors duration-300 font-medium">
                View Full Event Calendar
              </span>
              <span className="ml-2 w-6 h-6 rounded-full bg-aurora-blue/10 flex items-center justify-center group-hover:bg-aurora-purple/10 transition-colors duration-300">
                <svg className="w-4 h-4 text-aurora-blue group-hover:text-aurora-purple transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Professional Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-aurora-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-aurora-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-aurora-purple/5 rounded-full blur-2xl"></div>
            
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Main CTA Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-aurora-blue via-aurora-green to-aurora-purple"></div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
                  <div className="inline-block mb-4 bg-gradient-to-r from-aurora-blue to-aurora-green px-6 py-2 rounded-full text-white text-sm font-medium shadow-lg">
                    Join Our Events Today
                </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-green">Immerse Yourself?</span>
                </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-aurora-blue to-aurora-green mx-auto rounded-full mb-6"></div>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Join our events to practice your Finnish language skills in real-world environments throughout Tampere, Valkeakoski, and Lempäälä regions.
                </p>
                </div>

                {/* Event Types Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="group" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-blue/5 to-aurora-blue/10 rounded-2xl p-6 h-full border border-aurora-blue/10 group-hover:shadow-lg group-hover:shadow-aurora-blue/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-blue/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-blue transition-colors duration-300">Regular Events</h3>
                          <p className="text-gray-600">Weekly conversation clubs and cultural activities</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Conversation practice
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Cultural immersion
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Free participation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-green/5 to-aurora-green/10 rounded-2xl p-6 h-full border border-aurora-green/10 group-hover:shadow-lg group-hover:shadow-aurora-green/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-green/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-green transition-colors duration-300">Multiple Locations</h3>
                          <p className="text-gray-600">Events in Tampere, Valkeakoski, and Lempäälä</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Tampere city center
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          HAMK Campus
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          IdeaPark Lempäälä
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="bg-gradient-to-br from-aurora-purple/5 to-aurora-purple/10 rounded-2xl p-6 h-full border border-aurora-purple/10 group-hover:shadow-lg group-hover:shadow-aurora-purple/20 transition-all duration-300">
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 rounded-xl bg-aurora-purple/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aurora-purple transition-colors duration-300">Community Building</h3>
                          <p className="text-gray-600">Connect with fellow learners and native speakers</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Native speakers
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Fellow learners
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-aurora-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Supportive environment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">2x</div>
                    <p className="text-sm text-gray-600">Monthly Events</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-green to-aurora-blue mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-green mb-1">3</div>
                    <p className="text-sm text-gray-600">Cities</p>
                  </div>
                  
                  <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-green mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-purple mb-1">30+</div>
                    <p className="text-sm text-gray-600">Participants</p>
                  </div>

                  <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-purple mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-aurora-blue mb-1">Free</div>
                    <p className="text-sm text-gray-600">Always Free</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="mailto:info@finlern.fi?subject=Event Calendar Request" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-aurora-blue to-aurora-green text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aurora-blue/30 transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                      View All Events
                    </Link>
                    <Link href="mailto:info@finlern.fi?subject=Event Notifications Subscription" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-aurora-blue text-aurora-blue rounded-xl font-medium transition-all duration-300 hover:bg-aurora-blue/5 hover:shadow-lg transform hover:scale-105 group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                      Subscribe to Events
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Free events • Regular schedule • All levels welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
} 