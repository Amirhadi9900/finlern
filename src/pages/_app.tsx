import React, { useEffect } from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
import Script from 'next/script'
import ClientOnly from '@/components/ClientOnly'
import AosInitializer from '@/components/AosInitializer.js'
import 'aos/dist/aos.css' // Import AOS styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Page transition effect - only runs on client
    if (typeof window === 'undefined') return;
    
    // iOS Safari compatibility improvements
    // Set passive event listeners for better scrolling performance
    if (typeof window !== 'undefined') {
      // Add error logging for iOS Safari debugging
      window.onerror = (msg, url, line, col, error) => {
        console.error('Global error:', { msg, url, line, col, error: error?.stack || 'No stack' });
        return false;
      };

      // Fix for Safari scroll performance
      document.addEventListener('touchstart', function() {}, { passive: true });
    }
    
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
      <main className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      
      {/* Client-only components */}
      <ClientOnly>
        <AosInitializer />
        
        {/* iOS Safari compatibility script - must load before animations */}
        <Script 
          id="ios-fixes" 
          strategy="beforeInteractive"
          src="/ios-compatibility.js"
          onError={(e) => {
            console.error('Failed to load iOS compatibility script:', e);
          }}
        />
        
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