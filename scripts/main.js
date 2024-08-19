document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const projectsDropdown = document.querySelector('.dropdown');
    const dropdownContent = projectsDropdown.querySelector('.dropdown-content');

    function isMobile() {
        return window.innerWidth <= 768;
    }

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