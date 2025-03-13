import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AosInitializer() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Detect iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOSSafari = isIOS && isSafari;
    
    let aosInstance = null;
    
    // Dynamically import AOS
    import('aos')
      .then((AOS) => {
        try {
          // Apply iOS-specific settings
          const aosConfig = {
            duration: isIOSSafari ? 600 : 800, // Shorter animations on iOS
            easing: 'ease-out',
            once: true, // Only animate once to avoid Safari issues
            disable: isIOSSafari ? false : 'phone', // Different handling for iOS
            startEvent: 'DOMContentLoaded',
            offset: isIOSSafari ? 80 : 120, // Different trigger point for iOS
            delay: isIOSSafari ? 0 : 0 // No delays on iOS
          };
          
          AOS.default.init(aosConfig);
          aosInstance = AOS.default;
          
          // Force refresh after a slight delay to ensure proper initialization
          setTimeout(() => {
            try {
              if (aosInstance) aosInstance.refresh();
            } catch (err) {
              console.warn("AOS refresh error:", err);
            }
          }, 200);
        } catch (error) {
          console.error('AOS initialization error:', error);
        }
      })
      .catch((error) => {
        console.error('Failed to import AOS:', error);
      });
      
    // Return cleanup function with enhanced error handling
    return () => {
      try {
        if (aosInstance) {
          // Get all elements with AOS attributes before removing them
          const aosElements = document.querySelectorAll('[data-aos]');
          
          // Process each element
          aosElements.forEach(el => {
            try {
              // Store original classes to prevent losing them
              // Using regex to only remove AOS classes
              const originalClasses = el.className.replace(/\baos-.*?\b/g, '').trim();
              
              // Remove all animation classes
              el.className = originalClasses;
              
              // Remove AOS-specific attributes
              el.removeAttribute('data-aos-delay');
              el.removeAttribute('data-aos-duration');
              el.removeAttribute('data-aos-easing');
              el.removeAttribute('data-aos-once');
              el.removeAttribute('data-aos');
              
              // Force any transitions to complete immediately 
              el.style.transition = 'none';
              
              // Force a reflow to apply the style changes
              void el.offsetWidth;
              
              // Restore normal transitions
              el.style.transition = '';
            } catch (elementError) {
              console.warn('Error cleaning up AOS element:', elementError);
            }
          });
          
          // Force refresh AOS to clear any internal state
          try {
            aosInstance.refresh();
          } catch (e) {
            console.warn('Error during AOS refresh:', e);
          }
        }
      } catch (e) {
        console.error('Error during AOS cleanup:', e);
      }
    };
  }, []);
  
  return null;
} 