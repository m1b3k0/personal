document.addEventListener('DOMContentLoaded', () => {
    // Animate project cards on scroll
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    gsap.to(card, { opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    gsap.to(card, { opacity: 0.3, scale: 0.95, duration: 0.4 });
                }
            });
        });
    });

    // Load more functionality (simulated)
    const loadMoreBtn = document.getElementById('load-more');
    let projectsLoaded = 6; // Assuming 6 projects are initially loaded

    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading new projects
        for (let i = 0; i < 3; i++) {
            if (projectsLoaded < projectCards.length) {
                gsap.to(projectCards[projectsLoaded], { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.4,
                    onStart: () => projectCards[projectsLoaded].style.display = 'block'
                });
                projectsLoaded++;
            }
        }

        if (projectsLoaded >= projectCards.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Hover effect for project cards
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        card.addEventListener('mouseenter', () => {
            gsap.to(overlay, { opacity: 1, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(overlay, { opacity: 0, duration: 0.3 });
        });
    });
});