import React, { useEffect } from 'react'
import Head from 'next/head'
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

export default function Cookies() {
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
        <title>Cookies Policy | Finlern - Finnish Language Learning</title>
        <meta name="description" content="Cookies Policy for Finlern - Learn about how we use cookies on our Finnish language learning platform." />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-aurora-night text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern-dark.svg')] opacity-20"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Cookies Policy
            </h1>
            <p 
              className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="100"
            >
              Learn about how we use cookies and other tracking technologies on our website.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6 md:p-8 lg:p-10">
              
              <div className="prose prose-lg max-w-none">
                <h2>1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
                
                <h2>2. How We Use Cookies</h2>
                <p>
                  At Finlern, we use cookies for several purposes, including:
                </p>
                <ul>
                  <li>To provide essential website functionality</li>
                  <li>To remember your preferences</li>
                  <li>To analyze how you use our website</li>
                  <li>To personalize your experience</li>
                  <li>To improve our services</li>
                </ul>
                
                <h2>3. Types of Cookies We Use</h2>
                
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, 
                  network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
                </p>
                
                <h3>Performance Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages visitors go to most often. 
                  All information these cookies collect is aggregated and therefore anonymous.
                </p>
                
                <h3>Functionality Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make (such as your preferred language) and provide enhanced, 
                  more personal features.
                </p>
                
                <h3>Targeting Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit 
                  the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.
                </p>
                
                <h2>4. Third-Party Cookies</h2>
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, 
                  deliver advertisements, and so on.
                </p>
                
                <h2>5. Controlling Cookies</h2>
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you 
                  can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some 
                  preferences every time you visit a site and some services and functionalities may not work.
                </p>
                
                <h2>6. More Information</h2>
                <p>
                  If you'd like more information about how we use cookies and how to control them, please contact us at info@finlern.fi.
                </p>
                
                <p className="text-sm text-gray-500 mt-10">
                  Last updated: January 2024
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 