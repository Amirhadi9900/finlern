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

  return (
    <Layout>
      <Head>
        <title>Our Events | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Join our Finnish language and cultural events to practice your skills and immerse yourself in Finnish culture." />
      </Head>

      {/* Hero Section */}
      <section className="bg-aurora-green py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 bg-white/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-aurora-blue/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Finnish Language Events
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Immerse yourself in Finnish language and culture through our engaging events and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-aurora-grid relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue">Upcoming Events</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us for these exciting opportunities to practice your Finnish and connect with fellow learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue to-aurora-green opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold">15</div>
                    <div className="text-xl">April</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-aurora-night">Finnish Conversation Club</h3>
                <p className="text-gray-700 mb-4">
                  Practice your Finnish in a relaxed environment with native speakers and fellow learners. 
                  This month's theme: Spring traditions in Finland.
                </p>
                <div className="flex items-center text-gray-700 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Finlern Language Center, Helsinki</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-aurora-blue">Free for students</span>
                  <button className="btn-primary hover:scale-105">Register Now</button>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl font-bold">22</div>
                    <div className="text-xl">April</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-aurora-night">Finnish Film Night</h3>
                <p className="text-gray-700 mb-4">
                  Join us for a screening of the award-winning Finnish film "Miekkailija" (The Fencer) 
                  with English subtitles, followed by a discussion in Finnish and English.
                </p>
                <div className="flex items-center text-gray-700 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>7:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Cultural Center, Helsinki</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-aurora-blue">€5 (Students free)</span>
                  <button className="btn-primary hover:scale-105">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Cultural Exchange */}
      <section className="py-16 md:py-24 bg-warm-paper">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/images/cultural-exchange.jpg" 
                    alt="Cultural Exchange Event" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      // Set fallback image if the original image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400?text=Cultural+Exchange+Event";
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-aurora-blue">Monthly Cultural Exchange</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Join our popular monthly cultural exchange events where Finnish locals and language learners
                    come together to share experiences, practice language skills, and build friendships.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Held on the last Thursday of every month</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Rotating venues around Helsinki</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Different themes and activities each month</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free for Finlern students, €5 for others</span>
                    </li>
                  </ul>
                  <button className="btn-primary hover:scale-105">Join Next Exchange</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Immersion Weekends */}
      <section className="py-16 md:py-24 bg-aurora-mesh">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue">Language Immersion Weekends</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take your Finnish to the next level with our intensive weekend retreats. Immerse yourself in the 
              language through workshops, activities, and cultural experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Weekend 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-aurora-green w-full"></div>
              <div className="p-6">
                <h3 className="text-xl text-aurora-blue font-semibold mb-4">Beginner Immersion Weekend</h3>
                <p className="text-gray-700 mb-6">
                  A supportive environment for beginners to dive into Finnish through interactive activities, 
                  simple conversations, and cultural experiences.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 20-21, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Nuuksio Nature Center</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-aurora-blue">€199</span>
                  <button className="btn-primary hover:scale-105">Learn More</button>
                </div>
              </div>
            </div>
            
            {/* Weekend 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-aurora-blue w-full"></div>
              <div className="p-6">
                <h3 className="text-xl text-aurora-blue font-semibold mb-4">Intermediate Immersion Weekend</h3>
                <p className="text-gray-700 mb-6">
                  Deepen your Finnish skills through guided discussions, role-playing scenarios, 
                  and authentic cultural activities with native speakers.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>June 10-11, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hanasaari Cultural Center</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-aurora-blue">€249</span>
                  <button className="btn-primary hover:scale-105">Learn More</button>
                </div>
              </div>
            </div>
            
            {/* Weekend 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-aurora-purple w-full"></div>
              <div className="p-6">
                <h3 className="text-xl text-aurora-blue font-semibold mb-4">Advanced Immersion Weekend</h3>
                <p className="text-gray-700 mb-6">
                  Challenge yourself with complex discussions, debates, and creative projects 
                  conducted entirely in Finnish with minimal English support.
                </p>
                <div className="flex items-center text-gray-700 mb-3">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>July 15-16, 2023</span>
                </div>
                <div className="flex items-center text-gray-700 mb-6">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Villa Kivi, Helsinki</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-aurora-blue">€299</span>
                  <button className="btn-primary hover:scale-105">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-aurora-blue text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Immerse Yourself in Finnish Culture?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Join our events to practice your Finnish language skills in real-world settings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-white py-3 px-8 text-lg">
                View All Events
              </button>
              <button className="btn-white-outline py-3 px-8 text-lg">
                Subscribe to Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 