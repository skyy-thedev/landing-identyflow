/* ========================================
   IDENTYFLOW - LANDING PAGE SCRIPTS
   Sistema Inteligente de Gestão Educacional
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLucideIcons();
    initMobileNav();
    initStickyHeader();
    initSmoothScroll();
    initRevealAnimations();
    initFaqAccordion();
    initDemoTabs();
    initBackToTop();
    initFormHandling();
});

/* ========================================
   LUCIDE ICONS INITIALIZATION
   ======================================== */
function initLucideIcons() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/* ========================================
   MOBILE NAVIGATION
   ======================================== */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navButtons = document.querySelector('.nav-buttons');
    const header = document.getElementById('header');
    
    if (!navToggle || !navMenu) return;
    
    const navLinks = navMenu.querySelectorAll('.nav-link');
    const navButtonLinks = navButtons ? navButtons.querySelectorAll('.btn') : [];
    
    function closeMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navButtons) navButtons.classList.remove('mobile-visible');
        document.body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
    }
    
    function openMenu() {
        navToggle.classList.add('active');
        navMenu.classList.add('active');
        if (navButtons) navButtons.classList.add('mobile-visible');
        document.body.style.overflow = 'hidden';
        navToggle.setAttribute('aria-expanded', 'true');
    }
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking nav button links
    navButtonLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target) &&
            !(navButtons && navButtons.contains(e.target))) {
            closeMenu();
        }
    });
    
    // Close menu on window resize (when switching to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

/* ========================================
   STICKY HEADER
   ======================================== */
function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        // Add scrolled class for styling
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
    
    // Initial check
    updateHeader();
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = document.getElementById('header')?.offsetHeight || 72;
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, '', href);
            }
        });
    });
}

/* ========================================
   REVEAL ANIMATIONS ON SCROLL
   ======================================== */
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (!reveals.length) return;
    
    // Check if prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        reveals.forEach(el => el.classList.add('active'));
        return;
    }
    
    // Intersection Observer for reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    reveals.forEach(el => observer.observe(el));
}

/* ========================================
   FAQ ACCORDION
   ======================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });
        
        // Keyboard accessibility
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

/* ========================================
   DEMO TABS/CAROUSEL
   ======================================== */
function initDemoTabs() {
    const demoNav = document.querySelectorAll('.demo-nav-btn');
    const demoSlides = document.querySelectorAll('.demo-slide');
    
    if (!demoNav.length || !demoSlides.length) return;
    
    demoNav.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetDemo = this.dataset.demo;
            
            // Update active states
            demoNav.forEach(navBtn => navBtn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target slide
            demoSlides.forEach(slide => {
                slide.classList.remove('active');
                if (slide.id === `demo-${targetDemo}`) {
                    slide.classList.add('active');
                }
            });
        });
    });
    
    // Auto-rotate demo slides every 5 seconds (optional)
    let autoRotate = null;
    const demoSection = document.getElementById('demo');
    
    function startAutoRotate() {
        let currentIndex = 0;
        const demoIds = ['dashboard', 'mobile', 'admin'];
        
        autoRotate = setInterval(() => {
            currentIndex = (currentIndex + 1) % demoIds.length;
            const targetBtn = document.querySelector(`[data-demo="${demoIds[currentIndex]}"]`);
            if (targetBtn) targetBtn.click();
        }, 6000);
    }
    
    function stopAutoRotate() {
        if (autoRotate) {
            clearInterval(autoRotate);
            autoRotate = null;
        }
    }
    
    // Start auto-rotate when section is in view
    if (demoSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutoRotate();
                } else {
                    stopAutoRotate();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(demoSection);
    }
    
    // Stop auto-rotate on manual interaction
    demoNav.forEach(btn => {
        btn.addEventListener('click', stopAutoRotate);
    });
}

/* ========================================
   BACK TO TOP BUTTON
   ======================================== */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    let ticking = false;
    
    function updateButton() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateButton);
            ticking = true;
        }
    }, { passive: true });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initial check
    updateButton();
}

/* ========================================
   FORM HANDLING (For future implementation)
   ======================================== */
function initFormHandling() {
    // Placeholder for future contact/signup form handling
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send data to your server
            console.log('Form submitted:', data);
            
            // Show success message (implement as needed)
            // showNotification('Mensagem enviada com sucesso!', 'success');
        });
    });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Debounce function for performance optimization
function debounce(func, wait = 100) {
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

// Throttle function for scroll events
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Notification system (for future use)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/* ========================================
   ANALYTICS TRACKING (Optional)
   ======================================== */
function trackEvent(category, action, label = null) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Console log for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Analytics Event:', { category, action, label });
    }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-white').forEach(btn => {
    btn.addEventListener('click', function() {
        const label = this.textContent.trim();
        trackEvent('CTA', 'click', label);
    });
});

// Track pricing card interactions
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', function() {
        const planName = this.querySelector('.pricing-name')?.textContent;
        trackEvent('Pricing', 'interaction', planName);
    });
});

/* ========================================
   ROI CALCULATOR ANIMATION
   ======================================== */
function initRoiAnimation() {
    const roiSection = document.getElementById('roi');
    const roiBars = document.querySelectorAll('.roi-bar-fill');
    
    if (!roiSection || !roiBars.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                roiBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.transition = 'height 1s ease-out';
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(roiSection);
}

// Initialize ROI animation
document.addEventListener('DOMContentLoaded', initRoiAnimation);

/* ========================================
   LAZY LOADING IMAGES
   ======================================== */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        return;
    }
    
    // Fallback for browsers without native support
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

/* ========================================
   PRELOADER (Optional)
   ======================================== */
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    }
}

// Hide preloader when page is fully loaded
window.addEventListener('load', hidePreloader);

/* ========================================
   SCROLL PROGRESS INDICATOR (Optional)
   ======================================== */
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', throttle(() => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    }, 50), { passive: true });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', initScrollProgress);

/* ========================================
   CONSOLE BRANDING
   ======================================== */
console.log(`
%c IdentyFlow %c Sistema Inteligente de Gestão Educacional 

  🎓 Transformando a educação profissional
  🌐 www.identyflow.com.br
  
`, 
'background: linear-gradient(135deg, #4A90E2, #7B5DFA); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 5px 0 0 5px;',
'background: #1F2A48; color: white; padding: 10px 20px; font-size: 14px; border-radius: 0 5px 5px 0;'
);
