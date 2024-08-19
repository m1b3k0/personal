

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    initMap();
});

window.addEventListener('load', init);

// Resize handler for noise canvas
window.addEventListener('resize', () => {
    noiseCanvas.width = window.innerWidth;
    noiseCanvas.height = window.innerHeight;
});

function init() {
    noiseCanvas.width = window.innerWidth;
    noiseCanvas.height = window.innerHeight;
    animateNoise();
    window.addEventListener('mousemove', updateGradient);
   
    setInterval(glitchEffect, 3000);
   
   
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




function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    console.log('Form submitted:', formValues);
    showFormSuccessMessage();
    e.target.reset();
}

function showFormSuccessMessage() {
    const messageElement = document.createElement('div');
    messageElement.className = 'form-success-message';
    messageElement.textContent = 'Thank you for your message! I will get back to you soon.';

    const formContainer = document.querySelector('.contact-form-container');
    if (formContainer) {
        formContainer.appendChild(messageElement);
        setTimeout(() => messageElement.remove(), 5000);
    }
}

function initMap() {
    const linz = { lat: 48.3069, lng: 14.2858 };
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 13,
            center: linz,
            styles: [
                {elementType: "geometry", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{color: "#263c3f"}]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#6b9a76"}]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{color: "#38414e"}]
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#212a37"}]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#9ca5b3"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{color: "#746855"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#1f2835"}]
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#f3d19c"}]
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{color: "#2f3948"}]
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}]
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{color: "#17263c"}]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#515c6d"}]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{color: "#17263c"}]
                }
            ]
        });

        new google.maps.Marker({
            position: linz,
            map: map,
            title: 'Alex Nightshade'
        });
    }
}