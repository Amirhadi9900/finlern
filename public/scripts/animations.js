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
  // Track if counters have been animated already during this session
  let countersAnimated = false;

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
    
    // Do not reset the countersAnimated flag during cleanup
    // This will make sure the counters keep their values when navigating back
  }

  // Store counter animation state in session storage to persist during navigation
  function setCounterAnimated(value) {
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('countersAnimated', value ? 'true' : 'false');
      }
      countersAnimated = value;
    } catch (e) {
      console.warn('Error accessing sessionStorage:', e);
      countersAnimated = value;
    }
  }

  function getCounterAnimated() {
    try {
      if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem('countersAnimated') === 'true';
      }
      return countersAnimated;
    } catch (e) {
      console.warn('Error accessing sessionStorage:', e);
      return countersAnimated;
    }
  }

  // Scroll event handler - declared at top level for proper cleanup
  let scrollHandler = null;

  function initAnimations() {
    // Clean up any existing observers first
    cleanup();
    
    // Check if counters have been animated in this session
    countersAnimated = getCounterAnimated();
    
    // Set final counter values if already animated
    if (countersAnimated) {
      setFinalCounterValues();
    }
    
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

      // Immediately set final counter values if already animated in this session
      if (countersAnimated) {
        setFinalCounterValues();
        return;
      }

      // Animate counters - simplified for Safari
      const counters = document.querySelectorAll('.counter');
      if (counters.length > 0 && !isIOSSafari) { // Skip animation on iOS Safari, just set values
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              try {
                // Get the target value and handle potential percentage symbol
                const targetText = entry.target.getAttribute('data-target') || '0';
                const hasPercentage = targetText.includes('%');
                const target = parseInt(targetText.replace('%', ''));
                const duration = 2000; // ms
                const step = target / (duration / 32); // Reduced framerate for iOS
                let current = 0;
                
                const updateCounter = () => {
                  current += step;
                  if (current < target) {
                    entry.target.textContent = Math.ceil(current).toString() + (hasPercentage ? '%' : '');
                    safeAnimationFrame(updateCounter);
                  } else {
                    entry.target.textContent = target.toString() + (hasPercentage ? '%' : '');
                    
                    // Mark counters as animated once all have completed
                    const allCountersComplete = Array.from(counters).every(counter => {
                      const targetVal = parseInt((counter.getAttribute('data-target') || '0').replace('%', ''));
                      return parseInt(counter.textContent.replace('%', '')) >= targetVal;
                    });
                    
                    if (allCountersComplete) {
                      setCounterAnimated(true);
                    }
                  }
                };
                
                updateCounter();
                counterObserver.unobserve(entry.target);
              } catch (e) {
                console.warn('Error in counter animation:', e);
                setFinalCounterValues(); // Fallback to showing target values
              }
            }
          });
        }, { threshold: 0.1 });
        
        try {
          counters.forEach(counter => {
            counterObserver.observe(counter);
          });
          observers.push(counterObserver);
        } catch (e) {
          console.warn('Error observing counters:', e);
          setFinalCounterValues(); // Fallback to showing target values
        }
      } else if (counters.length > 0) {
        // For iOS Safari, just set the values without animation
        setFinalCounterValues();
      }

    } catch (e) {
      console.error('Error initializing animations:', e);
    }
  }

  // Helper function to set counters to their final values without animation
  function setFinalCounterValues() {
    try {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const targetText = counter.getAttribute('data-target') || '0';
        const hasPercentage = targetText.includes('%');
        const target = parseInt(targetText.replace('%', ''));
        counter.textContent = target.toString() + (hasPercentage ? '%' : '');
      });
      // Mark as animated
      setCounterAnimated(true);
    } catch (e) {
      console.warn('Error setting final counter values:', e);
    }
  }

  // Expose the init and cleanup functions to the window for external use
  window.scrollAnimations = {
    init: initAnimations,
    cleanup: cleanup
  };
})(); 