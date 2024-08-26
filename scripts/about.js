function initAboutPage() {
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
    animateTimeline();

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
}

function animateTimeline() {
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
}

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const additionalContent = document.getElementById('additional-content');

    function adjustAdditionalContent() {
        if (additionalContent.classList.contains('visible')) {
            additionalContent.style.height = 'auto';
            const height = additionalContent.scrollHeight;
            additionalContent.style.height = `${height}px`;
        }
    }

    viewMoreBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        additionalContent.classList.toggle('visible');

        if (this.classList.contains('active')) {
            this.innerHTML = 'View Less <span class="arrow-icon">&#9660;</span>';
            
            additionalContent.style.height = 'auto';
            const height = additionalContent.scrollHeight;
            additionalContent.style.height = '0';
            
            // Force a reflow
            additionalContent.offsetHeight;

            gsap.to(additionalContent, {
                duration: 0.5,
                height: height,
                opacity: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    additionalContent.style.height = 'auto';
                    const scrollTarget = additionalContent.getBoundingClientRect().top + window.pageYOffset - 100;
                    gsap.to(window, {
                        duration: 0.5, 
                        scrollTo: {
                            y: scrollTarget,
                            autoKill: false
                        },
                        ease: "power2.inOut"
                    });
                }
            });
        } else {
            this.innerHTML = 'View More <span class="arrow-icon">&#9650;</span>';
            
            const height = additionalContent.scrollHeight;
            additionalContent.style.height = `${height}px`;
            
            // Force a reflow
            additionalContent.offsetHeight;

            gsap.to(additionalContent, {
                duration: 0.5,
                height: 0,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    additionalContent.style.height = '';
                }
            });
        }
    });

    // Add resize event listener
    window.addEventListener('resize', adjustAdditionalContent);
});