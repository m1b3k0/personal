function getNumberFromLetter(letter) {
    return letter.toLowerCase().charCodeAt(0) - 96;
}

function animateNumber(element, finalNumber) {
    let current = 0;
    const duration = 1000; // 1 second
    const stepTime = 20; // 20ms per step
    const steps = Math.floor(duration / stepTime);
    const increment = Math.ceil(finalNumber / steps); // Calculate the number to increment by

    let count = 0; // Keep track of how many steps we've taken

    const timer = setInterval(() => {
        current = (current + 1) % 10; // Loop from 0 to 9
        element.textContent = current;

        count++;
        if (count >= finalNumber) {
            clearInterval(timer);
            element.textContent = finalNumber % 10; // Ensure the final number is set correctly
        }
    }, stepTime);
}



function initDesktopNavigation() {
    document.querySelectorAll('.desktop-menu .menu-item a').forEach(item => {
        const text = item.querySelector('.text');
        const number = item.querySelector('.number');

        item.addEventListener('mouseenter', () => {
            text.style.opacity = '0';
            number.style.opacity = '1';

            const finalNumbers = text.textContent.split('').map(getNumberFromLetter);
            number.innerHTML = ''; // Clear previous content
            finalNumbers.forEach((num, index) => {
                const span = document.createElement('span');
                number.appendChild(span);
                setTimeout(() => animateNumber(span, num), index * 100);
            });
        });

        item.addEventListener('mouseleave', () => {
            text.style.opacity = '1';
            number.style.opacity = '0';
            number.innerHTML = ''; // Clear numbers on mouse leave
        });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDesktopNavigation);



// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // // Navigation functionality
    initDesktopNavigation();

     // Page-specific initializations
     if (document.querySelector('.about-content')) {
        initAboutPage();
    }
    if (document.querySelector('.projects-page')) {
        initProjectsPage();
    }

    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });

});

