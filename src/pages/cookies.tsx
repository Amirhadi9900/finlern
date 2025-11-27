import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import SEO from '@/components/SEO'

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
      <SEO
        title="Cookie Policy"
        description="Cookie Policy for Finlern – understand how we use cookies and tracking technologies to deliver secure language learning and relocation services."
        canonical="https://finlern.vercel.app/cookies"
        noindex
      />

      <main className="min-h-screen bg-white">
        {/* Updated header section */}
        <div className="bg-gray-900 relative overflow-hidden">
          {/* Replace SVG pattern with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
              data-aos="fade-up" 
              data-aos-duration="800"
            >
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
               data-aos="fade-up" 
               data-aos-duration="800" 
               data-aos-delay="100"
            >
              Learn about how we use cookies to enhance your Finnish learning experience
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Remembering your preferences</li>
                <li>Understanding how you use our site</li>
                <li>Improving your learning experience</li>
                <li>Keeping you signed in</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Authentication and security</li>
                  <li>Session management</li>
                  <li>Basic website functionality</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Collecting and reporting usage statistics</li>
                  <li>Identifying areas for improvement</li>
                  <li>Measuring the effectiveness of our content</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable enhanced functionality and personalization:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Remembering your language preferences</li>
                  <li>Saving your progress in courses</li>
                  <li>Customizing your learning experience</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to track visitors across websites to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Display relevant advertisements</li>
                  <li>Measure the effectiveness of our marketing</li>
                  <li>Understand user interests and preferences</li>
                </ul>
              </div>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Keep you signed in to your account</li>
                <li>Remember your language preferences</li>
                <li>Track your progress in courses</li>
                <li>Improve our website performance</li>
                <li>Provide personalized learning experiences</li>
                <li>Analyze how our services are used</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Manage Cookies in Your Browser</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                  <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Cookies and website data</li>
                  <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use services from third parties that may also set cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>NextAuth.js for authentication</li>
                <li>Payment processors for secure transactions</li>
                <li>Social media platforms for sharing features</li>
              </ul>
            </section>

            <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <div className="mt-12 text-center" data-aos="fade-up" data-aos-duration="800">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-aurora-blue to-aurora-purple hover:from-aurora-purple hover:to-aurora-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aurora-blue transition-all duration-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
} 