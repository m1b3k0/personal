document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress-inner');
    skillBars.forEach(bar => {
        const targetWidth = bar.parentElement.getAttribute('data-progress');
        gsap.to(bar, {
            width: targetWidth,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
    });

    // Animate timeline
    const timelineLine = document.querySelector('.timeline-line');
    const timelineDots = document.querySelectorAll('.timeline-dot');

    gsap.from(timelineLine, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 2,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });

    timelineDots.forEach((dot, index) => {
        gsap.from(dot, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.1 + 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.timeline-container',
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
    });

    // Tooltip functionality for timeline
    if (window.innerWidth > 768) {
        timelineDots.forEach(dot => {
            const tooltip = dot.querySelector('.tooltip');
            
            dot.addEventListener('mouseenter', () => {
                gsap.to(tooltip, { opacity: 1, y: -10, duration: 0.3 });
            });
            
            dot.addEventListener('mouseleave', () => {
                gsap.to(tooltip, { opacity: 0, y: 0, duration: 0.3 });
            });
        });
    }

    // Animate work history items
    gsap.from('.timeline-item', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.work-history',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });

    // Animate certifications
    gsap.from('.certifications li', {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.certifications',
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
        }
    });
});