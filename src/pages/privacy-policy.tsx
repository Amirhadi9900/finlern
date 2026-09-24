import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import SEO from '@/components/SEO'

/*
 * NOTE FOR OWNER / COUNSEL: This policy was rewritten to match what the site
 * ACTUALLY does (a static informational site whose only data collection is the
 * course-enquiry form, which is emailed to info@finlern.fi). It is drafted in
 * plain, accurate language but is NOT legal advice — please have counsel confirm
 * the lawful-basis wording, international-transfer mechanisms, and any retention
 * periods before publishing.
 */

declare global {
  interface Window {
    scrollAnimations?: {
      init: () => (() => void) | void;
      cleanup: () => void;
    };
  }
}

export default function PrivacyPolicy() {
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
    <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
      <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-6 flex items-center">
        <span className="w-1 h-8 bg-gradient-to-b from-aurora-blue to-aurora-purple rounded-full mr-4"></span>
        {title}
      </h2>
      <div className="bg-aurora-snow/50 rounded-lg p-6 border border-aurora-blue/10 text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );

  return (
    <Layout>
      <SEO
        title="Privacy Policy | Finlern"
        description="How Finlern collects, uses, and protects personal information submitted through our course-enquiry form."
        canonical="https://finlern.vercel.app/privacy-policy"
        noindex
      />

      <div className="relative bg-gradient-to-b from-aurora-night to-aurora-purple overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue via-aurora-purple to-blue-600 opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up" data-aos-duration="800">
              Privacy Policy
            </h1>
            <p className="text-lg text-aurora-snow/80" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              Last updated: September 24, 2026
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Section title="Who we are">
              <p>
                Finlern provides Finnish language courses and relocation/integration information. This policy explains how we
                handle personal data when you use our website at <span className="font-medium">finlern.fi</span> /{' '}
                <span className="font-medium">finlern.vercel.app</span>.
              </p>
              <p className="font-medium">Data controller:</p>
              <p>
                Finlern<br />
                Tietotie 1, Häme University of Applied Sciences<br />
                Valkeakoski 37600, Pirkanmaa, Finland<br />
                Email: <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple">info@finlern.fi</a>
              </p>
            </Section>

            <Section title="Information we collect">
              <p>
                The only personal data we actively collect is what you choose to submit through our <strong>course-enquiry
                form</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Current job status</li>
                <li>Desired occupation</li>
                <li>The course you selected</li>
              </ul>
              <p>
                We do <strong>not</strong> require an account, do <strong>not</strong> process payments on this website, and do
                <strong> not</strong> use advertising or analytics trackers. Our hosting provider may record standard technical
                request data (such as IP address and browser information) in server logs for security and operation.
              </p>
            </Section>

            <Section title="How we use your information and our legal basis">
              <p>We use the details you submit only to respond to your enquiry and, if you proceed, to arrange the course or service you asked about.</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Consent (GDPR Art. 6(1)(a))</strong> — you provide your details and tick the consent box to receive a reply.</li>
                <li><strong>Legitimate interests (Art. 6(1)(f))</strong> — replying to enquiries and securing the site.</li>
                <li><strong>Contract (Art. 6(1)(b))</strong> — steps you ask us to take before entering a course agreement.</li>
              </ul>
            </Section>

            <Section title="Who we share it with">
              <p>We do not sell or rent your data. We share it only with the service providers needed to operate, and where legally required:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Vercel</strong> — website hosting.</li>
                <li><strong>Google (Gmail / Google Workspace)</strong> — delivering and storing the enquiry email we send ourselves.</li>
                <li><strong>Authorities</strong> — only when required by law.</li>
              </ul>
            </Section>

            <Section title="Data retention &amp; deletion">
              <p>
                Enquiry details are delivered to our mailbox (<span className="font-medium">info@finlern.fi</span>) and kept
                there only as long as needed to respond to you and to any reasonable follow-up. We do not run a separate
                customer database. When you ask us to delete your data, or when we no longer need it, we delete the relevant
                email(s) and any copies. To request access, correction, or deletion, email{' '}
                <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple">info@finlern.fi</a>.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                Under the GDPR you may request access to, correction of, deletion of, or a copy of your data, restrict or
                object to processing, and withdraw consent at any time. Contact us at the address above; we will respond within
                one month. You may also complain to the Finnish Data Protection Ombudsman (
                <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:text-aurora-purple"> tietosuoja.fi</a>).
              </p>
            </Section>

            <Section title="How we protect your data">
              <p>We use reasonable technical and organisational measures, including:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Encryption in transit (HTTPS/TLS with HSTS).</li>
                <li>Server-side validation and sanitisation of form input, rate limiting, CSRF protection, and a Content-Security-Policy.</li>
                <li>Least-privilege access to the mailbox that receives enquiries.</li>
              </ul>
              <p>No method of transmission or storage is completely secure; we work to protect your data proportionate to the risk.</p>
            </Section>

            <Section title="International transfers">
              <p>
                Our providers (Vercel, Google) may process data outside the EEA. Where this happens we rely on appropriate
                safeguards such as the EU Standard Contractual Clauses. (Counsel to confirm the current transfer mechanisms.)
              </p>
            </Section>

            <Section title="Children">
              <p>
                This website is not directed at children and we do not knowingly collect children’s personal data through it.
                If you believe a child has submitted data to us, contact us and we will delete it.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>We may update this policy to reflect changes in our practices or the law. The “Last updated” date above shows the current version.</p>
            </Section>

            <div className="bg-gradient-to-r from-aurora-blue/10 to-aurora-purple/10 rounded-lg p-8 border border-aurora-blue/20">
              <h2 className="text-2xl md:text-3xl font-bold text-aurora-purple mb-4">Contact</h2>
              <p className="text-gray-700">
                Questions about this policy or your data? Email{' '}
                <a href="mailto:info@finlern.fi" className="text-aurora-blue hover:text-aurora-purple">info@finlern.fi</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
