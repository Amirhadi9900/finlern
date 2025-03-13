// Animation utilities for FinLern website - Safari Compatible Version

// Only run animations in browser environment
(function() {
  // Check if we're in a browser environment and avoid errors
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Detect iOS Safari for special handling
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOSSafari = isIOS && isSafari;

  // Store all observers for cleanup
  let observers = [];
  // Track all timeouts for proper cleanup
  let timeoutIds = [];
  // Track all animation frames for proper cleanup
  let animationFrameIds = [];

  // Safely schedule timeout with tracking
  function safeTimeout(callback, delay) {
    const id = setTimeout(callback, delay);
    timeoutIds.push(id);
    return id;
  }

  // Safely request animation frame with tracking
  function safeAnimationFrame(callback) {
    const id = requestAnimationFrame(callback);
    animationFrameIds.push(id);
    return id;
  }

  // Wait for document to be fully loaded and ensure DOM is ready
  const initWhenReady = () => {
    // Safeguard for iOS Safari
    try {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
      } else {
        // If DOMContentLoaded already fired, initialize immediately
        initAnimations();
      }
    } catch (err) {
      console.error('Error in animation initialization:', err);
    }
  };

  // Delay initialization slightly to ensure hydration is complete
  safeTimeout(initWhenReady, 100);

  // Complete cleanup function to prevent memory leaks
  function cleanup() {
    // Disconnect all observers
    observers.forEach(observer => {
      if (observer && typeof observer.disconnect === 'function') {
        try {
          observer.disconnect();
        } catch (e) {
          console.warn('Error disconnecting observer:', e);
        }
      }
    });
    observers = [];

    // Clear all timeouts
    timeoutIds.forEach(id => {
      clearTimeout(id);
    });
    timeoutIds = [];

    // Cancel all animation frames
    animationFrameIds.forEach(id => {
      cancelAnimationFrame(id);
    });
    animationFrameIds = [];

    // Remove event listeners we've added
    try {
      document.removeEventListener('scroll', scrollHandler, { passive: true });
    } catch (e) {
      // Ignore errors here
    }
  }

  // Scroll event handler - declared at top level for proper cleanup
  let scrollHandler = null;

  function initAnimations() {
    // Clean up any existing observers first
    cleanup();
    
    // Fade-in elements on scroll
    try {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      // Use safer approach for iOS Safari
      if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              try {
                entry.target.classList.add('appear');
                fadeObserver.unobserve(entry.target);
              } catch (e) {
                console.warn('Error in fade animation:', e);
              }
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        });
        
        fadeElements.forEach(element => {
          try {
            fadeObserver.observe(element);
          } catch (e) {
            console.warn('Error observing fade element:', e);
          }
        });
        observers.push(fadeObserver);
      }

      // Handle scroll-reveal elements
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      
      if (scrollRevealElements.length > 0) {
        const scrollRevealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              try {
                entry.target.classList.add('revealed');
                // Important: Unobserve the element after revealing it to prevent scrolling issues
                scrollRevealObserver.unobserve(entry.target);
              } catch (e) {
                console.warn('Error in scroll reveal:', e);
              }
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });
        
        scrollRevealElements.forEach(element => {
          try {
            // Add initial styles
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Apply delay if specified
            const delay = element.getAttribute('data-delay');
            if (delay) {
              element.style.transitionDelay = delay + 'ms';
            }
            
            // Add the element to the observer
            scrollRevealObserver.observe(element);
          } catch (e) {
            console.warn('Error setting up scroll reveal element:', e);
          }
        });
        observers.push(scrollRevealObserver);
      }
      
      // Add a custom event listener to handle the revealed state
      scrollHandler = () => {
        try {
          document.querySelectorAll('.scroll-reveal.revealed').forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          });
        } catch (e) {
          console.warn('Error in scroll handler:', e);
        }
      };
      document.addEventListener('scroll', scrollHandler, { passive: true });

      // Stagger animations for list items - simplified for Safari
      const animateStaggered = (elements, delay = 100) => {
        elements.forEach((el, index) => {
          try {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            safeTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, index * delay);
          } catch (e) {
            console.warn('Error in staggered animation:', e);
          }
        });
      };

      // Apply staggered animations to list items
      const listSections = document.querySelectorAll('.stagger-list');
      listSections.forEach(section => {
        const listObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              try {
                const items = entry.target.querySelectorAll('li');
                animateStaggered(items);
                listObserver.unobserve(entry.target);
              } catch (e) {
                console.warn('Error in list observer:', e);
              }
            }
          });
        }, { threshold: 0.1 });
        
        try {
          listObserver.observe(section);
          observers.push(listObserver);
        } catch (e) {
          console.warn('Error observing list section:', e);
        }
      });

      // Animate counters - simplified for Safari
      const counters = document.querySelectorAll('.counter');
      if (counters.length > 0 && !isIOSSafari) { // Skip on iOS Safari
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              try {
                const target = parseInt(entry.target.getAttribute('data-target') || '0');
                const duration = 2000; // ms
                const step = target / (duration / 32); // Reduced framerate for iOS
                let current = 0;
                
                const updateCounter = () => {
                  current += step;
                  if (current < target) {
                    entry.target.textContent = Math.ceil(current).toString();
                    safeAnimationFrame(updateCounter);
                  } else {
                    entry.target.textContent = target.toString();
                  }
                };
                
                updateCounter();
                counterObserver.unobserve(entry.target);
              } catch (e) {
                console.warn('Error animating counter:', e);
              }
            }
          });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
          try {
            // For iOS Safari, just set the final value immediately
            if (isIOSSafari) {
              const target = counter.getAttribute('data-target') || '0';
              counter.textContent = target;
            } else {
              counterObserver.observe(counter);
            }
          } catch (e) {
            console.warn('Error setting up counter:', e);
          }
        });
        observers.push(counterObserver);
      } else if (counters.length > 0 && isIOSSafari) {
        // For iOS Safari, just set the values without animation
        counters.forEach(counter => {
          try {
            const target = counter.getAttribute('data-target') || '0';
            counter.textContent = target;
          } catch (e) {
            console.warn('Error setting counter value:', e);
          }
        });
      }

      // Text reveal elements - simplified approach
      const revealElements = document.querySelectorAll('.text-reveal');
      revealElements.forEach(el => {
        try {
          safeTimeout(() => {
            el.style.opacity = '1';
          }, 500);
        } catch (e) {
          console.warn('Error in text reveal:', e);
        }
      });
    } catch (e) {
      console.error('Animation initialization error:', e);
    }

    // Return a cleanup function
    return cleanup;
  }

  // Expose the initialization function to the global scope
  window.scrollAnimations = {
    init: initAnimations,
    cleanup: cleanup
  };
})(); 