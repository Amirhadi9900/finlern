import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import SEO from '@/components/SEO'

/*
 * NOTE FOR OWNER / COUNSEL: Rewritten to match reality — the site sets no
 * analytics/advertising/tracking cookies. Since adding Cloudflare Turnstile,
 * strictly-necessary security cookies may be set by Cloudflare during bot
 * verification (disclosed above); this is why no consent banner is required.
 * Confirm wording before publishing.
 */

declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function Cookies() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanup = window.scrollAnimations?.init();
      return () => {
        if (cleanup && typeof cleanup === 'function') cleanup();
        else if (window.scrollAnimations?.cleanup) window.scrollAnimations.cleanup();
      };
    }
  }, []);

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-8" data-aos="fade-up" data-aos-duration="800">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-700 space-y-3">{children}</div>
    </section>
  );

  return (
    <Layout>
      <SEO
        title="Cookie Policy"
        description="How Finlern uses cookies — this site sets no analytics, advertising, or tracking cookies."
        canonical="https://finlern.vercel.app/cookies"
        noindex
      />

      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6" data-aos="fade-up" data-aos-duration="800">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Last updated: October 5, 2026
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Section title="What this site uses">
              <p>
                Finlern’s website is informational. It does <strong>not</strong> use analytics, advertising, social-media, or
                cross-site tracking cookies, and it has no login area or shopping cart. The only cookies involved are{' '}
                <strong>strictly necessary security cookies</strong> used by our bot-protection provider while you complete the
                enquiry form. Because we set no non-essential cookies, we do not require a cookie-consent banner.
              </p>
            </Section>

            <Section title="Strictly necessary">
              <p>
                No persistent functional cookies are required to browse the site. When you submit the course-enquiry form, our
                bot-protection service (Cloudflare Turnstile) may set a temporary security cookie to verify that the request
                comes from a human and not an automated script. This is strictly necessary for the security of the form and is
                processed on the basis of our legitimate interest in preventing abuse (GDPR Art. 6(1)(f)).
              </p>
            </Section>

            <Section title="Cloudflare Turnstile (security)">
              <p>
                Turnstile runs from <span className="font-medium">challenges.cloudflare.com</span>. While the challenge is shown,
                Cloudflare may set one or more security cookies on that domain and process basic device/browser information to
                assess whether the request is automated. These cookies are used only for bot detection — not for advertising or
                cross-site tracking — and are governed by Cloudflare’s own privacy terms.
              </p>
            </Section>

            <Section title="Server logs (not cookies)">
              <p>
                Our hosting provider (Vercel) may record standard technical request information — such as IP address, browser
                type, and timestamps — in server logs, and applies edge firewall, DDoS mitigation, and rate limiting to secure the
                site. This is not cookie-based tracking.
              </p>
            </Section>

            <Section title="Managing cookies">
              <p>You can configure your browser to block or delete cookies at any time:</p>
              <ul className="list-disc pl-6">
                <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                <li>Firefox: Options → Privacy &amp; Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Cookies and website data</li>
                <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </Section>

            <Section title="Questions">
              <p>
                See our <Link href="/privacy-policy" className="text-aurora-blue hover:text-aurora-purple">Privacy Policy</Link>{' '}
                or contact <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple">info@finlern.fi</a>.
              </p>
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
