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

// Language Management
const translations = {
    en: {
        // Navigation
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        
        // Hero Section
        heroTitle: "Frontend Developer",
        heroDescription: "Passionate about creating user-friendly web experiences with modern technologies. Currently expanding into full-stack development.",
        downloadCV: "Download CV",
        
        // About Section
        aboutTitle: "About Me",
        aboutP1: "Hey there! I'm a passionate <strong>Frontend Developer</strong> with <strong>1 year of intensive experience</strong> through the <strong>ALX program</strong>, crafting sleek, responsive, and user-friendly web interfaces. My love for clean code and pixel-perfect designs drives me to create web experiences that are both intuitive and engaging.",
        aboutP2: "Beyond frontend, I'm on a mission to <strong>expand into backend development</strong>, aiming to become a well-rounded <strong>full-stack developer</strong>. I thrive on learning new technologies and constantly pushing the boundaries of my skills.",
        aboutP3: "When I'm not coding, you'll probably find me <strong>immersed in a gaming session or vibing to some good music</strong>—both of which fuel my creativity and problem-solving mindset. Oh, and did I mention? I'm also <strong>A2-certified in German</strong>, because why stop at just one language?",
        aboutP4: "Based in <strong>Juja, Kenya</strong>, I'm actively looking for opportunities to collaborate on <strong>innovative web projects</strong> and grow in the ever-evolving world of tech. If you're working on something exciting, let's connect and build something amazing together! 🚀",
        currentFocus: "Current Focus",
        focus1: "Frontend Development with React",
        focus2: "Backend Development through FreeCodeCamp",
        focus3: "Building responsive and accessible web applications",
        focus4: "Expanding my project portfolio",
        
        // Projects Section
        projectsTitle: "Projects",
        projectWeather: "Weather Dashboard",
        projectWeatherDesc: "A responsive weather application built with modern frontend technologies.",
        liveDemo: "Live Demo",
        code: "Code",
        
        // Skills Section
        skillsTitle: "Skills",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        
        // Contact Section
        contactTitle: "Get In Touch",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendMessage: "Send Message",
        messageSent: "Message sent successfully!",
        messageFailed: "Failed to send message. Please try again.",
        cvDownloaded: "Thank you for downloading my CV!"
    },
    de: {
        // Navigation
        navAbout: "Über mich",
        navProjects: "Projekte",
        navSkills: "Fähigkeiten",
        navContact: "Kontakt",
        
        // Hero Section
        heroTitle: "Frontend-Entwickler",
        heroDescription: "Leidenschaftlich daran interessiert, benutzerfreundliche Web-Erlebnisse mit modernen Technologien zu schaffen. Derzeit Erweiterung zum Full-Stack-Entwickler.",
        downloadCV: "Lebenslauf herunterladen",
        
        // About Section
        aboutTitle: "Über mich",
        aboutP1: "Hallo! Ich bin ein leidenschaftlicher <strong>Frontend-Entwickler</strong> mit <strong>1 Jahr intensiver Erfahrung</strong> durch das <strong>ALX-Programm</strong>, der schlanke, responsive und benutzerfreundliche Weboberflächen erstellt. Meine Liebe zu sauberem Code und pixelgenauen Designs treibt mich an, Weberlebnisse zu schaffen, die sowohl intuitiv als auch ansprechend sind.",
        aboutP2: "Über das Frontend hinaus bin ich auf einer Mission, <strong>mich in die Backend-Entwicklung zu erweitern</strong>, mit dem Ziel, ein umfassender <strong>Full-Stack-Entwickler</strong> zu werden. Ich gedeihe beim Erlernen neuer Technologien und erweitere ständig die Grenzen meiner Fähigkeiten.",
        aboutP3: "Wenn ich nicht codiere, findet man mich wahrscheinlich <strong>in einer Gaming-Session oder beim Hören guter Musik</strong> - beides fördert meine Kreativität und problemlösende Denkweise. Ach, und habe ich erwähnt? Ich bin auch <strong>A2-zertifiziert in Deutsch</strong>, denn warum bei nur einer Sprache aufhören?",
        aboutP4: "Ich wohne in <strong>Juja, Kenia</strong> und suche aktiv nach Möglichkeiten, an <strong>innovativen Webprojekten</strong> mitzuarbeiten und in der sich ständig weiterentwickelnden Welt der Technologie zu wachsen. Wenn Sie an etwas Spannendem arbeiten, lassen Sie uns in Kontakt treten und gemeinsam etwas Erstaunliches aufbauen! 🚀",
        currentFocus: "Aktueller Fokus",
        focus1: "Frontend-Entwicklung mit React",
        focus2: "Backend-Entwicklung durch FreeCodeCamp",
        focus3: "Entwicklung responsiver und zugänglicher Webanwendungen",
        focus4: "Erweiterung meines Projektportfolios",
        
        // Projects Section
        projectsTitle: "Projekte",
        projectWeather: "Wetter-Dashboard",
        projectWeatherDesc: "Eine responsive Wetteranwendung, entwickelt mit modernen Frontend-Technologien.",
        liveDemo: "Live-Demo",
        code: "Code",
        
        // Skills Section
        skillsTitle: "Fähigkeiten",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        
        // Contact Section
        contactTitle: "Kontakt aufnehmen",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        messageLabel: "Nachricht",
        sendMessage: "Nachricht senden",
        messageSent: "Nachricht erfolgreich gesendet!",
        messageFailed: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        cvDownloaded: "Vielen Dank für das Herunterladen meines Lebenslaufs!"
    }
};

// Initialize language
let currentLang = localStorage.getItem('language') || 'en';
const langToggle = document.querySelector('.lang-toggle');
const langText = document.querySelector('.lang-text');

const initializeLanguage = () => {
    // Set initial language based on saved preference
    if (currentLang === 'de') {
        langText.textContent = 'DE';
        translatePage('de');
    } else {
        langText.textContent = 'EN';
        translatePage('en');
    }
};

const toggleLanguage = () => {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    langText.textContent = currentLang.toUpperCase();
    translatePage(currentLang);
    localStorage.setItem('language', currentLang);
};

const translatePage = (lang) => {
    // Navigation
    document.querySelector('a[href="#about"]').textContent = translations[lang].navAbout;
    document.querySelector('a[href="#projects"]').textContent = translations[lang].navProjects;
    document.querySelector('a[href="#skills"]').textContent = translations[lang].navSkills;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].navContact;
    
    // Hero Section
    document.querySelector('.hero h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero p').textContent = translations[lang].heroDescription;
    document.querySelector('.cv-button').innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        ${translations[lang].downloadCV}
    `;
    
    // About Section
    document.querySelector('#about h2').textContent = translations[lang].aboutTitle;
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    aboutParagraphs[0].innerHTML = translations[lang].aboutP1;
    aboutParagraphs[1].innerHTML = translations[lang].aboutP2;
    aboutParagraphs[2].innerHTML = translations[lang].aboutP3;
    aboutParagraphs[3].innerHTML = translations[lang].aboutP4;
    
    document.querySelector('.about-focus h3').textContent = translations[lang].currentFocus;
    const focusItems = document.querySelectorAll('.about-focus li');
    focusItems[0].textContent = translations[lang].focus1;
    focusItems[1].textContent = translations[lang].focus2;
    focusItems[2].textContent = translations[lang].focus3;
    focusItems[3].textContent = translations[lang].focus4;
    
    // Projects Section
    document.querySelector('#projects h2').textContent = translations[lang].projectsTitle;
    document.querySelector('.project-overlay h3').textContent = translations[lang].projectWeather;
    document.querySelector('.project-overlay p').textContent = translations[lang].projectWeatherDesc;
    
    const projectLinks = document.querySelectorAll('.project-links a');
    projectLinks[0].textContent = translations[lang].liveDemo;
    projectLinks[1].textContent = translations[lang].code;
    
    // Skills Section
    document.querySelector('#skills h2').textContent = translations[lang].skillsTitle;
    document.querySelectorAll('.skill-category h3')[0].textContent = translations[lang].frontendTitle;
    document.querySelectorAll('.skill-category h3')[1].textContent = translations[lang].backendTitle;
    
    // Contact Section
    document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
    document.querySelector('label[for="name"]').textContent = translations[lang].nameLabel;
    document.querySelector('label[for="email"]').textContent = translations[lang].emailLabel;
    document.querySelector('label[for="message"]').textContent = translations[lang].messageLabel;
    document.querySelector('.submit-btn').textContent = translations[lang].sendMessage;
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

const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const formData = new FormData(contactForm);
        
        // Replace 'YOUR_FORM_ID' with the actual ID from Formspree
        const response = await fetch('https://formspree.io/f/mqapdogl', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showFormMessage('Message sent successfully!', 'success');
            contactForm.reset();
        } else {
            const data = await response.json();
            throw new Error(data.error || 'Form submission failed');
        }
    } catch (error) {
        console.error('Form error:', error);
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
    
    // Initialize language
    initializeLanguage();

    // Add language toggle event listener
    langToggle.addEventListener('click', toggleLanguage);

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
