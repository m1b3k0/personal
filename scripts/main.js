// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Navigation functionality
    initNavigation();

    // Custom cursor
    initCustomCursor();

    // Page-specific initializations
    if (document.querySelector('.about-content')) {
        initAboutPage();
    }
    if (document.querySelector('.projects-page')) {
        initProjectsPage();
    }
    if (document.querySelector('.contact-page')) {
        initContactPage();
    }
});

function initContactPage() {
    console.log('Contact page initialized');
    // Add any contact page specific functionality here
    
    // Ensure the nav menu is visible
    const nav = document.querySelector('nav ul');
    if (nav) {
        nav.style.display = 'flex';
    }
}

// Navigation functionality
function initNavigation() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const projectsDropdown = document.querySelector('.dropdown');

    // Burger menu toggle
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Projects dropdown functionality
    if (projectsDropdown) {
        projectsDropdown.addEventListener('click', (e) => {
            if (isMobile()) {
                e.preventDefault();
                toggleDropdown(projectsDropdown);
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (isMobile() && !projectsDropdown.contains(e.target) && projectsDropdown.classList.contains('active')) {
                toggleDropdown(projectsDropdown);
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            if (nav) nav.classList.remove('nav-active');
            if (burger) burger.classList.remove('toggle');
            if (projectsDropdown) projectsDropdown.classList.remove('active');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
}

// Custom cursor functionality
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
  
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {duration: 0.1, x: e.clientX, y: e.clientY});
        gsap.to(cursorFollower, {duration: 0.3, x: e.clientX, y: e.clientY});
    });
}

// Helper functions
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleDropdown(dropdown) {
    dropdown.classList.toggle('active');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    if (dropdown.classList.contains('active')) {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.opacity = '1';
            dropdownContent.style.transform = 'translateY(0)';
        }, 10);
    } else {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 300);
    }
}