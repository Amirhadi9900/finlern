import React, { useEffect } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fraunces } from 'next/font/google'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import Script from 'next/script'
import ClientOnly from '@/components/ClientOnly'
import AosInitializer from '@/components/AosInitializer.js'
import 'aos/dist/aos.css' // Import AOS styles

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const satoshi = localFont({
  src: [
    { path: '../fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Page transition effect - only runs on client
    if (typeof window === 'undefined') return;

    // iOS Safari compatibility improvements
    window.onerror = (msg, url, line, col, error) => {
      console.error('Global error:', { msg, url, line, col, error: error?.stack || 'No stack' });
      return false;
    };

    // Fix for Safari scroll performance
    document.addEventListener('touchstart', function () {}, { passive: true });

    const handleRouteChange = () => {
      // Scroll to top on page change
      window.scrollTo(0, 0);

      // Add animation classes to page elements on navigation
      setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
          el.classList.remove('appear');
          setTimeout(() => {
            el.classList.add('appear');
          }, 100);
        });
      }, 100);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <div className={`${satoshi.variable} ${fraunces.variable} font-sans`}>
        <Component {...pageProps} />
      </div>

      {/* Client-only components */}
      <ClientOnly>
        <AosInitializer />

        {/* Add animation scripts with safeguards for iOS Safari */}
        <Script
          id="animation-script"
          strategy="afterInteractive"
          src="/scripts/animations.js"
          onError={(e) => {
            console.error('Failed to load animation script:', e);
          }}
        />
      </ClientOnly>
    </>
  )
}
