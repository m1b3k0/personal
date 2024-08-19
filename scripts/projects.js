document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more');
    let projectsLoaded = 6; // Assuming 6 projects are initially loaded

    // Animate project cards on scroll
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            gsap.to('.project-card', { opacity: 0, y: 20, duration: 0.3, stagger: 0.05, onComplete: () => {
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });

                gsap.to('.project-card:not([style*="display: none"])', { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 });
            }});
        });
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
        const hiddenProjects = document.querySelectorAll('.project-card[style*="display: none"]');
        const projectsToShow = hiddenProjects.length >= 3 ? 3 : hiddenProjects.length;

        gsap.to(hiddenProjects, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            onStart: function() {
                this.targets()[0].style.display = 'block';
            },
            onComplete: () => {
                projectsLoaded += projectsToShow;
                if (projectsLoaded >= projectCards.length) {
                    loadMoreBtn.style.display = 'none';
                }
            }
        });
    });

    // Hover effect for project cards
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const image = card.querySelector('.project-image img');

        card.addEventListener('mouseenter', () => {
            gsap.to(overlay, { opacity: 1, duration: 0.3 });
            gsap.to(image, { scale: 1.05, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(overlay, { opacity: 0, duration: 0.3 });
            gsap.to(image, { scale: 1, duration: 0.3 });
        });
    });
});