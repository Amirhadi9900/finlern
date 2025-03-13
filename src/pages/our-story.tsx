import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Link from 'next/link'

// Add type declaration for window.scrollAnimations
declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function OurStory() {
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
        <title>Our Story | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Learn about Finlern's journey and mission to make learning Finnish accessible, engaging and effective for everyone." />
      </Head>

      {/* Hero Section */}
      <section className="bg-aurora-blue py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-white/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-aurora-green/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-aurora-purple/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Our Story
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              How Finlern was born and our mission to share the beauty of the Finnish language
            </p>
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-16 md:py-24 bg-warm-paper relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-aurora-blue/30 via-aurora-green/30 to-aurora-blue/30"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="section-title mb-6 text-left text-aurora-blue">Our Beginning</h2>
              <p className="text-lg text-gray-700 mb-6">
                Finlern was founded in 2024 by Hamid Reza Ghorbani. Finlern Oy is more than just a language school—it’s a labor of love, built from passion, dedication, and the belief that language can change lives.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey started with a dream: to help people find their place in Finland through the power of language. We poured our hearts into Finlern, crafting it with care, patience, and the deep desire 
                to make learning Finnish not just easier, but truly meaningful. Every lesson, every interaction, and every student’s progress fills us with pride because we know that we are not just teaching words;
                we are opening doors to new opportunities, friendships, and a brighter future.
              </p>
              <p className="text-lg text-gray-700">
              The love we have given to Finlern is the same love that Finlern now gives to every student. We understand the struggles, the small victories, and the joy of finally expressing yourself in a new language.
              That’s why we don’t just teach—we support, encourage, and walk alongside our students in their journey.
              </p>
              <p className="text-lg text-gray-700">
              At Finlern, you’re not just learning Finnish. You’re becoming part of a story—one filled with growth, belonging, and endless possibilities.
              </p>
              <p className="text-lg font-bold text-indigo-900">
              Welcome to Finlern. Welcome to your new beginning!
              </p>
            </div>
            <div className="relative scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/images/our-story-founder.jpg" 
                    alt="Founder of Finlern" 
                    width={600} 
                    height={600} 
                    className="w-full h-auto object-cover rounded-lg"
                    unoptimized
                    onError={(e) => {
                      // Set fallback image if the original image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x600?text=Founder+Image";
                      target.onerror = null; // Prevent infinite loop if fallback also fails
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-6 text-aurora-blue">Our Founder's Vision</h3>
                  <p className="text-gray-700">
                    Hamid's innovative approach to Finnish language education forms the foundation of Finlern's methodology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/finnish-pattern-light.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="section-title mb-6 text-aurora-blue scroll-reveal">Our Mission</h2>
            <p className="text-xl text-gray-700 scroll-reveal" style={{ animationDelay: '0.2s' }}>
              We believe that language learning should be accessible, engaging, and effective for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-warm-paper p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-aurora-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-aurora-blue">Accessible Learning</h3>
              <p className="text-gray-700 text-center">
                We make Finnish language education accessible to everyone, regardless of location or background.
              </p>
            </div>
            
            <div className="bg-warm-paper p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-aurora-green/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-aurora-green">Community-Focused</h3>
              <p className="text-gray-700 text-center">
                We foster a supportive community where learners can practice and grow together.
              </p>
            </div>
            
            <div className="bg-warm-paper p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 scroll-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-aurora-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-aurora-purple">Innovative Methods</h3>
              <p className="text-gray-700 text-center">
                We continuously develop innovative teaching methods that make learning Finnish enjoyable and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/finnish-pattern-light.svg')] opacity-5 rotate-180"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue scroll-reveal">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto scroll-reveal" style={{ animationDelay: '0.2s' }}>
              Our dedicated team of native Finnish teachers combines linguistic expertise with a passion for teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-warm-paper rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-aurora-blue/20 flex items-center justify-center border-4 border-white shadow-md">
                <div className="text-aurora-blue font-bold text-xl">LJ</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sanna Alavillamo</h3>
              <p className="text-aurora-blue font-medium mb-3">Head Teacher</p>
              <p className="text-gray-700">
                With 20+ years of language teaching experience, Sanna's innovative approach to Finnish language education forms the foundation of Finlern's online courses.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center bg-warm-paper rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-aurora-green/20 flex items-center justify-center border-4 border-white shadow-md">
                <div className="text-aurora-green font-bold text-xl">MK</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Amirhadi Borjian</h3>
              <p className="text-aurora-blue font-medium mb-3">ICT</p>
              <p className="text-gray-700">
                Amirhadi is a dedicated ICT specialist with a passion for helping students learn and grow.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center bg-warm-paper rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-aurora-purple/20 flex items-center justify-center border-4 border-white shadow-md">
                <div className="text-aurora-purple font-bold text-xl">SV</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Saghar Kazemi</h3>
              <p className="text-aurora-blue font-medium mb-3">Graphic Designer and Social Media Specialist</p>
              <p className="text-gray-700">
                Saghar is a dedicated graphic designer and social media specialist with a passion for helping students learn and grow.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center bg-warm-paper rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-aurora-teal/20 flex items-center justify-center border-4 border-white shadow-md">
                <div className="text-aurora-teal font-bold text-xl">AM</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sudabeh Sadeghi</h3>
              <p className="text-aurora-blue font-medium mb-3">Event Organizer and Communication Specialist</p>
              <p className="text-gray-700">
                Sudabeh is a dedicated event organizer and communication specialist with a passion for helping students learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-aurora-night text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-aurora-blue/5 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-aurora-green/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-aurora-purple/5 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white scroll-reveal">What Our Students Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-reveal" style={{ animationDelay: '0.2s' }}>
              Discover how Finlern has transformed the Finnish learning journey for our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="italic mb-6">
                "Before Finlern, I tried numerous ways to learn Finnish but always hit a wall. Liisa's teaching approach finally made the language click for me. The cultural immersion and conversation practice have been invaluable."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-aurora-blue/20 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white font-bold">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-gray-300 text-sm">Intermediate Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="italic mb-6">
                "Moving to Finland for work was intimidating, but Finlern's business Finnish course gave me the confidence to communicate professionally. The personalized attention and focus on practical vocabulary have been game-changers."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-aurora-green/20 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white font-bold">TL</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Thomas Lindberg</h4>
                  <p className="text-gray-300 text-sm">Intermediate Finnish Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="italic mb-6">
                "As someone with Finnish heritage, I wanted to connect with my roots through language. Finlern's cultural approach has been perfect - I'm not just learning words, but understanding the Finnish mindset and way of life."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-aurora-purple/20 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Maria Koskinen</h4>
                  <p className="text-gray-300 text-sm">Beginner Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-warm-paper relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-aurora-blue/30 via-aurora-green/30 to-aurora-purple/30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h2 className="section-title mb-6 text-aurora-blue">Start Your Finnish Journey Today</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join our community of Finnish language learners and discover the joy of learning Finnish with Finlern.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/classes" className="btn-primary py-3 px-8 text-lg hover:scale-105 transition-transform duration-300">
                Explore Our Classes
              </Link>
              <Link href="/contact" className="btn-secondary py-3 px-8 text-lg hover:scale-105 transition-transform duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 