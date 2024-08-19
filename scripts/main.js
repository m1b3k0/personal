document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const projectsDropdown = document.querySelector('.dropdown');
    const dropdownContent = projectsDropdown.querySelector('.dropdown-content');

    function isMobile() {
        return window.innerWidth <= 768;
    }

    if (isMobile()) {
        const timelineDots = document.querySelectorAll('.timeline-dot');
        timelineDots.forEach(dot => {
            dot.addEventListener('touchstart', function(e) {
                e.preventDefault();
                const tooltip = this.querySelector('.tooltip');
                tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
    
    

    // Burger menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        
        // Animate links
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

    // Close dropdown when clicking outside or on other menu items
    document.addEventListener('click', (e) => {
        if (isMobile() && !projectsDropdown.contains(e.target) && projectsDropdown.classList.contains('active')) {
            toggleDropdown(projectsDropdown);
        }
    });

    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown')) {
            link.addEventListener('click', () => {
                if (isMobile() && projectsDropdown.classList.contains('active')) {
                    toggleDropdown(projectsDropdown);
                }
            });
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

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            // Reset styles for desktop view
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

// Keyframe animation for nav links
const navLinkFade = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}`;

// Append the keyframe animation to the document
const style = document.createElement('style');
style.textContent = navLinkFade;
document.head.appendChild(style);