// ===== MOBILE DETECTION & OPTIMIZATION SYSTEM =====
const isMobile = () => {
  return window.innerWidth <= 768 ||
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0);
};

const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024 &&
         ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Mobile optimization class management
function applyMobileOptimizations() {
  const body = document.body;

  if (isMobile()) {
    body.classList.add('mobile-device');
    body.classList.remove('desktop-device', 'tablet-device');

    // Disable heavy animations on mobile
    body.style.setProperty('--animation-duration', '0.3s');
    body.style.setProperty('--hover-transition', 'none');
    body.style.setProperty('--cursor-trail', 'none');

    // Disable custom cursor on mobile
    body.style.cursor = 'auto';

    console.log('Mobile optimizations applied');
  } else if (isTablet()) {
    body.classList.add('tablet-device');
    body.classList.remove('desktop-device', 'mobile-device');

    // Moderate animations on tablet
    body.style.setProperty('--animation-duration', '0.4s');
    body.style.setProperty('--hover-transition', '0.2s ease');
    body.style.setProperty('--cursor-trail', 'none');

    console.log('Tablet optimizations applied');
  } else {
    body.classList.add('desktop-device');
    body.classList.remove('mobile-device', 'tablet-device');

    // Full animations on desktop
    body.style.setProperty('--animation-duration', '0.6s');
    body.style.setProperty('--hover-transition', '0.3s ease');
    body.style.setProperty('--cursor-trail', 'block');

    console.log('Desktop optimizations applied');
  }
}

// Apply optimizations immediately
applyMobileOptimizations();

// Reapply on resize with debouncing
window.addEventListener('resize', debounce(applyMobileOptimizations, 250));

// ULTIMATE MOBILE BUTTON FIX - Zero delay, instant response
if (isMobile()) {
  console.log('🚀 Applying ULTIMATE mobile button fix...');

  // Add aggressive CSS to eliminate ALL delays
  const ultraFastStyle = document.createElement('style');
  ultraFastStyle.textContent = `
    /* ULTIMATE mobile optimization */
    * {
      touch-action: manipulation !important;
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      user-select: none !important;
    }

    /* Instant button response */
    button, .btn, .style-gallery-btn, .gallery-close, .nav-btn,
    a[href], [onclick], .mobile-menu-toggle, .filter-btn,
    .submit-review-btn, .contact-submit-btn, .call-now-btn,
    .whatsapp-btn, .order-now-btn, .elegant-dm-btn {
      touch-action: manipulation !important;
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
      cursor: pointer !important;
      transition: none !important;
    }

    /* Prevent iOS zoom */
    input, textarea, select {
      font-size: 16px !important;
    }

    /* Instant visual feedback */
    .mobile-device button:active,
    .mobile-device .btn:active,
    .mobile-device .style-gallery-btn:active,
    .mobile-device a:active {
      opacity: 0.8 !important;
      transform: scale(0.98) !important;
      transition: none !important;
    }
  `;
  document.head.appendChild(ultraFastStyle);

  // ULTIMATE button handler - runs immediately
  const ultimateMobileButtonFix = () => {
    console.log('🔧 Running ultimate mobile button fix...');

    const allInteractive = document.querySelectorAll(`
      button, .btn, .style-gallery-btn, .gallery-close, .nav-btn,
      a[href], [onclick], .mobile-menu-toggle, .filter-btn,
      .submit-review-btn, .contact-submit-btn, .call-now-btn,
      .whatsapp-btn, .order-now-btn, .elegant-dm-btn, .popup-close,
      .booking-close, .organic-close, .delete-review-btn, .logo
    `);

    console.log(`🎯 Found ${allInteractive.length} interactive elements`);

    allInteractive.forEach((element, index) => {
      // Skip if already processed
      if (element.dataset.ultraFixed) return;

      // Mark as processed
      element.dataset.ultraFixed = 'true';

      // Apply instant styles
      element.style.touchAction = 'manipulation';
      element.style.webkitTapHighlightColor = 'transparent';
      element.style.cursor = 'pointer';

      // Remove ALL existing event listeners by cloning
      const newElement = element.cloneNode(true);
      element.parentNode.replaceChild(newElement, element);
      newElement.dataset.ultraFixed = 'true';

      // Add INSTANT touch handling
      let touchActive = false;

      newElement.addEventListener('touchstart', function(e) {
        touchActive = true;
        console.log(`⚡ Touch start on element ${index}`);
      }, { passive: true });

      newElement.addEventListener('touchend', function(e) {
        if (touchActive) {
          touchActive = false;
          e.preventDefault();
          e.stopPropagation();

          console.log(`🚀 INSTANT action on element ${index}`);

          // Execute action IMMEDIATELY
          const onclick = this.getAttribute('onclick');
          const href = this.getAttribute('href');

          if (onclick) {
            try {
              eval(onclick);
            } catch (err) {
              console.error('Onclick error:', err);
            }
          } else if (href) {
            if (href.startsWith('#')) {
              const target = document.querySelector(href);
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.open(href, this.target || '_self');
            }
          }
        }
      }, { passive: false });

      newElement.addEventListener('touchcancel', function() {
        touchActive = false;
      }, { passive: true });
    });

    console.log('✅ Ultimate mobile button fix complete!');
  };

  // Run immediately
  ultimateMobileButtonFix();

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ultimateMobileButtonFix);
  }

  // Run after page load
  window.addEventListener('load', ultimateMobileButtonFix);
}

// WORLD'S MOST FLAWLESS HENNA LOADING EXPERIENCE
// Absolutely perfect coverage with zero bleed-through

// Immediate body protection
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';
document.body.classList.add('loading');

window.addEventListener('load', function() {
  // Ensure complete coverage
  ensureFlawlessLoading();

  // Initialize henna loading experience
  initializeHennaLoading();

  // Exactly 4 seconds loading duration
  setTimeout(() => {
    completeHennaLoading();
  }, 4000);
});

// Ensure absolutely flawless loading coverage
function ensureFlawlessLoading() {
  // Hide all content except loader
  const allElements = document.querySelectorAll('body > *:not(.loader)');
  allElements.forEach(element => {
    element.style.visibility = 'hidden';
    element.style.opacity = '0';
  });

  // Ensure loader is fully visible
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.visibility = 'visible';
    loader.style.opacity = '1';
    loader.style.display = 'flex';
  }

  // Prevent any scrolling
  document.body.style.position = 'fixed';
  document.body.style.top = '0';
  document.body.style.left = '0';
  document.body.style.width = '100%';
  document.body.style.height = '100%';
}

// Initialize authentic henna loading animations
function initializeHennaLoading() {
  // Animate progress percentage
  animateProgressPercentage();

  // Create floating henna essence particles
  createHennaEssenceParticles();

  // Add ambient henna atmosphere
  createHennaAmbience();
}

// Animate progress percentage counter
function animateProgressPercentage() {
  const progressElement = document.getElementById('progress-percentage');
  if (!progressElement) return;

  let progress = 0;
  const duration = 4000; // 4 seconds
  const interval = 50; // Update every 50ms
  const increment = 100 / (duration / interval);

  const progressInterval = setInterval(() => {
    progress += increment;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
    }
    progressElement.textContent = Math.round(progress) + '%';
  }, interval);
}

// Create floating henna essence particles
function createHennaEssenceParticles() {
  const essenceContainer = document.querySelector('.essence-particles');
  if (!essenceContainer) return;

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createEssenceParticle(essenceContainer);
    }, i * 500);
  }
}

function createEssenceParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'essence-particle';
  particle.style.cssText = `
    position: absolute;
    width: ${Math.random() * 4 + 2}px;
    height: ${Math.random() * 4 + 2}px;
    background: radial-gradient(circle, rgba(139, 69, 19, 0.6), rgba(212, 175, 55, 0.3));
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation: essenceFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
    opacity: 0;
  `;

  container.appendChild(particle);

  // Animate particle
  setTimeout(() => {
    particle.style.opacity = '1';
  }, 100);

  // Remove particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 5000);
}

// Create ambient henna atmosphere
function createHennaAmbience() {
  const ambienceContainer = document.querySelector('.henna-ambience');
  if (!ambienceContainer) return;

  // Add floating pattern elements
  const patterns = document.querySelectorAll('.floating-pattern');
  patterns.forEach((pattern, index) => {
    pattern.style.cssText = `
      position: absolute;
      width: ${Math.random() * 30 + 20}px;
      height: ${Math.random() * 30 + 20}px;
      border: 2px solid rgba(139, 69, 19, 0.1);
      border-radius: 50%;
      left: ${Math.random() * 80 + 10}%;
      top: ${Math.random() * 80 + 10}%;
      animation: patternFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay: ${index * 0.5}s;
    `;
  });
}

// FLAWLESS loading completion with perfect restoration
function completeHennaLoading() {
  const loader = document.getElementById('loader');

  // Create final henna burst effect
  createHennaBurstEffect();

  // Elegant fade out with artistic transition
  setTimeout(() => {
    loader.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out, filter 1.2s ease-out';
    loader.style.opacity = '0';
    loader.style.transform = 'scale(1.15) rotate(3deg)';
    loader.style.filter = 'blur(5px)';

    setTimeout(() => {
      // Complete removal of loader
      loader.style.display = 'none';
      loader.remove();

      // Restore body to normal state
      restorePageToNormalState();

      // Initialize main page with henna-inspired entrance
      initializeMainPageWithHennaStyle();
    }, 1200);
  }, 200);
}

// Restore page to perfect normal state
function restorePageToNormalState() {
  // Remove loading class and restore body
  document.body.classList.remove('loading');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.width = '';
  document.body.style.height = '';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  // Restore all hidden elements
  const allElements = document.querySelectorAll('body > *');
  allElements.forEach(element => {
    element.style.visibility = '';
    element.style.opacity = '';
  });
}

// Create final henna burst effect
function createHennaBurstEffect() {
  const canvas = document.querySelector('.henna-canvas');
  if (!canvas) return;

  for (let i = 0; i < 12; i++) {
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--gold);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: hennaBurst 0.8s ease-out forwards;
      animation-delay: ${i * 0.05}s;
    `;

    const angle = (i / 12) * 360;
    burst.style.setProperty('--angle', angle + 'deg');

    canvas.appendChild(burst);
  }
}

// Initialize main page with henna-inspired entrance
function initializeMainPageWithHennaStyle() {
  const navbar = document.querySelector('.navbar');
  const words = document.querySelectorAll('.word');
  const btns = document.querySelectorAll('.btn');
  const heroImg = document.querySelector('.hero-img');
  // Animate navbar with henna-style entrance
  if (navbar) {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
    navbar.style.filter = 'none';
  }

  // Animate hero text words with organic flow
  if (words.length > 0) {
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0) rotateX(0deg)';
      }, i * 150);
    });
  }

  // Animate buttons with henna-inspired timing
  if (btns.length > 0) {
    btns.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0) scale(1)';
      }, 600 + (i * 200));
    });
  }

  // Animate hero image with artistic reveal
  if (heroImg) {
    setTimeout(() => {
      heroImg.style.opacity = '1';
      heroImg.style.transform = 'rotateY(-8deg) rotateX(3deg) scale(1)';
    }, 400);
  }
}

// Initialize main page content animations
function initializeMainPage() {
  const navbar = document.querySelector('.navbar');
  const words = document.querySelectorAll('.word');
  const btns = document.querySelectorAll('.btn');
  const heroImg = document.querySelector('.hero-img');
  // Animate navbar
  if (navbar) {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
  }

  // Animate hero text words
  if (words.length > 0) {
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
      }, i * 200);
    });
  }

  // Animate buttons
  if (btns.length > 0) {
    btns.forEach((btn, i) => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, 800 + (i * 200));
    });
  }

  // Animate hero image
  if (heroImg) {
    setTimeout(() => {
      heroImg.style.opacity = '1';
    }, 600);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Ensure About section is immediately visible
  const aboutSection = document.querySelector('.about-section');
  const aboutContainer = document.querySelector('.about-container');
  const aboutContent = document.querySelector('.about-content');
  const aboutImages = document.querySelector('.about-images');

  if (aboutSection) {
    aboutSection.style.display = 'block';
    aboutSection.style.visibility = 'visible';
    aboutSection.style.opacity = '1';
  }

  if (aboutContainer) {
    aboutContainer.style.display = 'grid';
    aboutContainer.style.visibility = 'visible';
    aboutContainer.style.opacity = '1';
  }

  if (aboutContent) {
    aboutContent.style.opacity = '1';
    aboutContent.style.transform = 'translateX(0)';
  }

  if (aboutImages) {
    aboutImages.style.opacity = '1';
    aboutImages.style.transform = 'translateX(0)';
  }

  // Create particles for About section - same as Hero
  createAboutParticles();

  // Create particles for Services section
  createServicesParticles();

  // Function to create About section particles
  function createAboutParticles() {
    const aboutParticleContainer = document.getElementById('aboutParticleContainer');
    if (!aboutParticleContainer) return;

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random properties
      const size = Math.random() * 8 + 4;
      const posX = Math.random() * 100;
      const delay = Math.random() * 25;
      const duration = Math.random() * 15 + 25;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = Math.random() * 0.6 + 0.2;

      aboutParticleContainer.appendChild(particle);
    }
  }

  // Function to create Services section particles
  function createServicesParticles() {
    const servicesParticleContainer = document.getElementById('servicesParticleContainer');
    if (!servicesParticleContainer) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random properties
      const size = Math.random() * 6 + 3;
      const posX = Math.random() * 100;
      const delay = Math.random() * 30;
      const duration = Math.random() * 20 + 30;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;

      servicesParticleContainer.appendChild(particle);
    }
  }

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }

  // About Section Image Swapping
  const imageContainer = document.querySelector('.about-images .image-container');
  const images = imageContainer.querySelectorAll('.swapping-image');
  const dots = document.querySelectorAll('.image-dots .dot');
  let currentIndex = 0;
  let interval = 5000; // Change image every 5 seconds
  let autoAdvance;
  let isTransitioning = false;

  function showImage(index, direction = 'next') {
    if (isTransitioning) return;
    isTransitioning = true;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Get current and next image
    const currentImage = images[currentIndex];
    const nextImage = images[index];

    // Set initial state for next image based on direction
    nextImage.style.transform = direction === 'next' ? 'scale(1.1)' : 'scale(0.9)';
    nextImage.style.opacity = '0';
    nextImage.classList.add('active');

    // Animate current image out
    currentImage.style.transform = direction === 'next' ? 'scale(0.9)' : 'scale(1.1)';
    currentImage.style.opacity = '0';

    // Animate next image in
    setTimeout(() => {
      nextImage.style.transform = 'scale(1)';
      nextImage.style.opacity = '1';
    }, 50);

    // Remove active class from current image after transition
    setTimeout(() => {
      currentImage.classList.remove('active');
      isTransitioning = false;
    }, 1200);

    currentIndex = index;
  }

  function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex, 'next');
  }

  function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex, 'prev');
  }

  // Initialize autoplay
  function startAutoplay() {
    if (autoAdvance) clearInterval(autoAdvance);
    autoAdvance = setInterval(nextImage, interval);
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (currentIndex === index) return;
      const direction = index > currentIndex ? 'next' : 'prev';
      showImage(index, direction);
      startAutoplay();
    });
  });

  // Pause on hover
  imageContainer.addEventListener('mouseenter', () => {
    if (autoAdvance) clearInterval(autoAdvance);
  });

  imageContainer.addEventListener('mouseleave', startAutoplay);

  // Add touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  imageContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  imageContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        prevImage();
      } else {
        nextImage();
      }
      startAutoplay();
    }
  }

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevImage();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextImage();
      startAutoplay();
    }
  });

  // Start the slideshow
  startAutoplay();

  // Set first image and dot as active
  images[0].classList.add('active');
  dots[0].classList.add('active');
});

// Counter Animation for Stats
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounters() {
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      stat.textContent = Math.floor(current);
    }, 20);
  });
}

// Intersection Observer for counter animation
const statsSection = document.querySelector('.about-stats');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  observer.observe(statsSection);
}

// Enhanced Loader Animation with Spectacular Effects
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('progress');
  const progressText = document.getElementById('progressText');
  const navbar = document.querySelector('.navbar');
  const words = document.querySelectorAll('.word');
  const btns = document.querySelectorAll('.btn');
  const heroImg = document.querySelector('.hero-img');


  // Create spectacular background particles and sparkles
  createLoaderBackgroundParticles();
  createProgressParticles();
  createSparkleEffects();

  // Enhanced loading messages
  const loadingMessages = [
    'Preparing Experience...',
    'Loading Artistry...',
    'Crafting Beauty...',
    'Almost Ready!',
    'Welcome to Henna by Fuzz!'
  ];

  let messageIndex = 0;
  let progressValue = 0;
  const progressSteps = [25, 50, 75, 90, 100]; // Faster progression
  let stepIndex = 0;

  // Faster smooth progress animation
  const progressInterval = setInterval(() => {
    if (stepIndex < progressSteps.length) {
      const targetProgress = progressSteps[stepIndex];
      const increment = (targetProgress - progressValue) * 0.15; // Faster increment

      progressValue += increment;
      progress.style.width = `${progressValue}%`;
      progressText.textContent = `${loadingMessages[messageIndex]} ${Math.floor(progressValue)}%`;

      if (Math.abs(progressValue - targetProgress) < 1) {
        progressValue = targetProgress;
        stepIndex++;
        messageIndex = Math.min(messageIndex + 1, loadingMessages.length - 1);

        if (stepIndex >= progressSteps.length) {
          clearInterval(progressInterval);

          // Spectacular exit animation
          setTimeout(() => {
            // Animate letters out with stagger
            const letters = document.querySelectorAll('.letter');
            letters.forEach((letter, i) => {
              setTimeout(() => {
                letter.style.transform = 'translateY(-100px) rotateX(90deg) scale(0)';
                letter.style.opacity = '0';
              }, i * 50);
            });

            // Animate rings out
            setTimeout(() => {
              const rings = document.querySelectorAll('.henna-pattern');
              rings.forEach((ring, i) => {
                setTimeout(() => {
                  ring.style.transform = 'scale(0) rotate(720deg)';
                  ring.style.opacity = '0';
                }, i * 100);
              });
            }, 500);

            // Fade out progress and glow
            setTimeout(() => {
              document.querySelector('.progress-container').style.opacity = '0';
              document.querySelector('.loader-glow').style.opacity = '0';
              document.querySelector('.text-glow').style.opacity = '0';
            }, 800);

            // Final loader fade
            setTimeout(() => {
              loader.style.opacity = '0';
              loader.style.transform = 'scale(1.1)';
              loader.style.filter = 'blur(10px)';

              setTimeout(() => {
                loader.style.display = 'none';

                // Animate main content in
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';

                setTimeout(() => {
                  words.forEach((word, i) => {
                    setTimeout(() => {
                      word.style.opacity = '1';
                      word.style.transform = 'translateY(0)';
                    }, i * 200);
                  });

                  btns.forEach((btn, i) => {
                    setTimeout(() => {
                      btn.style.opacity = '1';
                      btn.style.transform = 'translateY(0)';
                    }, 1000 + (i * 200));
                  });

                  heroImg.style.opacity = '1';
                }, 500);
              }, 1000);
            }, 800); // Reduced from 1200
          }, 500); // Reduced from 800
        }
      }
    }
  }, 30); // Faster interval from 50

  // Particle creation functions
  function createLoaderBackgroundParticles() {
    const container = document.getElementById('loaderBgParticles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('bg-particle');

      const size = Math.random() * 12 + 4;
      const posX = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 15;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      container.appendChild(particle);
    }
  }

  function createProgressParticles() {
    const container = document.getElementById('progressParticles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('progress-particle');

      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const delay = Math.random() * 2.5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);
    }
  }

  // Create floating sparkle effects
  function createSparkleEffects() {
    const container = document.getElementById('sparkleContainer');
    const sparkleCount = 30;

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      const size = Math.random() * 8 + 4;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = Math.random() * 3 + 4;

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${posX}%`;
      sparkle.style.top = `${posY}%`;
      sparkle.style.animationDelay = `${delay}s`;
      sparkle.style.animationDuration = `${duration}s`;

      container.appendChild(sparkle);
    }
  }

  // Create floating particles for main page
  const particleContainer = document.getElementById('particleContainer');
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties
    const size = Math.random() * 12 + 6;
    const posX = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 15 + 20;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.opacity = Math.random() * 0.8 + 0.3;

    // Enhanced golden shades with variations
    const goldenShades = [
      'radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(255, 215, 0, 0.7) 50%, rgba(184, 134, 11, 0.5) 100%)',
      'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(212, 175, 55, 0.6) 50%, rgba(255, 193, 7, 0.4) 100%)',
      'radial-gradient(circle, rgba(184, 134, 11, 0.9) 0%, rgba(212, 175, 55, 0.7) 50%, rgba(255, 215, 0, 0.5) 100%)',
      'radial-gradient(circle, rgba(255, 193, 7, 0.8) 0%, rgba(184, 134, 11, 0.6) 50%, rgba(212, 175, 55, 0.4) 100%)'
    ];
    particle.style.background = goldenShades[Math.floor(Math.random() * goldenShades.length)];

    // Add golden glow effect
    particle.style.boxShadow = `0 0 ${15 + Math.random() * 10}px rgba(212, 175, 55, 0.6), 0 0 ${30 + Math.random() * 20}px rgba(255, 215, 0, 0.4)`;

    particleContainer.appendChild(particle);
  }



  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Word hover effects
  words.forEach(word => {
    word.style.opacity = '0';
    word.style.transform = 'translateY(20px)';
    word.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  // About Section Scroll Animation
  const aboutSection = document.querySelector('.about-section');
  const aboutContent = document.querySelector('.about-content');
  const aboutImages = document.querySelector('.about-images');
  const aboutParagraphs = document.querySelectorAll('.about-text p');
  const statItems = document.querySelectorAll('.stat-item');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate content
        setTimeout(() => {
          aboutContent.classList.add('animate');
        }, 200);

        // Animate images
        setTimeout(() => {
          aboutImages.classList.add('animate');
        }, 400);

        // Animate paragraphs with stagger
        aboutParagraphs.forEach((p, index) => {
          setTimeout(() => {
            p.classList.add('animate');
          }, 600 + (index * 200));
        });

        // Animate stats with stagger
        statItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, 1200 + (index * 150));
        });
      }
    });
  }, observerOptions);

  aboutObserver.observe(aboutSection);

  // Enhanced navigation with active states
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // Initialize gallery functionality
  initializeStyleGallery();

  // Galaxy Brain Navbar Scroll Effect
  initializeNavbarScrollEffect();

  // Galaxy Brain Audio Experience
  initializeAmbientAudio();

  // Initialize Portfolio functionality
  initializePortfolio();

  // Initialize Contact functionality
  initializeContact();

  // Initialize Review System
  initializeReviewSystem();

  // Initialize Elegant Side Popup
  initializeElegantSidePopup();

  // Initialize Mobile Optimizations
  initializeMobileOptimizations();

  // Initialize Logo Click Handler for Page Refresh
  initializeLogoRefresh();

  // Initialize Mobile Navigation
  initializeMobileNavigation();

  // IMMEDIATE mobile button setup - run first and most important
  if (isMobile()) {
    console.log('Setting up mobile buttons immediately...');

    // Run the comprehensive mobile fix
    fixAllMobileButtons();

    // Also run the original setup
    setupImmediateMobileButtons();

    // Re-run both after delays to catch any missed elements
    setTimeout(() => {
      fixAllMobileButtons();
      setupImmediateMobileButtons();
      console.log('Mobile buttons re-initialized after delay');
    }, 100);

    setTimeout(() => {
      fixAllMobileButtons();
      console.log('Final mobile button fix applied');
    }, 1000);
  }

  // Fix mobile gallery buttons
  fixMobileGalleryButtons();

  // Initialize gallery functionality
  initializeStyleGallery();

  // Smooth scrolling for navigation links
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add sparkle effect on nav link hover
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      createNavSparkle(this);
    });
  });

  function createNavSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'var(--gold)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';

    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';

    document.body.appendChild(sparkle);

    // Animate sparkle
    sparkle.animate([
      { transform: 'scale(0) rotate(0deg)', opacity: 0 },
      { transform: 'scale(1) rotate(180deg)', opacity: 1 },
      { transform: 'scale(0) rotate(360deg)', opacity: 0 }
    ], {
      duration: 800,
      easing: 'ease-out'
    }).onfinish = () => sparkle.remove();
  }
});

// ===== ELEGANT STYLE GALLERY FUNCTIONALITY =====
// Gallery variables
let currentGalleryStyle = '';
let galleryImages = [];
let currentImageIndex = 0;

// Gallery image collections for each style
const styleGalleries = {
  traditional: {
    title: 'Traditional Indian Henna',
    description: 'Rich, detailed motifs with paisleys, florals, and bridal storytelling. Timeless patterns that honor ancient traditions.',
    media: [
      { type: 'video', src: 'images/trad vid.mp4', alt: 'Traditional Henna Application Process', autoplay: true },
      { type: 'image', src: 'images/akmeh1.jpg', alt: 'Traditional Henna Design 1' },
      { type: 'image', src: 'images/akmeh2.PNG', alt: 'Traditional Henna Design 2' },
      { type: 'image', src: 'images/akmeh3.PNG', alt: 'Traditional Henna Design 3' },
      { type: 'image', src: 'images/akmeh4.PNG', alt: 'Traditional Henna Design 4' },
      { type: 'image', src: 'images/akmeh5.jpg', alt: 'Traditional Henna Design 5' },
      { type: 'image', src: 'images/akmeh6.jpg', alt: 'Traditional Henna Design 6' }
    ]
  },
  arabic: {
    title: 'Arabic Henna Style',
    description: 'Bold, flowing patterns with floral and leafy elements, perfect for quick yet stunning looks with maximum visual impact.',
    media: [
      { type: 'video', src: 'images/arabic.mp4', alt: 'Arabic Henna Application Process', autoplay: true },
      { type: 'image', src: 'images/akmeh7.jpg', alt: 'Arabic Henna Design 1' },
      { type: 'image', src: 'images/akmeh8.jpg', alt: 'Arabic Henna Design 2' },
      { type: 'image', src: 'images/akmeh9.jpg', alt: 'Arabic Henna Design 3' }
    ]
  },
  khafeef: {
    title: 'Khafeef Henna Style',
    description: 'Delicate flowers intertwined with leafy vines, creating graceful patterns that embody feminine elegance and natural beauty.',
    media: [
      { type: 'video', src: 'images/khafeef.mp4', alt: 'Khafeef Henna Application Process', autoplay: true },
      { type: 'image', src: 'images/work1.jpg', alt: 'Khafeef Henna Design 1' },
      { type: 'image', src: 'images/akmeh510.jpg', alt: 'Khafeef Henna Design 2' },
      { type: 'image', src: 'images/akmeh12.jpeg', alt: 'Khafeef Henna Design 3' }
    ]
  },
  minimal: {
    title: 'Modern Minimal Henna',
    description: 'Clean, elegant designs for brides who love simplicity and style. Contemporary aesthetics with sophisticated beauty.',
    media: [
      { type: 'video', src: 'images/modern min.mp4', alt: 'Modern Minimal Henna Application Process', autoplay: true },
      { type: 'image', src: 'images/mandala1.jpg.jpg', alt: 'Modern Minimal Henna Design 1' },
      { type: 'image', src: 'images/mandala2.jpg.jpg', alt: 'Modern Minimal Henna Design 2' },
      { type: 'image', src: 'images/mandala3.jpg.jpg', alt: 'Modern Minimal Henna Design 3' },
      { type: 'image', src: 'images/mandala4.jpg.jpg', alt: 'Modern Minimal Henna Design 4' }
    ]
  },
  fusion: {
    title: 'Fusion Henna Style',
    description: 'A unique blend of Indian, Arabic, and contemporary styles customized for your event. Creating something entirely new and personal.',
    media: [
      { type: 'video', src: 'images/floral vid.mp4', alt: 'Fusion Floral Henna Application Process', autoplay: true },
      { type: 'image', src: 'images/arab1.jpg', alt: 'Fusion Floral Henna Design 1' },
      { type: 'image', src: 'images/arab2.jpg', alt: 'Fusion Floral Henna Design 2' },
      { type: 'image', src: 'images/arab3.jpg', alt: 'Fusion Floral Henna Design 3' },
      { type: 'image', src: 'images/arab4.jpg', alt: 'Fusion Floral Henna Design 4' },
      { type: 'image', src: 'images/akmeh1.jpg', alt: 'Fusion Floral Henna Design 5' },
      { type: 'image', src: 'images/akmeh5.jpg', alt: 'Fusion Floral Henna Design 6' },
      { type: 'image', src: 'images/akmeh6.jpg', alt: 'Fusion Floral Henna Design 7' },
      { type: 'image', src: 'images/akmeh8.jpg', alt: 'Fusion Floral Henna Design 8' },
      { type: 'image', src: 'images/work1.jpg', alt: 'Fusion Floral Henna Design 9' }
    ]
  }
};

function initializeStyleGallery() {
  // Add direct event listener to close button with AGGRESSIVE mobile support
  const closeButton = document.querySelector('.gallery-close');
  if (closeButton) {
    if (isMobile()) {
      // AGGRESSIVE MOBILE FIX for close button
      let touchStartTime = 0;

      closeButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        touchStartTime = Date.now();
        this.style.transform = 'scale(0.95)';
        this.style.background = 'rgba(255, 255, 255, 0.3)';
        console.log('Close button touch started');
      }, { passive: false });

      closeButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const touchDuration = Date.now() - touchStartTime;

        // Reset styling
        this.style.transform = '';
        this.style.background = '';

        // Immediate close if it was a quick tap
        if (touchDuration < 500) {
          console.log('Close button touched - immediate close!');
          setTimeout(() => closeStyleGallery(), 0);
        }
      }, { passive: false });

      closeButton.addEventListener('touchcancel', function() {
        this.style.transform = '';
        this.style.background = '';
      });
    } else {
      // Desktop - use click events
      closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Close button clicked via event listener!');
        closeStyleGallery();
      });
    }
  }

  // Enhanced navigation button setup with better error handling
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  console.log('Navigation buttons found:', { prevBtn: !!prevBtn, nextBtn: !!nextBtn });

  if (prevBtn) {
    // Remove any existing event listeners
    prevBtn.replaceWith(prevBtn.cloneNode(true));
    const newPrevBtn = document.querySelector('.prev-btn');

    // Add universal click handler that works on both mobile and desktop
    newPrevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Previous button clicked!');

      // Check if gallery is open and has images
      if (galleryImages && galleryImages.length > 0) {
        previousImage();
      } else {
        console.warn('No gallery images available for navigation');
      }
    });

    // Add touch support for mobile
    if (isMobile()) {
      let touchStartTime = 0;

      newPrevBtn.addEventListener('touchstart', function(e) {
        touchStartTime = Date.now();
        this.style.transform = 'translateY(-50%) scale(0.95)';
        this.style.background = 'rgba(255, 255, 255, 0.3)';
      }, { passive: true });

      newPrevBtn.addEventListener('touchend', function(e) {
        const touchDuration = Date.now() - touchStartTime;
        this.style.transform = 'translateY(-50%)';
        this.style.background = '';

        // Prevent double-firing with click event
        if (touchDuration < 500) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, { passive: false });
    }
  }

  if (nextBtn) {
    // Remove any existing event listeners
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    const newNextBtn = document.querySelector('.next-btn');

    // Add universal click handler that works on both mobile and desktop
    newNextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Next button clicked!');

      // Check if gallery is open and has images
      if (galleryImages && galleryImages.length > 0) {
        nextImage();
      } else {
        console.warn('No gallery images available for navigation');
      }
    });

    // Add touch support for mobile
    if (isMobile()) {
      let touchStartTime = 0;

      newNextBtn.addEventListener('touchstart', function(e) {
        touchStartTime = Date.now();
        this.style.transform = 'translateY(-50%) scale(0.95)';
        this.style.background = 'rgba(255, 255, 255, 0.3)';
      }, { passive: true });

      newNextBtn.addEventListener('touchend', function(e) {
        const touchDuration = Date.now() - touchStartTime;
        this.style.transform = 'translateY(-50%)';
        this.style.background = '';

        // Prevent double-firing with click event
        if (touchDuration < 500) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, { passive: false });
    }
  }

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeStyleGallery();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    }
  });

  // Add mobile touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
      touchStartX = e.changedTouches[0].screenX;
    }
  });

  document.addEventListener('touchend', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swipe right - previous image
        previousImage();
      } else {
        // Swipe left - next image
        nextImage();
      }
    }
  }
}

function openStyleGallery(style) {
  console.log('openStyleGallery called with style:', style);

  currentGalleryStyle = style;
  const gallery = styleGalleries[style];

  console.log('Gallery data:', gallery);

  if (!gallery) {
    console.error('No gallery found for style:', style);
    return;
  }

  // Handle both old format (images array) and new format (media array)
  galleryImages = gallery.media || gallery.images || [];
  currentImageIndex = 0;

  console.log('Gallery media:', galleryImages);

  // Update modal content
  const titleElement = document.getElementById('galleryTitle');
  const descElement = document.getElementById('galleryDescription');

  console.log('Title element:', titleElement);
  console.log('Description element:', descElement);

  if (titleElement) titleElement.textContent = gallery.title;
  if (descElement) descElement.textContent = gallery.description;

  // Load main media (image or video)
  updateMainMedia();

  // Create thumbnails
  createThumbnails();

  // Show modal with animation
  const modal = document.getElementById('galleryModal');
  console.log('Gallery modal element:', modal);

  if (modal) {
    modal.style.display = 'flex';
    console.log('Modal display set to flex');

    setTimeout(() => {
      modal.classList.add('active');
      console.log('Modal active class added');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    console.log('Gallery opened successfully');
  } else {
    console.error('Gallery modal not found!');
  }
}

function closeStyleGallery() {
  console.log('closeStyleGallery function called!'); // Debug log
  const modal = document.getElementById('galleryModal');
  if (modal) {
    console.log('Modal found, closing...'); // Debug log
    modal.classList.remove('active');

    // Stop any playing videos
    const mainVideo = document.getElementById('mainGalleryVideo');
    if (mainVideo) {
      mainVideo.pause();
      mainVideo.currentTime = 0;
    }

    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      console.log('Modal closed successfully'); // Debug log
    }, 400);
  } else {
    console.error('Gallery modal not found!'); // Debug log
  }
}

function updateMainMedia() {
  const mainImage = document.getElementById('mainGalleryImage');
  const mainVideo = document.getElementById('mainGalleryVideo');
  const currentMedia = galleryImages[currentImageIndex];

  // Hide both elements initially
  if (mainImage) {
    mainImage.style.opacity = '0';
    mainImage.style.display = 'none';
  }
  if (mainVideo) {
    mainVideo.style.opacity = '0';
    mainVideo.style.display = 'none';
    mainVideo.pause();
  }

  // Handle different media formats
  const mediaSrc = typeof currentMedia === 'string' ? currentMedia : currentMedia.src;
  const mediaType = typeof currentMedia === 'string' ? 'image' : currentMedia.type;
  const mediaAlt = typeof currentMedia === 'string' ? 'Henna Design' : currentMedia.alt;

  if (mediaType === 'video') {
    // Display video
    if (mainVideo) {
      mainVideo.src = mediaSrc;
      mainVideo.style.display = 'block';

      // Set video properties
      mainVideo.muted = false; // Allow sound
      mainVideo.controls = true;

      // Check if this video should autoplay (first video in gallery)
      const shouldAutoplay = currentMedia.autoplay || currentImageIndex === 0;

      if (shouldAutoplay) {
        mainVideo.autoplay = true;
        mainVideo.muted = true; // Browsers require muted for autoplay
      }

      // Add event listener for when video ends
      mainVideo.removeEventListener('ended', handleVideoEnd); // Remove any existing listener
      mainVideo.addEventListener('ended', handleVideoEnd);

      // Smooth fade-in animation for video
      requestAnimationFrame(() => {
        mainVideo.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        mainVideo.style.opacity = '1';
        mainVideo.style.transform = 'scale(1)';

        // Start playing if autoplay is enabled
        if (shouldAutoplay) {
          mainVideo.play().catch(error => {
            console.log('Autoplay failed:', error);
            // If autoplay fails, show controls and let user play manually
            mainVideo.muted = false;
          });
        }
      });
    }


  } else {
    // Display image
    const newImage = new Image();
    newImage.loading = 'lazy';
    newImage.onload = function() {
      if (mainImage) {
        mainImage.src = this.src;
        mainImage.alt = mediaAlt;
        mainImage.style.display = 'block';

        // Smooth fade-in animation for image
        requestAnimationFrame(() => {
          mainImage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          mainImage.style.opacity = '1';
          mainImage.style.transform = 'scale(1)';
        });
      }
    };
    newImage.src = mediaSrc;


  }

  // Update active thumbnail with smooth transition
  updateActiveThumbnail();
}

// Handle video end event - automatically move to next media
function handleVideoEnd() {
  console.log('Video ended, moving to next media...');

  // Wait a moment before transitioning
  setTimeout(() => {
    nextImage();
  }, 2000); // 2 second delay before moving to next
}

// Keep the old function for backward compatibility
function updateMainImage() {
  updateMainMedia();
}

function createThumbnails() {
  const container = document.getElementById('thumbnailsContainer');
  if (!container) return;

  container.innerHTML = '';

  galleryImages.forEach((media, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
    thumbnail.setAttribute('role', 'button');

    // Handle different media formats
    const mediaSrc = typeof media === 'string' ? media : media.src;
    const mediaType = typeof media === 'string' ? 'image' : media.type;
    const mediaAlt = typeof media === 'string' ? `Thumbnail ${index + 1}` : media.alt;

    thumbnail.setAttribute('aria-label', `View ${mediaType} ${index + 1}`);
    thumbnail.onclick = () => {
      if (index !== currentImageIndex) {
        const direction = index > currentImageIndex ? 'next' : 'prev';
        selectImage(index, direction);
      }
    };

    if (mediaType === 'video') {
      // Create video thumbnail
      const video = document.createElement('video');
      video.src = mediaSrc;
      video.alt = mediaAlt;
      video.loading = 'lazy';
      video.muted = true;
      video.preload = 'metadata';

      // Add video overlay icon
      const videoOverlay = document.createElement('div');
      videoOverlay.className = 'video-thumbnail-overlay';
      videoOverlay.innerHTML = '<span class="play-icon">▶</span>';

      thumbnail.appendChild(video);
      thumbnail.appendChild(videoOverlay);
      thumbnail.classList.add('video-thumbnail');
    } else {
      // Create image thumbnail
      const img = document.createElement('img');
      img.src = mediaSrc;
      img.alt = mediaAlt;
      img.loading = 'lazy';

      thumbnail.appendChild(img);
    }

    container.appendChild(thumbnail);

    // Add fade-in animation
    requestAnimationFrame(() => {
      thumbnail.style.opacity = '1';
      thumbnail.style.transform = 'translateY(0)';
    });
  });
}

function selectImage(index, direction = 'next') {
  console.log('selectImage called with index:', index, 'direction:', direction, 'currentIndex:', currentImageIndex);

  if (index === currentImageIndex) {
    console.log('Same image selected, skipping');
    return;
  }

  if (!galleryImages || index < 0 || index >= galleryImages.length) {
    console.warn('Invalid image index:', index, 'total images:', galleryImages?.length);
    return;
  }

  const mainImage = document.getElementById('mainGalleryImage');
  const mainVideo = document.getElementById('mainGalleryVideo');

  console.log('Main elements found:', { mainImage: !!mainImage, mainVideo: !!mainVideo });

  // Prepare for transition - handle both image and video
  if (mainImage && mainImage.style.display !== 'none') {
    mainImage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    mainImage.style.opacity = '0';
    mainImage.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';
  }

  if (mainVideo && mainVideo.style.display !== 'none') {
    mainVideo.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    mainVideo.style.opacity = '0';
    mainVideo.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';
    mainVideo.pause();
  }

  currentImageIndex = index;
  console.log('Updated currentImageIndex to:', currentImageIndex);

  // Update media with transition
  setTimeout(() => {
    console.log('Updating main media after transition delay');
    updateMainMedia();
    // Reset transform for the new media
    if (mainImage && mainImage.style.display !== 'none') {
      mainImage.style.transform = 'translateX(0)';
    }
    if (mainVideo && mainVideo.style.display !== 'none') {
      mainVideo.style.transform = 'translateX(0)';
    }
  }, 300);
}

function updateActiveThumbnail() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle('active', index === currentImageIndex);
  });
}

// Enhanced Gallery navigation functions with better error handling
function nextImage() {
  console.log('nextImage called - currentIndex:', currentImageIndex, 'total images:', galleryImages.length);

  if (!galleryImages || galleryImages.length === 0) {
    console.warn('No gallery images available for navigation');
    return;
  }

  if (currentImageIndex < galleryImages.length - 1) {
    console.log('Moving to next image:', currentImageIndex + 1);
    selectImage(currentImageIndex + 1, 'next');
  } else {
    console.log('Looping to first image');
    selectImage(0, 'next'); // Loop to first image
  }
}

function previousImage() {
  console.log('previousImage called - currentIndex:', currentImageIndex, 'total images:', galleryImages.length);

  if (!galleryImages || galleryImages.length === 0) {
    console.warn('No gallery images available for navigation');
    return;
  }

  if (currentImageIndex > 0) {
    console.log('Moving to previous image:', currentImageIndex - 1);
    selectImage(currentImageIndex - 1, 'prev');
  } else {
    console.log('Looping to last image');
    selectImage(galleryImages.length - 1, 'prev'); // Loop to last image
  }
}

// Galaxy Brain Navbar Scroll Effect
function initializeNavbarScrollEffect() {
  const navbar = document.querySelector('.navbar');
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
}

// Galaxy Brain Ambient Audio Experience
function initializeAmbientAudio() {
  const audioToggle = document.getElementById('audioToggle');
  const ambientAudio = document.getElementById('ambientAudio');
  const audioIcon = document.querySelector('.audio-icon');
  let isPlaying = false;

  if (!audioToggle || !ambientAudio) return;

  // Set initial volume
  ambientAudio.volume = 0.3;

  audioToggle.addEventListener('click', function() {
    if (isPlaying) {
      // Fade out and pause
      fadeOut(ambientAudio, 1000);
      audioToggle.classList.remove('playing');
      audioIcon.textContent = '🎵';
      isPlaying = false;
    } else {
      // Play and fade in
      ambientAudio.play().then(() => {
        fadeIn(ambientAudio, 1000);
        audioToggle.classList.add('playing');
        audioIcon.textContent = '🎶';
        isPlaying = true;
      }).catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  });

  // Fade in function
  function fadeIn(audio, duration) {
    audio.volume = 0;
    const targetVolume = 0.3;
    const step = targetVolume / (duration / 50);

    const fadeInInterval = setInterval(() => {
      if (audio.volume < targetVolume) {
        audio.volume = Math.min(audio.volume + step, targetVolume);
      } else {
        clearInterval(fadeInInterval);
      }
    }, 50);
  }

  // Fade out function
  function fadeOut(audio, duration) {
    const startVolume = audio.volume;
    const step = startVolume / (duration / 50);

    const fadeOutInterval = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume = Math.max(audio.volume - step, 0);
      } else {
        audio.pause();
        clearInterval(fadeOutInterval);
      }
    }, 50);
  }
}

// ===== PORTFOLIO FUNCTIONALITY =====
function initializePortfolio() {
  // Portfolio filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter || category === 'all') {
          item.style.display = 'block';
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';

          setTimeout(() => {
            item.style.transition = 'all 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.transition = 'all 0.3s ease';
          item.style.opacity = '0';
          item.style.transform = 'translateY(-20px)';

          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Create contact particles
  createContactParticles();
}




// ===== CONTACT FUNCTIONALITY =====
function initializeContact() {
  // Form handling
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission(this);
    });
  }

  // Form input animations
  const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');

  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });

    // Check if input has value on load
    if (input.value) {
      input.parentElement.classList.add('focused');
    }
  });
}

function handleFormSubmission(form) {
  const submitBtn = form.querySelector('.contact-submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnIcon = submitBtn.querySelector('.btn-icon');

  // Show loading state
  submitBtn.disabled = true;
  btnText.textContent = 'Sending...';
  btnIcon.textContent = '⏳';

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Success state
    btnText.textContent = 'Message Sent!';
    btnIcon.textContent = '✨';
    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

    // Reset form
    form.reset();

    // Reset button after delay
    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      btnIcon.textContent = '💌';
      submitBtn.style.background = '';
    }, 3000);
  }, 2000);
}

function createContactParticles() {
  const particleContainer = document.getElementById('contactParticles');
  if (!particleContainer) return;

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random properties
    const size = Math.random() * 4 + 2;
    const posX = Math.random() * 100;
    const delay = Math.random() * 25;
    const duration = Math.random() * 10 + 25;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particleContainer.appendChild(particle);
  }
}

// ===== ELEGANT SIDE POPUP FUNCTIONALITY =====
function initializeElegantSidePopup() {
  const sidePopup = document.getElementById('elegantSidePopup');
  const dmButton = document.getElementById('elegantDmBtn');

  if (!sidePopup) return;

  let hasShown = false;

  // Show popup after delay and scroll
  setTimeout(() => {
    if (!hasShown) {
      showElegantPopup();
    }
  }, 5000); // 5 second delay for elegance

  // Show on scroll past about section
  window.addEventListener('scroll', () => {
    if (hasShown) return;

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.5) {
        showElegantPopup();
      }
    }
  });

  // DM button click tracking
  if (dmButton) {
    dmButton.addEventListener('click', () => {
      // Track conversion
      console.log('Elegant popup DM clicked');

      // Add success animation
      dmButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
      dmButton.querySelector('.btn-text').textContent = 'Opening...';
      dmButton.querySelector('.btn-icon').textContent = '✨';

      // Close popup after short delay
      setTimeout(() => {
        closeElegantPopup();
      }, 1500);
    });
  }

  // Auto-hide after 15 seconds if no interaction
  setTimeout(() => {
    if (sidePopup.classList.contains('visible')) {
      closeElegantPopup();
    }
  }, 20000);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidePopup.classList.contains('visible')) {
      closeElegantPopup();
    }
  });
}

function showElegantPopup() {
  const sidePopup = document.getElementById('elegantSidePopup');
  if (!sidePopup || sidePopup.classList.contains('visible')) return;

  sidePopup.classList.add('visible');

  // Add gentle entrance animation
  setTimeout(() => {
    const popupContent = sidePopup.querySelector('.popup-content');
    if (popupContent) {
      popupContent.style.animation = 'elegantSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
  }, 100);
}

function closeElegantPopup() {
  const sidePopup = document.getElementById('elegantSidePopup');
  if (!sidePopup) return;

  sidePopup.classList.remove('visible');

  // Reset DM button if it was changed
  setTimeout(() => {
    const dmButton = document.getElementById('elegantDmBtn');
    if (dmButton) {
      dmButton.style.background = '';
      dmButton.querySelector('.btn-text').textContent = 'Message Me';
      dmButton.querySelector('.btn-icon').textContent = '💌';
    }
  }, 800);
}

// Add elegant slide-in animation
const elegantStyle = document.createElement('style');
elegantStyle.textContent = `
  @keyframes elegantSlideIn {
    0% {
      transform: translateX(50px) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(elegantStyle);

// Make closeElegantPopup globally available
window.closeElegantPopup = closeElegantPopup;

// ===== FINAL MOBILE BUTTON INITIALIZATION =====
// Ensure mobile buttons work after everything is loaded
window.addEventListener('load', function() {
  if (isMobile()) {
    console.log('Window loaded - final mobile button setup');

    // Run comprehensive fix one more time
    setTimeout(() => {
      fixAllMobileButtons();
      console.log('Final mobile button fix completed on window load');
    }, 100);
  }
});

// Also run on any dynamic content changes
if (isMobile()) {
  // Observer for dynamically added content
  const observer = new MutationObserver(function(mutations) {
    let shouldRefix = false;
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            const hasInteractiveElements = node.querySelectorAll &&
              node.querySelectorAll('button, .btn, a[href], [onclick]').length > 0;
            if (hasInteractiveElements || node.matches &&
                node.matches('button, .btn, a[href], [onclick]')) {
              shouldRefix = true;
            }
          }
        });
      }
    });

    if (shouldRefix) {
      setTimeout(() => {
        fixAllMobileButtons();
        console.log('Mobile buttons fixed after DOM mutation');
      }, 50);
    }
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// ===== MOBILE OPTIMIZATION FUNCTIONS =====
function initializeMobileOptimizations() {
  if (isMobile()) {
    initializeMobileScrollAnimations();
    initializeTouchInteractions();
    optimizeMobilePerformance();
    initializeMobileGallery();
  } else if (isTablet()) {
    initializeTabletOptimizations();
  }
}

// Mobile scroll-triggered animations using Intersection Observer
function initializeMobileScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add fade-in class to elements that should animate on mobile
  const animateElements = document.querySelectorAll(
    '.service-card, .portfolio-item, .about-content, .contact-form-section, .contact-info-section'
  );

  animateElements.forEach(element => {
    element.classList.add('fade-in-mobile');
    observer.observe(element);
  });
}

// ===== MOBILE MENU FUNCTIONALITY =====
function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const hamburgerLines = document.querySelectorAll('.hamburger-line');

  if (!mobileMenuToggle || !navLinks) return;

  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');

    // Animate hamburger lines
    hamburgerLines.forEach((line, index) => {
      if (navLinks.classList.contains('active')) {
        if (index === 0) line.style.transform = 'rotate(45deg) translate(6px, 6px)';
        if (index === 1) line.style.opacity = '0';
        if (index === 2) line.style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        line.style.transform = 'none';
        line.style.opacity = '1';
      }
    });
  });

  // Close menu when clicking on nav links
  const navLinkItems = navLinks.querySelectorAll('a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      hamburgerLines.forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburgerLines.forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    }
  });
}

// Touch interactions for mobile
function initializeTouchInteractions() {
  // Convert hover effects to tap effects
  const interactiveElements = document.querySelectorAll(
    '.service-card, .portfolio-item, .btn, .nav-links a'
  );

  interactiveElements.forEach(element => {
    // Add touch feedback
    element.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.1s ease';
    });

    element.addEventListener('touchend', function() {
      setTimeout(() => {
        this.style.transform = '';
        this.style.transition = '';
      }, 100);
    });
  });

  // Enhanced swipe support for gallery
  initializeMobileSwipeGallery();
}

// Mobile swipe gallery
function initializeMobileSwipeGallery() {
  const galleryModal = document.getElementById('galleryModal');
  if (!galleryModal) return;

  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  galleryModal.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });

  galleryModal.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    distX = touch.clientX - startX;
    distY = touch.clientY - startY;
  });

  galleryModal.addEventListener('touchend', function() {
    const threshold = 50;

    if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > threshold) {
      if (distX > 0) {
        previousImage(); // Swipe right
      } else {
        nextImage(); // Swipe left
      }
    }

    // Reset
    startX = 0;
    startY = 0;
    distX = 0;
    distY = 0;
  });
}

// Mobile performance optimizations
function optimizeMobilePerformance() {
  // Reduce particle count
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    if (index > 5) {
      particle.style.display = 'none';
    }
  });

  // Disable heavy animations
  const heavyAnimations = document.querySelectorAll(
    '.floating-element, .sparkle, .essence-particle'
  );

  heavyAnimations.forEach(element => {
    element.style.animationDuration = '0.3s';
    element.style.animationIterationCount = '1';
  });

  // Optimize images for mobile
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    img.style.imageRendering = 'optimizeSpeed';
  });

  // Reduce backdrop blur for performance
  const blurElements = document.querySelectorAll(
    '.navbar, .service-card, .contact-form-section'
  );

  blurElements.forEach(element => {
    const currentFilter = getComputedStyle(element).backdropFilter;
    if (currentFilter.includes('blur')) {
      element.style.backdropFilter = 'blur(10px)';
    }
  });
}

// Mobile gallery optimizations
function initializeMobileGallery() {
  // Add tap-to-reveal for portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    let tapped = false;

    item.addEventListener('touchend', function(e) {
      e.preventDefault();

      if (!tapped) {
        // First tap - reveal overlay
        const overlay = this.querySelector('.portfolio-overlay');
        if (overlay) {
          overlay.style.opacity = '1';
          tapped = true;

          // Hide overlay after 3 seconds
          setTimeout(() => {
            overlay.style.opacity = '0';
            tapped = false;
          }, 3000);
        }
      } else {
        // Second tap - open gallery
        const category = this.getAttribute('data-category');
        if (category && category !== 'all') {
          openStyleGallery(category);
        }
      }
    });
  });

  // Optimize gallery modal for mobile
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal) {
    // Add mobile-specific styles
    galleryModal.style.padding = '1rem';

    const modalContent = galleryModal.querySelector('.modal-content');
    if (modalContent) {
      modalContent.style.maxHeight = '90vh';
      modalContent.style.overflow = 'auto';
    }
  }
}

// Tablet optimizations
function initializeTabletOptimizations() {
  // Moderate animations for tablet
  const animatedElements = document.querySelectorAll(
    '.service-card, .portfolio-item, .btn'
  );

  animatedElements.forEach(element => {
    element.style.transitionDuration = '0.4s';
  });

  // Tablet-specific grid layouts are handled by CSS
  console.log('Tablet optimizations applied');
}

// Lazy loading optimization
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
initializeLazyLoading();

// ===== LOGO REFRESH FUNCTIONALITY =====
function initializeLogoRefresh() {
  // Wait for DOM to be fully loaded
  setTimeout(() => {
    const logo = document.querySelector('.logo');
    const logoText = document.querySelector('.logo-text');

    console.log('Logo element found:', logo); // Debug log
    console.log('Logo text element found:', logoText); // Debug log

    if (logo) {
      // Add cursor pointer to indicate it's clickable
      logo.style.cursor = 'pointer';
      logo.style.userSelect = 'none'; // Prevent text selection

      // Add click event listener
      logo.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Logo clicked!'); // Debug log

        // Add a subtle click animation
        logo.style.transform = 'scale(0.95)';
        logo.style.transition = 'transform 0.1s ease';

        setTimeout(() => {
          logo.style.transform = 'scale(1)';

          // Refresh the page and scroll to top
          window.location.reload();
        }, 150);
      });

      // Add hover effect for better UX
      logo.addEventListener('mouseenter', function() {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = 'transform 0.3s ease';
      });

      logo.addEventListener('mouseleave', function() {
        logo.style.transform = 'scale(1)';
        logo.style.transition = 'transform 0.3s ease';
      });

      console.log('Logo refresh functionality initialized successfully!');
    } else {
      console.error('Logo element not found!');
    }

    // Also add the same functionality to logo text if it exists separately
    if (logoText) {
      logoText.style.cursor = 'pointer';
      logoText.style.userSelect = 'none'; // Prevent text selection

      logoText.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Logo text clicked!'); // Debug log

        // Add a subtle click animation
        logoText.style.transform = 'scale(0.95)';
        logoText.style.transition = 'transform 0.1s ease';

        setTimeout(() => {
          logoText.style.transform = 'scale(1)';

          // Refresh the page and scroll to top
          window.location.reload();
        }, 150);
      });

      // Add hover effect for better UX
      logoText.addEventListener('mouseenter', function() {
        logoText.style.transform = 'scale(1.05)';
        logoText.style.transition = 'transform 0.3s ease';
      });

      logoText.addEventListener('mouseleave', function() {
        logoText.style.transform = 'scale(1)';
        logoText.style.transition = 'transform 0.3s ease';
      });
    }
  }, 500); // Wait 500ms to ensure DOM is ready
}

// Alternative approach - Add logo refresh on page load
window.addEventListener('load', function() {
  // Additional backup initialization
  setTimeout(() => {
    const logo = document.querySelector('.logo');
    const logoText = document.querySelector('.logo-text');

    if (logo && !logo.hasAttribute('data-refresh-initialized')) {
      logo.setAttribute('data-refresh-initialized', 'true');
      logo.style.cursor = 'pointer';

      logo.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Logo clicked via backup method!');
        window.location.reload();
      });
    }

    if (logoText && !logoText.hasAttribute('data-refresh-initialized')) {
      logoText.setAttribute('data-refresh-initialized', 'true');
      logoText.style.cursor = 'pointer';

      logoText.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Logo text clicked via backup method!');
        window.location.reload();
      });
    }
  }, 1000);
});

// Initialize Mobile Navigation
function initializeMobileNavigation() {
  console.log('Initializing mobile navigation...');

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  if (mobileMenuToggle && navLinks) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Prevent body scroll when menu is open
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking on nav links
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    console.log('Mobile navigation initialized successfully!');
  } else {
    console.warn('Mobile navigation elements not found!');
  }
}

// ===== BOOKING MODAL FUNCTIONS =====
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// ===== ORGANIC CONE MODAL FUNCTIONS =====
function openOrganicConeModal() {
  const modal = document.getElementById('organicConeModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeOrganicConeModal() {
  const modal = document.getElementById('organicConeModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

// Close modal when clicking outside or pressing Escape
document.addEventListener('DOMContentLoaded', function() {
  // Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    const overlay = bookingModal.querySelector('.booking-overlay');

    if (overlay) {
      overlay.addEventListener('click', closeBookingModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
      }
    });
  }

  // Organic Cone Modal
  const organicModal = document.getElementById('organicConeModal');
  if (organicModal) {
    const overlay = organicModal.querySelector('.organic-overlay');

    if (overlay) {
      overlay.addEventListener('click', closeOrganicConeModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && organicModal.classList.contains('active')) {
        closeOrganicConeModal();
      }
    });
  }
});

// ===== MOBILE NAVIGATION FUNCTIONALITY =====
function initializeMobileNavigation() {
  console.log('Initializing mobile navigation...');

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  console.log('Mobile menu toggle:', mobileMenuToggle);
  console.log('Nav links:', navLinks);
  console.log('Nav links items:', navLinksItems);

  if (!mobileMenuToggle || !navLinks) {
    console.error('Mobile navigation elements not found!');
    console.log('mobileMenuToggle exists:', !!mobileMenuToggle);
    console.log('navLinks exists:', !!navLinks);
    return;
  }

  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('Mobile menu toggle clicked');

    // Toggle active classes
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Toggle body scroll
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking on nav links
  navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  console.log('Mobile navigation initialized successfully');
}

// ===== COMPREHENSIVE MOBILE BUTTON FIX =====
function fixAllMobileButtons() {
  console.log('Fixing ALL mobile buttons comprehensively...');

  // Get all interactive elements
  const allInteractiveElements = document.querySelectorAll(`
    button, .btn, .style-gallery-btn, .gallery-close, .nav-btn,
    a[href], [onclick], .popup-close, .booking-close, .organic-close,
    .mobile-menu-toggle, .filter-btn, .submit-review-btn, .contact-submit-btn,
    .call-now-btn, .whatsapp-btn, .order-now-btn, .elegant-dm-btn,
    .method-link, .reel-button, .delete-review-btn, .logo
  `);

  console.log(`Found ${allInteractiveElements.length} interactive elements to fix`);

  allInteractiveElements.forEach((element, index) => {
    // Skip if already processed
    if (element.dataset.mobileFixed) return;

    // Mark as processed
    element.dataset.mobileFixed = 'true';

    // Apply mobile-friendly styles
    element.style.touchAction = 'manipulation';
    element.style.webkitTapHighlightColor = 'transparent';
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.webkitTouchCallout = 'none';

    // Remove existing event listeners by cloning
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    newElement.dataset.mobileFixed = 'true';

    // Add comprehensive touch handling
    let touchStartTime = 0;
    let touchMoved = false;
    let touchStartX = 0;
    let touchStartY = 0;

    // Touch start
    newElement.addEventListener('touchstart', function(e) {
      touchStartTime = Date.now();
      touchMoved = false;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;

      // Visual feedback
      this.style.opacity = '0.8';
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'all 0.1s ease';

      console.log(`Touch started on element ${index}`);
    }, { passive: false });

    // Touch move
    newElement.addEventListener('touchmove', function(e) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = Math.abs(currentX - touchStartX);
      const deltaY = Math.abs(currentY - touchStartY);

      // If moved more than 10px, consider it a swipe
      if (deltaX > 10 || deltaY > 10) {
        touchMoved = true;
      }
    }, { passive: false });

    // Touch end - the main action handler
    newElement.addEventListener('touchend', function(e) {
      const touchDuration = Date.now() - touchStartTime;

      // Reset visual feedback
      this.style.opacity = '';
      this.style.transform = '';
      this.style.transition = '';

      // Only trigger if it was a quick tap without movement
      if (!touchMoved && touchDuration < 500) {
        e.preventDefault();
        e.stopPropagation();

        console.log(`Executing action for element ${index}`);

        // Execute the appropriate action
        const onclickAttr = this.getAttribute('onclick');
        const href = this.getAttribute('href');
        const id = this.id;

        if (onclickAttr) {
          // Execute onclick function immediately
          try {
            setTimeout(() => {
              eval(onclickAttr);
            }, 0);
          } catch (error) {
            console.error('Error executing onclick:', error);
          }
        } else if (href) {
          // Handle links
          setTimeout(() => {
            if (href.startsWith('tel:') || href.startsWith('mailto:')) {
              window.location.href = href;
            } else if (href.startsWith('https://') || href.startsWith('http://')) {
              window.open(href, this.getAttribute('target') || '_blank');
            } else if (href.startsWith('#')) {
              // Smooth scroll to section
              const targetElement = document.querySelector(href);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              window.location.href = href;
            }
          }, 0);
        } else if (id === 'mobileMenuToggle') {
          // Handle mobile menu toggle
          setTimeout(() => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
              navLinks.classList.toggle('active');
            }
          }, 0);
        }
      }
    }, { passive: false });

    // Touch cancel
    newElement.addEventListener('touchcancel', function() {
      this.style.opacity = '';
      this.style.transform = '';
      this.style.transition = '';
    }, { passive: true });
  });

  console.log('Mobile button fix complete!');
}

// ===== IMMEDIATE MOBILE NAVIGATION SETUP =====
// Set up mobile navigation as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up mobile navigation...');

  // Fix all mobile buttons first
  if (isMobile()) {
    fixAllMobileButtons();

    // Re-run after a delay to catch any dynamically added elements
    setTimeout(() => {
      fixAllMobileButtons();
    }, 500);
  }

  // Wait a bit for all elements to be ready
  setTimeout(() => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    console.log('Mobile toggle element:', mobileMenuToggle);
    console.log('Nav links element:', navLinks);

    if (mobileMenuToggle && navLinks) {
      console.log('Setting up mobile menu click handler...');

      mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Mobile menu clicked!');

        // Toggle classes
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        console.log('Toggle active:', mobileMenuToggle.classList.contains('active'));
        console.log('Nav active:', navLinks.classList.contains('active'));

        // Toggle body scroll
        if (navLinks.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close menu when clicking nav links
      const navLinksItems = navLinks.querySelectorAll('a');
      navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
          console.log('Nav link clicked, closing menu');
          mobileMenuToggle.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      console.log('Mobile navigation setup complete!');
    } else {
      console.error('Mobile navigation elements not found!');
    }
  }, 100);
});

// ===== IMMEDIATE MOBILE BUTTON SETUP =====
function setupImmediateMobileButtons() {
  console.log('Setting up immediate mobile button responses...');

  // Remove any existing click delays
  document.addEventListener('touchstart', function() {}, { passive: true });

  // Set up immediate response for all clickable elements
  const clickableElements = document.querySelectorAll('button, .btn, .style-gallery-btn, .gallery-close, .nav-btn, a[href], [onclick]');

  clickableElements.forEach(element => {
    // Remove default touch behaviors that cause delays
    element.style.touchAction = 'manipulation';
    element.style.webkitTapHighlightColor = 'transparent';
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';

    // Remove any existing event listeners to prevent conflicts
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);

    // Add immediate touch feedback and handling
    let touchStartTime = 0;
    let touchMoved = false;

    newElement.addEventListener('touchstart', function(e) {
      touchStartTime = Date.now();
      touchMoved = false;
      this.style.opacity = '0.8';
      this.style.transform = 'scale(0.98)';
    }, { passive: false });

    newElement.addEventListener('touchmove', function(e) {
      touchMoved = true;
    }, { passive: false });

    newElement.addEventListener('touchend', function(e) {
      const touchDuration = Date.now() - touchStartTime;

      // Reset styling
      this.style.opacity = '';
      this.style.transform = '';

      // Only trigger if it was a quick tap without movement
      if (!touchMoved && touchDuration < 500) {
        e.preventDefault();
        e.stopPropagation();

        // Execute the action immediately
        const onclickAttr = this.getAttribute('onclick');
        const href = this.getAttribute('href');

        if (onclickAttr) {
          // Execute onclick function
          try {
            eval(onclickAttr);
          } catch (error) {
            console.error('Error executing onclick:', error);
          }
        } else if (href) {
          // Handle links
          if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://') || href.startsWith('http://')) {
            window.open(href, this.getAttribute('target') || '_self');
          } else {
            window.location.href = href;
          }
        }
      }
    }, { passive: false });

    newElement.addEventListener('touchcancel', function() {
      this.style.opacity = '';
      this.style.transform = '';
    }, { passive: true });
  });

  console.log('Immediate mobile button setup complete!');
}

// ===== MOBILE GALLERY BUTTON FIX =====
function fixMobileGalleryButtons() {
  console.log('fixMobileGalleryButtons called, isMobile:', isMobile());

  const galleryButtons = document.querySelectorAll('.style-gallery-btn');
  console.log('Found gallery buttons:', galleryButtons.length);

  galleryButtons.forEach((button, index) => {
    console.log(`Button ${index}:`, button);

    if (isMobile()) {
      // AGGRESSIVE MOBILE FIX - Use touchstart for immediate response
      let touchStartTime = 0;
      let touchMoved = false;

      button.addEventListener('touchstart', function(e) {
        touchStartTime = Date.now();
        touchMoved = false;
        this.style.transform = 'scale(0.98)';
        this.style.transition = 'transform 0.1s ease';
        console.log('Touch started on gallery button');
      }, { passive: false });

      button.addEventListener('touchmove', function(e) {
        touchMoved = true;
      }, { passive: false });

      button.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const touchDuration = Date.now() - touchStartTime;

        // Reset styling
        this.style.transform = '';
        this.style.transition = '';

        // Only trigger if it was a quick tap (not a long press or swipe)
        if (!touchMoved && touchDuration < 500) {
          console.log('Gallery button touched - immediate response!');

          // Get the onclick attribute and execute it immediately
          const onclickAttr = this.getAttribute('onclick');
          if (onclickAttr) {
            const match = onclickAttr.match(/openStyleGallery\('([^']+)'\)/);
            if (match) {
              const style = match[1];
              console.log('Opening gallery immediately:', style);
              // Execute immediately without any delay
              setTimeout(() => openStyleGallery(style), 0);
            }
          }
        }
      }, { passive: false });

      button.addEventListener('touchcancel', function() {
        this.style.transform = '';
        this.style.transition = '';
      });

    } else {
      // Desktop - use click events
      button.addEventListener('click', function(e) {
        console.log('Gallery button clicked!');
        e.preventDefault();
        e.stopPropagation();

        const onclickAttr = this.getAttribute('onclick');
        if (onclickAttr) {
          const match = onclickAttr.match(/openStyleGallery\('([^']+)'\)/);
          if (match) {
            const style = match[1];
            console.log('Extracted style:', style);
            openStyleGallery(style);
          }
        }
      });
    }
  });
}

// Make gallery functions globally available
window.openStyleGallery = openStyleGallery;
window.closeStyleGallery = closeStyleGallery;
window.nextImage = nextImage;
window.previousImage = previousImage;

// Test function to verify gallery works
window.testGallery = function() {
  console.log('Testing gallery...');
  openStyleGallery('traditional');
};

// Test navigation functions
window.testNavigation = function() {
  console.log('Testing navigation functions...');
  console.log('nextImage function:', typeof nextImage);
  console.log('previousImage function:', typeof previousImage);
  console.log('galleryImages:', galleryImages);
  console.log('currentImageIndex:', currentImageIndex);

  if (galleryImages && galleryImages.length > 0) {
    console.log('Navigation should work - calling nextImage()');
    nextImage();
  } else {
    console.log('No gallery images loaded - open a gallery first');
  }
};

console.log('Gallery functions loaded and available globally');

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - initializing navigation...');

  // Re-initialize navigation buttons after a short delay to ensure all elements are loaded
  setTimeout(() => {
    initializeStyleGallery();
    console.log('Navigation initialization complete');
  }, 500);
});

// ===== REVIEW SYSTEM FUNCTIONALITY =====
let userReviews = JSON.parse(localStorage.getItem('hennaReviews')) || [];
let totalReviews = 56; // Starting count including existing reviews

function initializeReviewSystem() {
  console.log('Initializing review system...');

  // Initialize rating input
  initializeRatingInput();

  // Initialize review form
  initializeReviewForm();

  // Load existing user reviews
  loadUserReviews();

  // Update review count
  updateReviewCount();
}

function initializeRatingInput() {
  const ratingStars = document.querySelectorAll('.rating-star');
  const selectedRatingInput = document.getElementById('selectedRating');
  const ratingDisplay = document.getElementById('ratingDisplay');

  if (!ratingStars.length) {
    console.log('No rating stars found');
    return;
  }

  console.log('Found', ratingStars.length, 'rating stars');

  let currentRating = 0;

  ratingStars.forEach((star, index) => {
    // Hover effect
    star.addEventListener('mouseenter', () => {
      updateStarDisplay(index + 1);
    });

    // Click to select
    star.addEventListener('click', (e) => {
      e.preventDefault();
      currentRating = index + 1;
      selectedRatingInput.value = currentRating;
      updateStarDisplay(currentRating);
      updateRatingDisplay(currentRating);
      console.log('Rating selected:', currentRating);
    });
  });

  // Reset on mouse leave
  const ratingContainer = document.getElementById('ratingInput');
  if (ratingContainer) {
    ratingContainer.addEventListener('mouseleave', () => {
      updateStarDisplay(currentRating);
    });
  }

  function updateStarDisplay(rating) {
    ratingStars.forEach((star, index) => {
      if (index < rating) {
        star.style.color = '#D4AF37';
        star.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.5)';
        star.style.transform = 'scale(1.05)';
      } else {
        star.style.color = '#ddd';
        star.style.textShadow = 'none';
        star.style.transform = 'scale(1)';
      }
    });
  }

  function updateRatingDisplay(rating) {
    if (ratingDisplay) {
      ratingDisplay.textContent = `${rating} star${rating !== 1 ? 's' : ''} selected`;
      ratingDisplay.style.color = rating > 0 ? '#D4AF37' : '#666';
    }
  }

  // Reset function for form submission
  window.resetStarRating = function() {
    currentRating = 0;
    selectedRatingInput.value = '0';
    updateStarDisplay(0);
    updateRatingDisplay(0);
    if (ratingDisplay) {
      ratingDisplay.textContent = 'Click to rate (0 stars selected)';
      ratingDisplay.style.color = '#666';
    }
  };
}

function highlightStars(count) {
  const ratingStars = document.querySelectorAll('.rating-star');
  ratingStars.forEach((star, index) => {
    if (index < count) {
      star.classList.add('hover-effect');
    } else {
      star.classList.remove('hover-effect');
    }
  });
}

function setActiveStars(count) {
  const ratingStars = document.querySelectorAll('.rating-star');

  // First remove all active and hover classes
  ratingStars.forEach(star => {
    star.classList.remove('active', 'hover-effect');
  });

  // Then add active class to the appropriate stars
  ratingStars.forEach((star, index) => {
    if (index < count) {
      star.classList.add('active');
    }
  });

  // Update the hidden input value
  const selectedRatingInput = document.getElementById('selectedRating');
  if (selectedRatingInput) {
    selectedRatingInput.value = count;
  }

  console.log('Stars set to active:', count);
}

function initializeReviewForm() {
  const reviewForm = document.getElementById('reviewForm');

  if (!reviewForm) return;

  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleReviewSubmission(this);
  });
}

function handleReviewSubmission(form) {
  const formData = new FormData(form);
  const reviewData = {
    name: formData.get('reviewerName'),
    occasion: formData.get('reviewOccasion'),
    rating: parseInt(formData.get('rating')),
    comment: formData.get('reviewComment'),
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    }),
    id: Date.now() // Simple ID generation
  };

  // Validate rating
  if (reviewData.rating === 0) {
    alert('Please select a rating!');
    return;
  }

  // Only accept 5-star reviews as per requirement
  if (reviewData.rating !== 5) {
    alert('Thank you for your feedback! We only display 5-star reviews on our website. Your feedback helps us improve our services.');
    form.reset();
    if (window.resetStarRating) {
      window.resetStarRating();
    }
    return;
  }

  console.log('Submitting review:', reviewData);

  // Add to user reviews
  userReviews.unshift(reviewData); // Add to beginning

  // Save to localStorage
  localStorage.setItem('hennaReviews', JSON.stringify(userReviews));

  // Add to DOM
  addReviewToDOM(reviewData);

  // Update count
  totalReviews++;
  updateReviewCount();

  // Reset form
  form.reset();

  // Reset star rating
  if (window.resetStarRating) {
    window.resetStarRating();
  }

  // Show success message
  showSuccessMessage();
}

function addReviewToDOM(reviewData) {
  const feedbackGrid = document.querySelector('.feedback-grid');
  if (!feedbackGrid) return;

  // Check if we need to remove the last card (keep only 6 reviews visible)
  const existingCards = feedbackGrid.querySelectorAll('.feedback-card');
  if (existingCards.length >= 6) {
    const lastCard = existingCards[existingCards.length - 1];

    // Animate out the last card
    lastCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    lastCard.style.opacity = '0';
    lastCard.style.transform = 'translateY(20px) scale(0.95)';

    // Remove after animation
    setTimeout(() => {
      if (lastCard.parentNode) {
        lastCard.parentNode.removeChild(lastCard);
      }
    }, 400);
  }

  // Create new review card
  const reviewCard = document.createElement('div');
  reviewCard.className = 'feedback-card user-review';
  reviewCard.style.opacity = '0';
  reviewCard.style.transform = 'translateY(-20px)';

  // Get first letter for avatar
  const avatarLetter = reviewData.name.charAt(0).toUpperCase();

  reviewCard.innerHTML = `
    <div class="feedback-header-card">
      <div class="client-info">
        <div class="client-avatar">
          <span class="avatar-initial">${avatarLetter}</span>
        </div>
        <div class="client-details">
          <h4 class="client-name">${reviewData.name}</h4>
          <p class="client-occasion">${reviewData.occasion}</p>
        </div>
      </div>
      <div class="rating">
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
      </div>
    </div>
    <div class="feedback-content">
      <p class="feedback-text">
        "${reviewData.comment}"
      </p>
    </div>
    <div class="feedback-date">${reviewData.date}</div>
  `;

  // Insert at the beginning of the grid
  feedbackGrid.insertBefore(reviewCard, feedbackGrid.firstChild);

  // Animate in the new card
  setTimeout(() => {
    reviewCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    reviewCard.style.opacity = '1';
    reviewCard.style.transform = 'translateY(0)';
  }, 100);
}

function loadUserReviews() {
  // Only load the most recent user reviews that can fit
  const feedbackGrid = document.querySelector('.feedback-grid');
  if (!feedbackGrid) return;

  const existingCards = feedbackGrid.querySelectorAll('.feedback-card');
  const availableSlots = Math.max(0, 6 - existingCards.length);

  // Load only the most recent reviews that fit
  const reviewsToLoad = userReviews.slice(0, availableSlots);

  reviewsToLoad.forEach(review => {
    addReviewToDOM(review);
  });
}

function updateReviewCount() {
  const reviewCountElement = document.getElementById('reviewCount');
  if (reviewCountElement) {
    const count = totalReviews + userReviews.length;
    reviewCountElement.textContent = `Based on ${count}+ happy clients`;
  }
}

function showSuccessMessage() {
  // Create success notification
  const notification = document.createElement('div');
  notification.className = 'review-success-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">⭐</span>
      <span class="notification-text">Thank you for your 5-star review!</span>
    </div>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, var(--gold), var(--dark-gold));
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 400);
  }, 3000);
}

// Add CSS for notification
const notificationStyles = `
.notification-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notification-icon {
  font-size: 1.2rem;
}

.notification-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.user-review {
  border-left: 4px solid var(--gold);
}
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

