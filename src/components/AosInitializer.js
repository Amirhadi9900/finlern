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
    
    // Detect device performance capabilities
    const isLowEndDevice = 
      (typeof navigator.deviceMemory !== 'undefined' && navigator.deviceMemory < 4) || 
      (typeof navigator.hardwareConcurrency !== 'undefined' && navigator.hardwareConcurrency < 4);
    
    let aosInstance = null;
    
    // Dynamically import AOS
    import('aos')
      .then((AOS) => {
        try {
          // Check if we're on a content-heavy page
          const currentPath = window.location.pathname;
          const isContentHeavyPage = /\/(terms|cookies|privacy|our-story|contact|events|classes)/.test(currentPath);
          
          // Apply optimized settings for different page types
          const aosConfig = {
            duration: isIOSSafari || isLowEndDevice ? 600 : 800, // Shorter animations on iOS or low-end devices
            easing: isContentHeavyPage ? 'ease' : 'ease-out', // Smoother easing for content pages
            once: isContentHeavyPage || isLowEndDevice ? true : false, // Only animate once on content-heavy or low-end devices
            disable: false, // Don't disable on any device
            startEvent: 'DOMContentLoaded',
            offset: isIOSSafari ? 80 : 120, // Different trigger point for iOS
            delay: 0, // No delays for consistency
            throttleDelay: isContentHeavyPage || isLowEndDevice ? 99 : 60, // Improved throttle for all pages
            debounceDelay: isContentHeavyPage || isLowEndDevice ? 50 : 30, // Better debouncing for all pages
            anchorPlacement: 'top-bottom', // When element is at top of viewport, bottom of element is animated
          };
          
          // Initialize AOS
          AOS.default.init(aosConfig);
          aosInstance = AOS.default;
          
          // Group animation elements to reduce reflows and improve performance
          const groupAnimationElements = () => {
            try {
              // Get all AOS elements
              const aosElements = document.querySelectorAll('[data-aos]');
              
              // Apply hardware acceleration to all animated elements to improve performance
              aosElements.forEach(el => {
                if (!el.style.willChange) {
                  el.style.willChange = 'transform, opacity';
                }
                
                // Turn off animation for elements far down the page until they're needed
                const rect = el.getBoundingClientRect();
                if (rect.top > window.innerHeight * 2) {
                  el.setAttribute('data-aos-once', 'true');
                }
              });
            } catch (err) {
              console.warn("Error optimizing animation elements:", err);
            }
          };
          
          // Force refresh after a slight delay to ensure proper initialization
          setTimeout(() => {
            try {
              if (aosInstance) {
                aosInstance.refresh();
                groupAnimationElements();
              }
            } catch (err) {
              console.warn("AOS refresh error:", err);
            }
          }, 200);
          
          // Add smart refresh on scroll for all pages
          let scrollTimeout;
          window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
              if (aosInstance) aosInstance.refresh();
            }, isContentHeavyPage ? 200 : 100);
          }, { passive: true });
          
          // Add resize handler to refresh on window resize
          let resizeTimeout;
          window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
              if (aosInstance) {
                aosInstance.refresh();
                groupAnimationElements();
              }
            }, 200);
          }, { passive: true });
          
          // Check and refresh animations periodically during the first few seconds
          // This helps with animations that might have been missed during initial load
          if (!isLowEndDevice) {
            const refreshTimes = [500, 1000, 2000];
            refreshTimes.forEach(time => {
              setTimeout(() => {
                if (aosInstance) aosInstance.refresh();
              }, time);
            });
          }
          
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
              
              // Clean up will-change
              el.style.willChange = '';
              
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