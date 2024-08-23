const projectsData = [
    {
        name: "Quantum Encryption System",
        image: "images/projects/dog1.jpg",
        type: "programming",
        creator: "NyX",
        created: "2024-03-15",
        technologies: ["Quantum Computing", "Python", "Cryptography"],
        description: "A state-of-the-art encryption system leveraging quantum entanglement for unbreakable security.",
        downloadable: false,
        sourceAvailable: false,
        details: "This cutting-edge project explores the intersection of quantum mechanics and cryptography, providing a glimpse into the future of secure communication. By harnessing the principles of quantum entanglement, we've developed an encryption system that is theoretically unbreakable, even in the face of quantum computing attacks."
    },
    {
        name: "AI-Powered Code Refactorer",
        image: "images/projects/dog2.jpg",
        type: "programming",
        creator: "NyX",
        created: "2023-11-20",
        technologies: ["TensorFlow", "Python", "NLP"],
        description: "An AI system that automatically refactors and optimizes code across multiple programming languages.",
        downloadable: true,
        sourceAvailable: true,
        details: "Leveraging advanced natural language processing and machine learning techniques, this AI-powered tool revolutionizes the way developers maintain and improve their codebase. It not only identifies potential optimizations but also learns from the specific coding style of each project, ensuring that refactored code maintains consistency with the overall project structure."
    },
    {
        name: "Blockchain-Based Supply Chain",
        image: "images/projects/goat1.jpg",
        type: "programming",
        creator: "NyX",
        created: "2023-09-05",
        technologies: ["Ethereum", "Solidity", "React"],
        description: "A decentralized supply chain management system built on blockchain technology.",
        downloadable: false,
        sourceAvailable: true,
        details: "This project revolutionizes supply chain management by utilizing blockchain technology to create a transparent, secure, and efficient system. By leveraging smart contracts on the Ethereum network, we've created a solution that provides real-time tracking, automated payments, and immutable record-keeping, significantly reducing fraud and errors in global supply chains."
    },
    {
        name: "Neuro-Responsive UI Design",
        image: "images/projects/goat2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-10",
        technologies: ["EEG", "Machine Learning", "React"],
        description: "A revolutionary UI system that adapts to the user's cognitive state in real-time.",
        downloadable: false,
        sourceAvailable: false,
        details: "This groundbreaking project combines neuroscience and UI/UX design to create interfaces that respond to the user's cognitive state. Using non-invasive EEG technology and advanced machine learning algorithms, the system adjusts color schemes, layout complexity, and information density to optimize the user's cognitive load and enhance productivity."
    },
    {
        name: "AI-Powered Code Refactorer",
        image: "images/projects/goat3.jpg",
        type: "programming",
        creator: "NyX",
        created: "2023-11-20",
        technologies: ["TensorFlow", "Python", "NLP"],
        description: "An AI system that automatically refactors and optimizes code across multiple programming languages.",
        downloadable: true,
        sourceAvailable: true,
        details: "Leveraging advanced natural language processing and machine learning techniques, this AI-powered tool revolutionizes the way developers maintain and improve their codebase. It not only identifies potential optimizations but also learns from the specific coding style of each project, ensuring that refactored code maintains consistency with the overall project structure."
    },
    {
        name: "Blockchain-Based Supply Chain",
        image: "images/projects/goat4.jpg",
        type: "programming",
        creator: "NyX",
        created: "2023-09-05",
        technologies: ["Ethereum", "Solidity", "React"],
        description: "A decentralized supply chain management system built on blockchain technology.",
        downloadable: false,
        sourceAvailable: true,
        details: "This project revolutionizes supply chain management by utilizing blockchain technology to create a transparent, secure, and efficient system. By leveraging smart contracts on the Ethereum network, we've created a solution that provides real-time tracking, automated payments, and immutable record-keeping, significantly reducing fraud and errors in global supply chains."
    },
    {
        name: "Neuro-Responsive UI Design",
        image: "images/projects/man1.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-10",
        technologies: ["EEG", "Machine Learning", "React"],
        description: "A revolutionary UI system that adapts to the user's cognitive state in real-time.",
        downloadable: false,
        sourceAvailable: false,
        details: "This groundbreaking project combines neuroscience and UI/UX design to create interfaces that respond to the user's cognitive state. Using non-invasive EEG technology and advanced machine learning algorithms, the system adjusts color schemes, layout complexity, and information density to optimize the user's cognitive load and enhance productivity."
    },

    {
        name: "Neuro-Responsive UI Design",
        image: "images/projects/man2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-10",
        technologies: ["EEG", "Machine Learning", "React"],
        description: "A revolutionary UI system that adapts to the user's cognitive state in real-time.",
        downloadable: false,
        sourceAvailable: false,
        details: "This groundbreaking project combines neuroscience and UI/UX design to create interfaces that respond to the user's cognitive state. Using non-invasive EEG technology and advanced machine learning algorithms, the system adjusts color schemes, layout complexity, and information density to optimize the user's cognitive load and enhance productivity."
    },

    {
        name: "Neuro-Responsive UI Design",
        image: "images/projects/man3.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-10",
        technologies: ["EEG", "Machine Learning", "React"],
        description: "A revolutionary UI system that adapts to the user's cognitive state in real-time.",
        downloadable: false,
        sourceAvailable: false,
        details: "This groundbreaking project combines neuroscience and UI/UX design to create interfaces that respond to the user's cognitive state. Using non-invasive EEG technology and advanced machine learning algorithms, the system adjusts color schemes, layout complexity, and information density to optimize the user's cognitive load and enhance productivity."
    },
    // Add more projects as needed
];

let projectsShown = 0;
const projectsPerLoad = 4;
let currentFilter = 'all';

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-item';
    projectElement.setAttribute('data-type', project.type);
    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>
        <div class="project-details">
            <h2 class="project-name">${project.name}</h2>
            <div class="project-info">
                <p><strong>Type:</strong> ${project.type}</p>
                <p><strong>Creator:</strong> ${project.creator}</p>
                <p><strong>Created:</strong> ${project.created}</p>
                <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="button-container">
                <button class="btn view-details" data-project="${project.name}">View Details</button>
            </div>
        </div>
    `;
    return projectElement;
}


// Add this function to handle mobile filter clicks
function handleMobileFilterClick(e) {
    if (e.target.classList.contains('mobile-filter-btn') || e.target.parentElement.classList.contains('mobile-filter-btn')) {
        const filterBtn = e.target.classList.contains('mobile-filter-btn') ? e.target : e.target.parentElement;
        const newFilter = filterBtn.dataset.filter;
        if (newFilter !== currentFilter) {
            document.querySelectorAll('.mobile-filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
            filterProjects(newFilter);
        }
    }
}

function loadProjects(filter = currentFilter) {
    const projectsContainer = document.getElementById('projects-container');
    const projectsToShow = projectsData.filter(project => filter === 'all' || project.type === filter);
    const endIndex = Math.min(projectsShown + projectsPerLoad, projectsToShow.length);
    
    // Clear the container if it's a new filter
    if (projectsShown === 0) {
        projectsContainer.innerHTML = '';
    }
    
    for (let i = projectsShown; i < endIndex; i++) {
        const projectElement = createProjectElement(projectsToShow[i]);
        projectsContainer.appendChild(projectElement);
        gsap.from(projectElement, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: (i - projectsShown) * 0.1,
            clearProps: "all"
        });
    }
    
    projectsShown = endIndex;
    
    if (projectsShown >= projectsToShow.length) {
        document.getElementById('load-more').style.display = 'none';
    } else {
        document.getElementById('load-more').style.display = 'block';
    }

    lazyLoadImages();
}

function equalizeProjectHeights() {
    const projects = document.querySelectorAll('.project-item');
    let maxHeight = 0;
    
    projects.forEach(project => {
        project.style.height = 'auto';
        maxHeight = Math.max(maxHeight, project.offsetHeight);
    });

    projects.forEach(project => {
        project.style.height = `${maxHeight}px`;
    });
}


function filterProjects(filter) {
    if (filter === currentFilter) return;
    currentFilter = filter;
    projectsShown = 0;
    const projectsContainer = document.getElementById('projects-container');
    
    // Update both desktop and mobile filter buttons immediately
    document.querySelectorAll('.filter-btn, .mobile-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    gsap.to(projectsContainer.children, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
            projectsContainer.innerHTML = '';
            loadProjects();  // This will use the updated currentFilter
        }
    });
}

function showProjectDetails(projectName) {
    const project = projectsData.find(p => p.name === projectName);
    if (!project) return;

    const dialog = document.getElementById('project-dialog');
    const dialogInner = document.getElementById('dialog-inner');

    dialogInner.innerHTML = `
        <h2>${project.name}</h2>
        <img src="${project.image}" alt="${project.name}" style="width: 100%; max-height: 300px; object-fit: cover; margin-bottom: 1rem;">
        <div class="project-info">
            <p><strong>Type:</strong> ${project.type}</p>
            <p><strong>Creator:</strong> ${project.creator}</p>
            <p><strong>Created:</strong> ${project.created}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            <p><strong>Downloadable:</strong> ${project.downloadable ? 'Yes' : 'No'}</p>
            <p><strong>Source Available:</strong> ${project.sourceAvailable ? 'Yes' : 'No'}</p>
        </div>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Details:</strong> ${project.details}</p>
    `;

    dialog.style.display = 'block';
    setTimeout(() => {
        dialog.classList.add('visible');
    }, 10);
}

function initializeScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.projects-section h1', {
        scrollTrigger: {
            trigger: '.projects-section h1',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.5
    });

    gsap.to('.project-filters', {
        scrollTrigger: {
            trigger: '.project-filters',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.5
    });

    gsap.to('.projects-grid', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.5
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    initializeScrollTrigger();
    loadProjects(); // Initial load of projects

    document.getElementById('load-more').addEventListener('click', () => loadProjects());

    document.querySelector('.project-filters').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const newFilter = e.target.dataset.filter;
            if (newFilter !== currentFilter) {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                filterProjects(newFilter);
            }
        }
    });

    // Add event listener for mobile filter bar
    document.querySelector('.mobile-filter-bar').addEventListener('click', handleMobileFilterClick);


    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            showProjectDetails(e.target.dataset.project);
        }
    });

    document.querySelector('.close').addEventListener('click', () => {
        const dialog = document.getElementById('project-dialog');
        dialog.classList.remove('visible');
        setTimeout(() => {
            dialog.style.display = 'none';
        }, 300);
    });

    window.addEventListener('click', (e) => {
        const dialog = document.getElementById('project-dialog');
        if (e.target === dialog) {
            dialog.classList.remove('visible');
            setTimeout(() => {
                dialog.style.display = 'none';
            }, 300);
        }
    });
});



// Implement lazy loading for images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.project-image img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src; // This will trigger the image to load
        img.removeAttribute('loading');
    });
};

// Call lazyLoadImages after loading projects
const originalLoadProjects = loadProjects;
loadProjects = (filter) => {
    originalLoadProjects(filter);
    lazyLoadImages();
};

