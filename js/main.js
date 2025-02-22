// DOM Elements
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const navbar = document.querySelector('.navbar');
const moonIcon = document.querySelector('.moon');
const sunIcon = document.querySelector('.sun');
const contactForm = document.getElementById('contactForm');

// Theme Management
const initializeTheme = () => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
};

const toggleTheme = () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    // Toggle icons
    moonIcon.style.display = isDark ? 'none' : 'block';
    sunIcon.style.display = isDark ? 'block' : 'none';
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Navbar Scroll Effect
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Smooth Scrolling for Navigation
const handleNavClick = (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};

// Intersection Observer for Animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Contact Form Handling
const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate form submission (replace with your actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        showFormMessage('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        // Show error message
        showFormMessage('Failed to send message. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
};

const showFormMessage = (message, type) => {
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    contactForm.appendChild(messageElement);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
};

// Mobile Menu
const setupMobileMenu = () => {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;

    const navLinks = document.querySelector('.nav-links');
    const navContent = document.querySelector('.nav-content');

    // Only add mobile menu button if it doesn't exist
    if (!document.querySelector('.mobile-menu-btn') && window.innerWidth < 768) {
        navContent.appendChild(mobileMenuBtn);
    }

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
};

// Project Card Hover Effect
const setupProjectHover = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.project-overlay');
            overlay.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.project-overlay');
            overlay.style.opacity = '0';
        });
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    observeElements();
    setupMobileMenu();
    setupProjectHover();

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleNavClick);
    contactForm.addEventListener('submit', handleFormSubmit);
    window.addEventListener('resize', setupMobileMenu);

    // CV Download tracking
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', (e) => {
            // You can add analytics tracking here
            console.log('CV Downloaded');
            
            // Optional: Show a success message
            showDownloadMessage();
        });
    }
});

// Function to show download message
const showDownloadMessage = () => {
    const message = document.createElement('div');
    message.className = 'download-message';
    message.textContent = 'Thank you for downloading my CV!';
    document.body.appendChild(message);

    // Add show class for animation
    setTimeout(() => message.classList.add('show'), 100);

    // Remove message after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
};
