import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AosInitializer() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    let aosInstance = null;
    
    // Dynamically import AOS
    import('aos')
      .then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-out',
          once: true,
          disable: 'phone', // Disable on mobile for better performance
          startEvent: 'DOMContentLoaded' // Initialize AOS on DOMContentLoaded
        });
        aosInstance = AOS.default;
      })
      .catch((error) => {
        console.error('Failed to initialize AOS:', error);
      });
      
    // Return cleanup function
    return () => {
      if (aosInstance) {
        // Remove AOS attributes from elements to prevent animation conflicts on re-mount
        document.querySelectorAll('[data-aos]').forEach(el => {
          // Store original classes to prevent losing them
          const originalClasses = el.className.replace(/\baos-.*?\b/g, '').trim();
          el.className = originalClasses;
          
          // Remove AOS-specific attributes
          el.removeAttribute('data-aos-delay');
          el.removeAttribute('data-aos-duration');
          el.removeAttribute('data-aos-easing');
          el.removeAttribute('data-aos-once');
          el.removeAttribute('data-aos');
        });
        
        // Force refresh AOS to clear any internal state
        try {
          aosInstance.refresh();
        } catch (e) {
          console.warn('Error during AOS cleanup:', e);
        }
      }
    };
  }, []);
  
  return null;
} 