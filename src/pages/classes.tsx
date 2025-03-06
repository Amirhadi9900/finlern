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

export default function Classes() {
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
        <title>Our Classes | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Explore our Finnish language classes for all levels - from beginners to advanced learners." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Finnish Language Classes
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the perfect Finnish language course for your level and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-white py-3 px-8 text-lg">
                View Schedule
              </button>
              <button className="btn-white-outline py-3 px-8 text-lg">
                Free Trial Lesson
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-16 md:py-24 bg-warm-paper relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-aurora-blue/30 via-aurora-green/30 to-aurora-blue/30"></div>
        <div className="absolute top-4 right-0 w-24 h-24 bg-aurora-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-aurora-green/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue scroll-reveal">Find Your Perfect Course</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto scroll-reveal" style={{ animationDelay: '0.2s' }}>
              We offer comprehensive Finnish language courses for all levels, taught by native speakers in a supportive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Class */}
            <div className="aurora-card group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="h-3 bg-aurora-green mb-5"></div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-aurora-blue">Beginner Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-green/10 text-aurora-green rounded-full text-sm font-medium">Level A1-A2</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Perfect for those with no prior knowledge of Finnish. Learn the basics of pronunciation, 
                  essential vocabulary, and simple conversational phrases.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">8-week course</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">2 hours per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Small group size (max 10)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Online or in-person</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-aurora-blue">€280</span>
                  <button className="btn-primary hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Intermediate Class */}
            <div className="aurora-card group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="h-3 bg-aurora-blue mb-5"></div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-aurora-blue">Intermediate Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-blue/10 text-aurora-blue rounded-full text-sm font-medium">Level B1-B2</span>
                </div>
                <p className="text-gray-700 mb-6">
                  For learners who can already handle basic conversations. Expand your vocabulary, 
                  improve your grammar, and learn to express more complex ideas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">10-week course</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">2 hours per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Small group size (max 8)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Online or in-person</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-aurora-blue">€350</span>
                  <button className="btn-primary hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Class */}
            <div className="aurora-card group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="h-3 bg-aurora-purple mb-5"></div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-aurora-blue">Advanced Finnish</h3>
                  <span className="px-3 py-1 bg-aurora-purple/10 text-aurora-purple rounded-full text-sm font-medium">Level C1-C2</span>
                </div>
                <p className="text-gray-700 mb-6">
                  For proficient Finnish speakers who want to refine their skills. Focus on nuanced expression, 
                  cultural subtleties, and professional language usage.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">12-week course</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">2 hours per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Small group size (max 6)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Online or in-person</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-aurora-blue">€450</span>
                  <button className="btn-primary hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Course Banner */}
      <section className="py-10 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-white blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Intensive Summer Course</h3>
              <p className="text-white">
                4-week accelerated learning for all levels. Limited spots available!
              </p>
            </div>
            <button className="btn-white py-3 px-8 whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Classes */}
      <section className="py-16 md:py-24 bg-aurora-mesh relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue">Why Choose Our Finnish Classes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We combine proven teaching methods with engaging content and a supportive environment to make learning Finnish effective and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-aurora-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aurora-blue/10 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-aurora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl text-aurora-blue font-semibold mb-2">Native Finnish Teachers</h3>
                <p className="text-gray-700">
                  Learn from experienced native Finnish speakers who understand the challenges faced by learners.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-aurora-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aurora-green/10 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-aurora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl text-aurora-blue font-semibold mb-2">Practical & Relevant</h3>
                <p className="text-gray-700">
                  Our curriculum focuses on practical language skills you can use in everyday situations.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-aurora-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aurora-purple/10 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-aurora-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl text-aurora-blue font-semibold mb-2">Cultural Immersion</h3>
                <p className="text-gray-700">
                  Learn not just the language but also the cultural context that gives Finnish its unique flavor.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="rounded-lg p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-aurora-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-aurora-teal/10 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-aurora-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-aurora-blue font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-700">
                  Join a community of fellow learners for practice, support, and friendship beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teaching Approach */}
      <section className="py-16 md:py-24 bg-aurora-grid relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/teaching-approach.jpg" 
                  alt="Our Teaching Approach" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Set fallback image if the original image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400?text=Teaching+Approach";
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-aurora-blue">Our Teaching Approach</h3>
                <p className="text-lg text-gray-700 mb-6">
                  At Finlern, we believe in a communicative approach to language learning. Our classes are designed 
                  to get you speaking Finnish from day one in practical, real-world contexts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aurora-blue/10 flex items-center justify-center mr-4">
                      <span className="text-aurora-blue font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Immersive Learning</h3>
                      <p className="text-gray-700">Finnish is spoken as much as possible during classes to develop your ear for the language.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aurora-green/10 flex items-center justify-center mr-4">
                      <span className="text-aurora-green font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Practical Focus</h3>
                      <p className="text-gray-700">We emphasize vocabulary and phrases you'll actually use in everyday situations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aurora-purple/10 flex items-center justify-center mr-4">
                      <span className="text-aurora-purple font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Interactive Sessions</h3>
                      <p className="text-gray-700">Classes involve role-playing, games, and conversation practice to make learning engaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-aurora-wave relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-aurora-blue">What Our Students Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it—hear what our students have to say about their experience learning Finnish with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute -top-5 left-6 w-10 h-10 bg-aurora-blue text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-4 italic">
                  "I tried learning Finnish with various apps before, but nothing worked until I joined Finlern's classes. 
                  The structured approach and supportive teachers made all the difference. After just three months, I was
                  able to have basic conversations with my Finnish colleagues!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <div className="w-full h-full bg-aurora-blue/20 flex items-center justify-center text-aurora-blue font-bold">
                      JM
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">John Miller</p>
                    <p className="text-sm text-gray-700">Software Developer, United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute -top-5 left-6 w-10 h-10 bg-aurora-green text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-4 italic">
                  "The way Finlern incorporates Finnish culture into language learning is brilliant. 
                  I not only learned the language but also gained insights into Finnish lifestyle and customs, 
                  which made my transition to living in Helsinki so much smoother."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <div className="w-full h-full bg-aurora-green/20 flex items-center justify-center text-aurora-green font-bold">
                      SM
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Sophie Martinez</p>
                    <p className="text-sm text-gray-700">Architect, Spain</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute -top-5 left-6 w-10 h-10 bg-aurora-purple text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-4 italic">
                  "As someone who's tried to learn several languages, I can confidently say that Finlern's 
                  approach to teaching Finnish is exceptional. The small class sizes allowed for personalized 
                  attention, and the interactive sessions made learning fun rather than a chore."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <div className="w-full h-full bg-aurora-purple/20 flex items-center justify-center text-aurora-purple font-bold">
                      AK
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Aisha Khan</p>
                    <p className="text-sm text-gray-700">Medical Researcher, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 