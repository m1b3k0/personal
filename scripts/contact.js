document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const projectsDropdown = document.querySelector('.dropdown');
    const dropdownContent = projectsDropdown.querySelector('.dropdown-content');

    function isMobile() {
        return window.innerWidth <= 768;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
  
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {duration: 0.1, x: e.clientX, y: e.clientY});
        gsap.to(cursorFollower, {duration: 0.3, x: e.clientX, y: e.clientY});
    });

    // Burger menu toggle
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

    // Projects dropdown functionality
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

    // Enable click on dropdown links in mobile view
    const dropdownLinks = dropdownContent.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (isMobile()) {
                e.stopPropagation(); // Prevent the dropdown from toggling
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            projectsDropdown.classList.remove('active');
            dropdownContent.style = null;
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Noise effect
const noiseCanvas = document.createElement('canvas');
noiseCanvas.id = 'noise-canvas';
document.body.prepend(noiseCanvas);
const noiseCtx = noiseCanvas.getContext('2d');

function generateNoise() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const imageData = noiseCtx.createImageData(width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = Math.random() * 50; // More varied transparency
    }
    
    noiseCtx.putImageData(imageData, 0, 0);
}

function animateNoise() {
    generateNoise();
    requestAnimationFrame(animateNoise);
}

// Dynamic gradient background
const gradientBg = document.createElement('div');
gradientBg.id = 'gradient-background';
document.body.prepend(gradientBg);

function updateGradient(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
   
    gradientBg.style.background = `
        radial-gradient(
            circle at ${x * 100}% ${y * 100}%,
            rgba(255, 62, 62, 0.2) 0%,
            rgba(255, 62, 62, 0.1) 25%,
            rgba(255, 62, 62, 0) 50%
        )
    `;
}

// Glitch effect for title
const originalTitle = "Get in Touch";
function glitchEffect() {
    const title = document.querySelector('.glitch-title');
    title.setAttribute('data-text', originalTitle);
    let glitchedText = '';
    for (let i = 0; i < originalTitle.length; i++) {
        if (Math.random() < 0.1) {
            glitchedText += String.fromCharCode(originalTitle.charCodeAt(i) + Math.floor(Math.random() * 10) - 5);
        } else {
            glitchedText += originalTitle[i];
        }
    }
    title.textContent = glitchedText;
    
    // Revert to original text after a short delay
    setTimeout(() => {
        title.textContent = originalTitle;
    }, 100);
}

// Form animations
const form = document.querySelector('.contact-form');
const submitBtn = form.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending...';
   
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Sent!';
        // Show success message or handle response
        setTimeout(() => {
            submitBtn.textContent = 'Send';
        }, 2000);
    }, 2000);
});

// Magnetic button effect
function magneticButton(el) {
    el.addEventListener('mousemove', (e) => {
        const position = el.getBoundingClientRect();
        const x = (e.clientX - position.left - position.width / 2) * 0.35;
        const y = (e.clientY - position.top - position.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
    });
}

// Initialize
function init() {
    noiseCanvas.width = window.innerWidth;
    noiseCanvas.height = window.innerHeight;
    animateNoise();
    window.addEventListener('mousemove', updateGradient);
   
    setInterval(glitchEffect, 3000);
    magneticButton(submitBtn);
   
    // Animate content on load
    const hero = document.querySelector('.hero');
    const contactContent = document.querySelector('.contact-content');
    hero.style.opacity = '0';
    contactContent.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease';
        hero.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        contactContent.style.transition = 'opacity 1s ease';
        contactContent.style.opacity = '1';
    }, 600);

    // Set initial data-text attribute
    document.querySelector('.glitch-title').setAttribute('data-text', originalTitle);
}

window.addEventListener('load', init);

// Resize handler for noise canvas
window.addEventListener('resize', () => {
    noiseCanvas.width = window.innerWidth;
    noiseCanvas.height = window.innerHeight;
});
