import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import SEO from '@/components/SEO'

/*
 * NOTE FOR OWNER / COUNSEL: Rewritten to match reality — this website has no user
 * accounts and does not process payments or sell courses online; the form is an
 * enquiry. Actual course/service agreements and payments are handled separately.
 * Please have counsel review before publishing.
 */

declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Terms() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanup = window.scrollAnimations?.init();
      return () => {
        if (cleanup && typeof cleanup === 'function') cleanup();
        else if (window.scrollAnimations?.cleanup) window.scrollAnimations.cleanup();
      };
    }
  }, []);

  const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
    <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{n}. {title}</h2>
      <div className="text-gray-700 space-y-3">{children}</div>
    </section>
  );

  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Finlern’s informational website and course-enquiry service."
        canonical="https://finlern.vercel.app/terms"
        noindex
      />

      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6" data-aos="fade-up" data-aos-duration="800">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Last updated: September 24, 2026
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Section n="1" title="Acceptance of terms">
              <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
            </Section>

            <Section n="2" title="What this website is">
              <p>
                This site provides information about Finlern’s Finnish-language courses and relocation/integration services and
                lets you submit a course enquiry. Submitting the form is an <strong>enquiry</strong>, not a binding contract.
                Any course or service agreement, its price, and payment are arranged separately with us and documented in their
                own terms — they are <strong>not</strong> concluded or processed on this website.
              </p>
            </Section>

            <Section n="3" title="No user accounts">
              <p>This website does not create user accounts or store a customer database. You browse it anonymously and, if you
              choose, submit the enquiry form.</p>
            </Section>

            <Section n="4" title="Intellectual property">
              <p>
                The text, images, logos, and design on this site are the property of Finlern or its creators and are protected
                by copyright. You may not copy, reproduce, or distribute them without our permission.
              </p>
            </Section>

            <Section n="5" title="Acceptable use">
              <p>You agree not to misuse the site — for example by attempting to disrupt it, gain unauthorised access, submit
              false or malicious information, or use it for unlawful purposes.</p>
            </Section>

            <Section n="6" title="Accuracy and disclaimer">
              <p>We provide the information in good faith but make no warranty that the site is error-free or up to date. Course
              details, availability, and prices shown are indicative and confirmed in your separate agreement with us.</p>
            </Section>

            <Section n="7" title="Limitation of liability">
              <p>To the extent permitted by law, Finlern is not liable for indirect or consequential losses arising from use of
              this website. Nothing here limits liability that cannot lawfully be limited.</p>
            </Section>

            <Section n="8" title="Privacy">
              <p>How we handle personal data is described in our <Link href="/privacy-policy" className="text-aurora-blue hover:text-aurora-purple">Privacy Policy</Link>.</p>
            </Section>

            <Section n="9" title="Governing law and changes">
              <p>These terms are governed by the laws of Finland. We may update them; the “Last updated” date reflects the
              current version.</p>
            </Section>

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
      </div>
    </Layout>
  )
}
