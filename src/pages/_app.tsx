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

// Define the SessionProvider type
type SessionProviderComponent = React.ComponentType<{
  children: React.ReactNode;
  session: any;
}>;

// We ONLY want to import NextAuth on the client to prevent SSR issues
// We'll wrap this in a component that only renders on the client
function AuthProvider({ children, pageProps }: { children: React.ReactNode; pageProps: any }) {
  const [SessionProvider, setSessionProvider] = React.useState<SessionProviderComponent | null>(null);

  React.useEffect(() => {
    // Only try to load NextAuth on the client side
    try {
      const { SessionProvider: Provider } = require('next-auth/react');
      setSessionProvider(() => Provider);
    } catch (e) {
      console.warn('NextAuth not available:', e);
    }
  }, []);

  // If SessionProvider is not loaded or unavailable, just render children
  if (!SessionProvider) {
    return <>{children}</>;
  }

  // If SessionProvider is available, wrap children with it
  return (
    <SessionProvider session={pageProps.session}>
      {children}
    </SessionProvider>
  );
}

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

  // The main app content
  const AppContent = (
    <main className={`${inter.variable} ${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );

  return (
    <>
      <AuthProvider pageProps={pageProps}>
        {AppContent}
      </AuthProvider>
      
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