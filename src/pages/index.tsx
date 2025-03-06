import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import ClientOnly from '@/components/ClientOnly'

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

  return (
    <Layout>

      {/* Hero Section with Particle Background */}
      <section className="relative min-h-screen flex items-center particle-background aurora-gradient-bg py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-aurora-night opacity-70"></div>
          {/* Enhanced Northern Lights Effect */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-aurora-green/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-1/4 w-1/3 h-1/4 bg-aurora-blue/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-1/4 h-1/5 bg-aurora-violet/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/4 bg-aurora-pink/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ClientOnly fallback={
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 fade-in">
                Master Finnish with <span className="text-aurora-green">Finlern</span>
              </h1>
            }>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 fade-in text-reveal">
                Master Finnish with <span className="text-aurora-green">Finlern</span>
              </h1>
            </ClientOnly>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 fade-in">
              The most effective and engaging way to learn Finnish, designed for everyone from beginners to advanced learners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
              <Link href="/classes" className="btn-primary text-center py-3 px-8 text-lg">
                Explore Our Classes
              </Link>
              <Link href="/contact" className="btn-secondary text-center py-3 px-8 text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating scroll indicator */}
        <ClientOnly>
          <div 
            onClick={handleScrollDown}
            className="absolute bottom-8 w-full flex justify-center items-center fade-in cursor-pointer z-10"
            aria-label="Scroll to stats section"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleScrollDown();
              }
            }}
          >
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </ClientOnly>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 fade-in">
              <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-blue mb-2">500+</h3>}>
                <h3 className="counter text-4xl font-bold text-aurora-blue mb-2" data-target="500">0</h3>
              </ClientOnly>
              <p className="text-gray-700">Students Taught</p>
            </div>
            <div className="p-6 fade-in">
              <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-green mb-2">12+</h3>}>
                <h3 className="counter text-4xl font-bold text-aurora-green mb-2" data-target="12">0</h3>
              </ClientOnly>
              <p className="text-gray-700">Expert Teachers</p>
            </div>
            <div className="p-6 fade-in">
              <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-violet mb-2">24+</h3>}>
                <h3 className="counter text-4xl font-bold text-aurora-violet mb-2" data-target="24">0</h3>
              </ClientOnly>
              <p className="text-gray-700">Courses Offered</p>
            </div>
            <div className="p-6 fade-in">
              <ClientOnly fallback={<h3 className="text-4xl font-bold text-aurora-purple mb-2">98+</h3>}>
                <h3 className="counter text-4xl font-bold text-aurora-purple mb-2" data-target="98">0</h3>
              </ClientOnly>
              <p className="text-gray-700">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue fade-in">Why Choose Finlern?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto fade-in">
              We combine innovative teaching methods with Finnish culture immersion to make your language learning journey effective and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <ClientOnly>
              <div className="aurora-card tilt-effect fade-in">
                <div className="w-16 h-16 bg-aurora-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto float-animation">
                  <svg className="w-8 h-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">Expert Teachers</h3>
                <p className="text-gray-700 text-center">
                  Learn from native Finnish speakers with years of teaching experience and a passion for the language.
                </p>
              </div>
            </ClientOnly>

            {/* Feature 2 */}
            <ClientOnly>
              <div className="aurora-card tilt-effect fade-in">
                <div className="w-16 h-16 bg-aurora-green/10 rounded-full flex items-center justify-center mb-6 mx-auto float-animation">
                  <svg className="w-8 h-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">Small Group Classes</h3>
                <p className="text-gray-700 text-center">
                  Enjoy personalized attention in our small group settings, ensuring you get the support you need.
                </p>
              </div>
            </ClientOnly>

            {/* Feature 3 */}
            <ClientOnly>
              <div className="aurora-card tilt-effect fade-in">
                <div className="w-16 h-16 bg-aurora-violet/10 rounded-full flex items-center justify-center mb-6 mx-auto float-animation">
                  <svg className="w-8 h-8 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">Cultural Immersion</h3>
                <p className="text-gray-700 text-center">
                  Learn not just the language but also Finnish culture, traditions, and everyday life.
                </p>
              </div>
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-amber-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-aurora-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-aurora-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue fade-in">What Our Students Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto fade-in">
              Hear from our students who have successfully improved their Finnish language skills with Finlern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <ClientOnly>
              <div className="aurora-card fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-aurora-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Maria K.</h4>
                    <p className="text-sm text-gray-700">Beginner Course</p>
                  </div>
                </div>
                <p className="text-gray-700 italic border-l-4 border-aurora-blue/30 pl-4 py-2 mb-4">
                  "I had tried learning Finnish on my own for months without much progress. After just 8 weeks with Finlern, I can now have basic conversations and understand simple texts. The teachers are amazing!"
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
            </ClientOnly>

            {/* Testimonial 2 */}
            <ClientOnly>
              <div className="aurora-card fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-aurora-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">John T.</h4>
                    <p className="text-sm text-gray-700">Intermediate Course</p>
                  </div>
                </div>
                <p className="text-gray-700 italic border-l-4 border-aurora-green/30 pl-4 py-2 mb-4">
                  "The cultural aspects integrated into the lessons made learning Finnish so much more interesting. I not only improved my language skills but also gained a deeper understanding of Finland."
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
            </ClientOnly>

            {/* Testimonial 3 */}
            <ClientOnly>
              <div className="aurora-card fade-in">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-aurora-violet rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Sarah L.</h4>
                    <p className="text-sm text-gray-700">Advanced Course</p>
                  </div>
                </div>
                <p className="text-gray-700 italic border-l-4 border-aurora-violet/30 pl-4 py-2 mb-4">
                  "The advanced course helped me refine my Finnish to a professional level. The teachers are incredibly knowledgeable and supportive. I now use Finnish confidently in my work environment."
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
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 aurora-gradient-bg text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ClientOnly>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 fade-in">Ready to Start Your Finnish Journey?</h2>
              <p className="text-xl text-gray-200 mb-10 fade-in">
                Join our community of Finnish language learners and take the first step towards fluency.
              </p>
              <Link href="/classes" className="btn-white text-lg px-10 py-4 fade-in">
                Get Started Today
              </Link>
            </div>
          </ClientOnly>
        </div>
      </section>
    </Layout>
  )
} 