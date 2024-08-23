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