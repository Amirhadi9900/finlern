// Animation utilities for FinLern website

// Only run animations in browser environment
(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Store all observers for cleanup
  let observers = [];

  // Wait for document to be fully loaded and ensure DOM is ready
  const initWhenReady = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
      // If DOMContentLoaded already fired, initialize immediately
      initAnimations();
    }
  };

  // Delay initialization slightly to ensure hydration is complete
  setTimeout(initWhenReady, 100);

  // Cleanup function to disconnect all observers
  function cleanupObservers() {
    observers.forEach(observer => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    });
    observers = [];
  }

  function initAnimations() {
    // Clean up any existing observers first
    cleanupObservers();
    
    // Fade-in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });
    observers.push(fadeObserver);

    // Handle scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const scrollRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Important: Unobserve the element after revealing it to prevent scrolling issues
          scrollRevealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    scrollRevealElements.forEach(element => {
      // Add initial styles
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Apply delay if specified
      const delay = element.getAttribute('style');
      if (delay && delay.includes('animationDelay')) {
        // Keep the delay attribute
      }
      
      // Add the element to the observer
      scrollRevealObserver.observe(element);
    });
    observers.push(scrollRevealObserver);
    
    // Add a custom event listener to handle the revealed state
    const scrollHandler = () => {
      document.querySelectorAll('.scroll-reveal.revealed').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    };
    document.addEventListener('scroll', scrollHandler, { passive: true });

    // Stagger animations for list items
    const animateStaggered = (elements, delay = 100) => {
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * delay);
      });
    };

    // Apply staggered animations to list items
    const listSections = document.querySelectorAll('.stagger-list');
    listSections.forEach(section => {
      const listObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('li');
            animateStaggered(items);
            listObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      listObserver.observe(section);
      observers.push(listObserver);
    });

    // Parallax effect for hero sections
    const parallaxElements = document.querySelectorAll('.parallax');
    let parallaxScrollHandler = null;
    
    if (parallaxElements.length > 0) {
      parallaxScrollHandler = () => {
        const yOffset = window.pageYOffset;
        parallaxElements.forEach(element => {
          const speed = element.dataset.speed || 0.5;
          element.style.transform = `translateY(${yOffset * speed}px)`;
        });
      };
      
      window.addEventListener('scroll', parallaxScrollHandler, { passive: true });
    }

    // Animate counters
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          const duration = 2000; // ms
          const step = target / (duration / 16); // 60fps approx
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current < target) {
              entry.target.textContent = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target;
            }
          };
          
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
    observers.push(counterObserver);

    // Text scramble effect
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
      }
      
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 20); // Reduced randomness
          const end = start + Math.floor(Math.random() * 20); // Shorter animation
          this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      
      update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.15) { // Less frequent changes
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="text-aurora-blue">${char}</span>`;
          } else {
            output += from;
          }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
          // Make the final text selectable by removing spans
          this.el.innerHTML = this.el.textContent;
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }
    
    // Apply text scramble effect to elements with .text-scramble class
    const scrambleElements = document.querySelectorAll('.text-scramble');
    scrambleElements.forEach(el => {
      const originalText = el.textContent;
      const fx = new TextScramble(el);
      
      // Only run the animation once on page load
      setTimeout(() => {
        fx.setText(originalText);
      }, 1000);
    });

    // Handle text-reveal elements with CSS animation instead of JS scramble
    const revealElements = document.querySelectorAll('.text-reveal');
    revealElements.forEach(el => {
      // No need for JavaScript animation - using CSS animation instead
      // Just ensure the element is visible and selectable
      setTimeout(() => {
        el.style.opacity = '1';
      }, 500);
    });

    // Particle background effect
    const particleContainers = document.querySelectorAll('.particle-background');
    const particleAnimations = [];
    
    particleContainers.forEach(container => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '-1';
      canvas.style.pointerEvents = 'none';
      
      container.style.position = 'relative';
      container.appendChild(canvas);
      
      const particles = [];
      const particleCount = 50;
      const maxSize = 5;
      const colors = ['#3E8AC1', '#47A76A', '#9D4EDD', '#1B0B3B', '#FFD93D'];
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxSize + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      // Animate particles
      let animationId;
      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce back when hitting edges
          if (particle.x > canvas.width || particle.x < 0) {
            particle.speedX = -particle.speedX;
          }
          
          if (particle.y > canvas.height || particle.y < 0) {
            particle.speedY = -particle.speedY;
          }
        });
        
        animationId = requestAnimationFrame(animateParticles);
      }
      
      animateParticles();
      particleAnimations.push(() => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      });
    });

    // Tilt effect for cards
    const tiltCards = document.querySelectorAll('.tilt-effect');
    const tiltHandlers = [];
    
    tiltCards.forEach(card => {
      const mousemoveHandler = e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const tiltX = deltaY * 10; // Max tilt in degrees
        const tiltY = -deltaX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };
      
      const mouseleaveHandler = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      };
      
      card.addEventListener('mousemove', mousemoveHandler);
      card.addEventListener('mouseleave', mouseleaveHandler);
      
      tiltHandlers.push(() => {
        card.removeEventListener('mousemove', mousemoveHandler);
        card.removeEventListener('mouseleave', mouseleaveHandler);
      });
    });

    // Return a cleanup function
    return function cleanup() {
      // Disconnect all observers
      cleanupObservers();
      
      // Remove event listeners
      if (parallaxScrollHandler) {
        window.removeEventListener('scroll', parallaxScrollHandler);
      }
      
      // Cancel particle animations
      particleAnimations.forEach(cancelFn => cancelFn());
      
      // Remove tilt handlers
      tiltHandlers.forEach(removeFn => removeFn());
    };
  }

  // Expose the initialization function to the global scope
  window.scrollAnimations = {
    init: initAnimations,
    cleanup: cleanupObservers
  };
})(); 