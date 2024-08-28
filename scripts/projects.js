

const projectsData = [
    {
        name: "Quantum Encryption System",
        image: "images/projects/dog1.jpg",
        type: "code",
        creator: "NyX",
        created: "2024-03-15",
        expectedCompletion: "2024-12-31",
        technologies: ["C++", "Python", "CUDA", "IBM Quantum Experience", "OpenSSL"],
        description: "A state-of-the-art encryption system leveraging quantum entanglement for unbreakable security.",
        overview: "The Quantum Encryption System is a groundbreaking security solution that leverages the principles of quantum mechanics to create unbreakable encryption keys. This project aims to revolutionize data protection in an era where traditional encryption methods are becoming increasingly vulnerable to advanced computing threats.",
        keyFeatures: [
            "Quantum Key Distribution (QKD) implementation",
            "Post-quantum cryptography algorithms",
            "Real-time intrusion detection system",
            "Scalable architecture for enterprise deployment"
        ],
        progress: 65,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 75 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 25 }
        ],
        challenges: [
            {
                title: "Quantum Decoherence",
                description: "Maintaining quantum states for extended periods proved difficult due to environmental interference.",
                solution: "Implemented advanced error correction algorithms and designed a novel quantum memory system to preserve quantum states."
            },
            {
                title: "Scalability",
                description: "Initial prototypes showed promising results but struggled with large-scale data encryption.",
                solution: "Developed a distributed quantum network architecture, allowing for parallel processing and improved scalability."
            }
        ],
        futureDevelopments: [
            {
                title: "Enhanced Security Protocols",
                description: "Implemented advanced encryption algorithms to further strengthen data protection.",
                status: "implemented"
            },
            {
                title: "User Authentication System",
                description: "Develop a robust user authentication system using biometric data.",
                status: "planned",
                plannedDate: "Q3 2024"
            },
            {
                title: "Network Integration",
                description: "Seamless integration with existing network security protocols.",
                status: "planned",
                plannedDate: "Q4 2024"
            }
        ]
    },
    {
        name: "AI-Powered Smart Home Assistant",
        image: "images/projects/dog2.jpg",
        type: "code",
        creator: "NyX",
        created: "2024-02-01",
        expectedCompletion: "2024-10-31",
        technologies: ["Python", "TensorFlow", "Raspberry Pi", "IoT Protocols", "Natural Language Processing"],
        description: "An advanced AI assistant that learns from user behavior to optimize home automation and energy efficiency.",
        overview: "This project aims to create a next-generation smart home assistant that goes beyond simple voice commands. By leveraging machine learning and IoT technologies, it adapts to users' habits and preferences, creating a truly personalized and efficient home environment.",
        keyFeatures: [
            "Adaptive learning algorithms",
            "Multi-device synchronization",
            "Energy consumption optimization",
            "Predictive maintenance alerts"
        ],
        progress: 40,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Privacy Concerns",
                description: "Balancing data collection for personalization while ensuring user privacy.",
                solution: "Implemented edge computing and local data processing to minimize cloud dependency."
            },
            {
                title: "Device Compatibility",
                description: "Ensuring seamless integration with a wide range of smart home devices.",
                solution: "Developed a universal adapter layer supporting multiple IoT protocols."
            }
        ],
        futureDevelopments: [
            {
                title: "Emotion Recognition",
                description: "Implement advanced computer vision to recognize user emotions and adjust home environment accordingly.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Health Monitoring Integration",
                description: "Connect with wearable devices to provide health insights and emergency alerts.",
                status: "planned",
                plannedDate: "Q2 2025"
            }
        ]
    },
    {
        name: "Sustainable Urban Planning Simulator",
        image: "images/projects/goat1.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-10",
        expectedCompletion: "2024-11-30",
        technologies: ["Unity 3D", "C#", "Machine Learning", "GIS", "Climate Modeling"],
        description: "A comprehensive simulator for urban planners to design and test sustainable city layouts and infrastructure.",
        overview: "This project combines advanced 3D modeling with machine learning algorithms to create a powerful tool for urban planners. It allows for the simulation of various urban scenarios, considering factors such as population growth, climate change, and technological advancements.",
        keyFeatures: [
            "Real-time 3D visualization",
            "Climate impact predictions",
            "Traffic flow optimization",
            "Renewable energy integration planning"
        ],
        progress: 55,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 80 },
            { name: "Refining", progress: 40 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Data Integration",
                description: "Incorporating diverse datasets from various sources into a cohesive model.",
                solution: "Developed a flexible data pipeline with standardized formats and automated quality checks."
            },
            {
                title: "Performance Optimization",
                description: "Ensuring smooth performance with complex simulations and large datasets.",
                solution: "Implemented GPU acceleration and optimized algorithms for real-time rendering and calculations."
            }
        ],
        futureDevelopments: [
            {
                title: "VR Integration",
                description: "Add virtual reality support for immersive urban exploration and planning.",
                status: "planned",
                plannedDate: "Q4 2024"
            },
            {
                title: "AI Urban Planner",
                description: "Develop an AI assistant that can suggest optimal urban layouts based on given parameters.",
                status: "planned",
                plannedDate: "Q2 2025"
            }
        ]
    },
    {
        name: "Biodegradable Electronics",
        image: "images/projects/goat2.jpg",
        type: "electro",
        creator: "NyX",
        created: "2023-11-20",
        expectedCompletion: "2024-12-15",
        technologies: ["Organic Electronics", "Biopolymers", "Nanoengineering", "Circuit Design"],
        description: "Developing electronic components that naturally decompose, reducing e-waste and environmental impact.",
        overview: "This innovative project focuses on creating electronic components using biodegradable materials. The goal is to produce functional electronics that can naturally decompose at the end of their lifecycle, significantly reducing electronic waste and environmental pollution.",
        keyFeatures: [
            "Organic semiconductor materials",
            "Biodegradable circuit boards",
            "Eco-friendly battery alternatives",
            "Compostable packaging solutions"
        ],
        progress: 30,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 50 },
            { name: "Refining", progress: 0 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Material Durability",
                description: "Balancing biodegradability with the need for durability during the product's lifespan.",
                solution: "Developed multi-layer materials with protective coatings that break down under specific environmental conditions."
            },
            {
                title: "Performance Parity",
                description: "Achieving performance comparable to traditional electronics using biodegradable materials.",
                solution: "Exploring novel organic compounds and nanostructures to enhance conductivity and efficiency."
            }
        ],
        futureDevelopments: [
            {
                title: "Self-Healing Circuits",
                description: "Implement self-repairing mechanisms to extend the lifespan of biodegradable electronics.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Biodegradable Displays",
                description: "Develop fully biodegradable display technologies for eco-friendly screens and monitors.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "Neural Interface for Artistic Expression",
        image: "images/projects/goat3.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-04-01",
        expectedCompletion: "2025-03-31",
        technologies: ["EEG", "Machine Learning", "Generative Art", "Virtual Reality", "Haptic Feedback"],
        description: "A revolutionary interface that translates brainwaves into digital art, allowing direct neural artistic expression.",
        overview: "This groundbreaking project aims to bridge the gap between thought and artistic creation. By using advanced EEG technology and machine learning algorithms, it allows artists to create visual and auditory artworks directly from their neural activity, opening up new frontiers in artistic expression.",
        keyFeatures: [
            "Real-time brainwave interpretation",
            "Multi-modal art generation (visual, auditory)",
            "VR immersive creation environment",
            "Collaborative neural art capabilities"
        ],
        progress: 20,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 30 },
            { name: "Refining", progress: 0 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Signal Interpretation",
                description: "Accurately translating complex neural signals into meaningful artistic elements.",
                solution: "Developing advanced machine learning models trained on large datasets of neural activity and corresponding artistic choices."
            },
            {
                title: "User Accessibility",
                description: "Making the technology accessible and intuitive for artists without neuroscience backgrounds.",
                solution: "Creating an adaptive interface that learns from each user's unique neural patterns and artistic preferences."
            }
        ],
        futureDevelopments: [
            {
                title: "Emotion-to-Art Translation",
                description: "Enhance the system to interpret and visualize complex emotional states.",
                status: "planned",
                plannedDate: "Q4 2025"
            },
            {
                title: "Tactile Feedback System",
                description: "Implement haptic feedback to allow artists to 'feel' their creations in virtual space.",
                status: "planned",
                plannedDate: "Q2 2026"
            }
        ]
    },

    {
        name: "Augmented Reality Code Debugger",
        image: "images/projects/goat4.jpg",
        type: "code",
        creator: "NyX",
        created: "2024-05-10",
        expectedCompletion: "2025-02-28",
        technologies: ["JavaScript", "WebXR", "OpenCV", "AI Debugging Assistant"],
        description: "An AR-powered tool for debugging code by visualizing errors and suggesting fixes in a 3D environment.",
        overview: "This project aims to create an Augmented Reality tool that allows developers to debug code in an interactive 3D space. By visualizing code flows and error states in AR, developers can gain new insights and efficiently resolve issues.",
        keyFeatures: [
            "3D code flow visualization",
            "Error heatmap in AR",
            "AI-driven suggestions",
            "Cross-platform support"
        ],
        progress: 50,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Complexity in Visualization",
                description: "Rendering complex code structures in an understandable and efficient way in AR.",
                solution: "Utilized modular visualization techniques and hierarchical code abstraction for better clarity."
            },
            {
                title: "Performance Optimization",
                description: "Ensuring smooth performance on various AR-capable devices.",
                solution: "Incorporated GPU acceleration and optimized rendering pipelines."
            }
        ],
        futureDevelopments: [
            {
                title: "Collaborative Debugging",
                description: "Introduce multi-user debugging sessions in AR.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Voice Interaction",
                description: "Integrate voice commands for hands-free debugging.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "AI-Powered Graphic Design Assistant",
        image: "images/projects/man1.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-06-15",
        expectedCompletion: "2024-12-01",
        technologies: ["AI", "Figma API", "Adobe XD", "Neural Networks"],
        description: "An AI assistant that helps designers create stunning visuals by suggesting layouts, color schemes, and typography.",
        overview: "This project is focused on enhancing the design process with AI. The assistant learns from user preferences and historical design trends to offer tailored suggestions, helping designers work more efficiently and creatively.",
        keyFeatures: [
            "Adaptive design suggestions",
            "Real-time feedback",
            "Trend analysis",
            "Integration with popular design tools"
        ],
        progress: 70,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 80 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 20 }
        ],
        challenges: [
            {
                title: "AI Bias",
                description: "Ensuring the AI suggests diverse design options without over-relying on popular trends.",
                solution: "Implemented a diverse dataset and a feedback loop that learns from unique user inputs."
            },
            {
                title: "User Acceptance",
                description: "Balancing AI-driven suggestions with creative freedom for designers.",
                solution: "Created an adjustable AI influence setting, allowing users to control the level of AI intervention."
            }
        ],
        futureDevelopments: [
            {
                title: "3D Design Capabilities",
                description: "Expand the assistant's capabilities to support 3D design and modeling.",
                status: "planned",
                plannedDate: "Q4 2025"
            },
            {
                title: "Collaboration Features",
                description: "Enable real-time collaboration among design teams using AI assistance.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "Interactive Digital Mural",
        image: "images/projects/man2.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-07-01",
        expectedCompletion: "2025-05-15",
        technologies: ["Projection Mapping", "Interactive Art", "Touch Sensors", "Generative Design"],
        description: "A large-scale interactive digital mural that responds to touch and movement, creating a dynamic visual experience.",
        overview: "This project involves the creation of an interactive mural that reacts to the presence of viewers. Utilizing projection mapping and touch sensors, the mural changes and evolves based on user interactions, providing a unique, immersive experience.",
        keyFeatures: [
            "Real-time interaction",
            "Multi-user engagement",
            "Generative art algorithms",
            "Scalable to large surfaces"
        ],
        progress: 40,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 10 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Sensor Accuracy",
                description: "Ensuring precise and responsive touch and movement detection across the entire mural.",
                solution: "Implemented high-density sensor arrays and adaptive algorithms that calibrate to user behavior."
            },
            {
                title: "Content Generation",
                description: "Creating engaging and diverse generative art content that remains interesting over time.",
                solution: "Developed a modular content system with AI-driven generative design elements."
            }
        ],
        futureDevelopments: [
            {
                title: "Sound Integration",
                description: "Add audio elements that respond to interactions, creating a multisensory experience.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Augmented Reality Layer",
                description: "Integrate an AR component that allows users to see additional layers of the mural through their devices.",
                status: "planned",
                plannedDate: "Q2 2026"
            }
        ]
    },
    {
        name: "Smart Wearable for Health Monitoring",
        image: "images/projects/man3.jpg",
        type: "electro",
        creator: "NyX",
        created: "2024-03-01",
        expectedCompletion: "2024-12-31",
        technologies: ["Wearable Tech", "IoT", "Biometric Sensors", "Bluetooth LE"],
        description: "A wearable device that continuously monitors vital health parameters and sends real-time alerts to users and doctors.",
        overview: "This project focuses on developing a smart wearable device that tracks key health metrics such as heart rate, blood pressure, and oxygen levels. The data is continuously monitored, and real-time alerts are sent to users and healthcare providers in case of any anomalies.",
        keyFeatures: [
            "Continuous monitoring",
            "Real-time alerts",
            "Bluetooth LE for low power consumption",
            "Cloud integration for data analysis"
        ],
        progress: 65,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 75 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 20 }
        ],
        challenges: [
            {
                title: "Battery Life",
                description: "Maximizing battery life while maintaining continuous monitoring.",
                solution: "Optimized power management algorithms and used energy-efficient components."
            },
            {
                title: "Data Accuracy",
                description: "Ensuring the accuracy of health metrics in various conditions.",
                solution: "Incorporated advanced calibration techniques and machine learning algorithms to enhance accuracy."
            }
        ],
        futureDevelopments: [
            {
                title: "AI-Driven Health Insights",
                description: "Implement AI to provide personalized health insights and predictive analytics.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Integration with Fitness Apps",
                description: "Allow seamless integration with popular fitness and health apps.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "Virtual Reality Art Studio",
        image: "images/projects/dog1.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-08-10",
        expectedCompletion: "2025-04-30",
        technologies: ["Virtual Reality", "3D Modeling", "Generative Art", "Haptic Feedback"],
        description: "A VR studio that allows artists to create 3D art in a fully immersive environment, with tools that mimic real-world techniques.",
        overview: "This project aims to develop a virtual reality studio where artists can create 3D sculptures and paintings in a virtual space. The studio mimics real-world art tools and techniques, enhanced by VR capabilities, allowing for the exploration of new forms of artistic expression.",
        keyFeatures: [
            "Realistic tool simulation",
            "Haptic feedback for tactile experience",
            "Multi-layer 3D modeling",
            "Collaboration in virtual space"
        ],
        progress: 30,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 40 },
            { name: "Refining", progress: 10 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Haptic Feedback Accuracy",
                description: "Providing accurate tactile feedback that enhances the creation experience.",
                solution: "Developed custom haptic devices with fine-tuned feedback mechanisms."
            },
            {
                title: "User Interface Design",
                description: "Creating an intuitive and immersive interface that doesn't hinder creativity.",
                solution: "Conducted extensive user testing and iterative design improvements to optimize the UI."
            }
        ],
        futureDevelopments: [
            {
                title: "AI Art Collaboration",
                description: "Enable AI to assist in the creation process by offering real-time suggestions and automating repetitive tasks.",
                status: "planned",
                plannedDate: "Q4 2025"
            },
            {
                title: "Physical Output Integration",
                description: "Allow users to 3D print their VR creations or export them to other digital formats.",
                status: "planned",
                plannedDate: "Q2 2026"
            }
        ]
    },
    {
        name: "Smart City Infrastructure Monitoring System",
        image: "images/projects/dog2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-02-20",
        expectedCompletion: "2024-11-30",
        technologies: ["IoT", "GIS", "Machine Learning", "Big Data Analytics"],
        description: "A comprehensive monitoring system for urban infrastructure, providing real-time data and predictive maintenance alerts.",
        overview: "This project involves the creation of a smart monitoring system for urban infrastructure, using IoT devices and big data analytics to track the condition of roads, bridges, and utilities. The system provides real-time updates and predictive maintenance alerts, helping city planners manage resources more efficiently.",
        keyFeatures: [
            "Real-time data collection",
            "Predictive maintenance",
            "Geospatial analytics",
            "Scalable to large urban areas"
        ],
        progress: 75,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 90 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 20 }
        ],
        challenges: [
            {
                title: "Data Integration",
                description: "Combining diverse datasets from multiple sources for cohesive analysis.",
                solution: "Developed a unified data model and integration framework."
            },
            {
                title: "System Scalability",
                description: "Ensuring the system can scale to monitor large cities with diverse infrastructure needs.",
                solution: "Utilized cloud-based architecture with modular components for easy scalability."
            }
        ],
        futureDevelopments: [
            {
                title: "AI-Based Prediction",
                description: "Implement machine learning models to predict infrastructure failures before they occur.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Citizen Reporting Interface",
                description: "Create an app that allows citizens to report infrastructure issues directly into the system.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    },
    {
        name: "Biometric Authentication System",
        image: "images/projects/goat1.jpg",
        type: "code",
        creator: "NyX",
        created: "2024-05-05",
        expectedCompletion: "2024-12-15",
        technologies: ["Python", "TensorFlow", "Face Recognition", "Fingerprint Scanning"],
        description: "A multi-factor authentication system using biometric data such as face and fingerprint recognition.",
        overview: "This project focuses on developing a secure biometric authentication system that combines multiple biometric inputs for enhanced security. The system integrates face recognition, fingerprint scanning, and other biometric data to provide robust, user-friendly authentication.",
        keyFeatures: [
            "Multi-factor authentication",
            "Real-time biometric analysis",
            "High accuracy and speed",
            "Integration with existing security systems"
        ],
        progress: 60,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 70 },
            { name: "Refining", progress: 30 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Data Privacy",
                description: "Ensuring the security and privacy of biometric data.",
                solution: "Implemented advanced encryption and on-device processing to keep biometric data secure."
            },
            {
                title: "System Compatibility",
                description: "Integrating the system with various hardware and software platforms.",
                solution: "Developed a modular architecture with API integrations for flexibility."
            }
        ],
        futureDevelopments: [
            {
                title: "Voice Recognition",
                description: "Add voice recognition as an additional biometric factor.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Behavioral Biometrics",
                description: "Incorporate behavioral patterns such as typing rhythm or walking gait for enhanced security.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "Sustainable Architecture Design Toolkit",
        image: "images/projects/goat2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-01-25",
        expectedCompletion: "2024-10-30",
        technologies: ["AutoCAD", "Revit", "BIM", "Energy Modeling Software"],
        description: "A toolkit for architects to design energy-efficient, sustainable buildings with integrated environmental impact analysis.",
        overview: "This project involves the development of a comprehensive design toolkit that enables architects to create sustainable buildings with minimal environmental impact. The toolkit integrates energy modeling and building information modeling (BIM) to ensure that designs are both efficient and environmentally friendly.",
        keyFeatures: [
            "Energy-efficient design templates",
            "Integrated environmental impact analysis",
            "BIM integration",
            "Real-time simulation of energy performance"
        ],
        progress: 80,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 85 },
            { name: "Refining", progress: 60 },
            { name: "Finishing", progress: 30 }
        ],
        challenges: [
            {
                title: "Energy Modeling Accuracy",
                description: "Ensuring that energy simulations are accurate and reflect real-world conditions.",
                solution: "Implemented advanced modeling algorithms and validated results with real-world case studies."
            },
            {
                title: "User Learning Curve",
                description: "Reducing the learning curve for architects unfamiliar with energy modeling software.",
                solution: "Developed comprehensive tutorials and an intuitive user interface."
            }
        ],
        futureDevelopments: [
            {
                title: "AI Design Suggestions",
                description: "Implement AI to suggest design optimizations based on sustainability goals.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "AR Visualization",
                description: "Allow architects to visualize their designs in augmented reality for better spatial understanding.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    },
    {
        name: "Interactive Data Visualization Dashboard",
        image: "images/projects/goat3.jpg",
        type: "code",
        creator: "NyX",
        created: "2024-04-18",
        expectedCompletion: "2024-09-30",
        technologies: ["JavaScript", "D3.js", "React", "GraphQL"],
        description: "A dynamic, interactive dashboard for visualizing complex datasets, enabling users to explore and analyze data intuitively.",
        overview: "This project focuses on creating a web-based dashboard that allows users to interact with and explore complex datasets. The dashboard supports various visualization types, real-time data updates, and customizable views, making it a powerful tool for data analysis.",
        keyFeatures: [
            "Real-time data updates",
            "Customizable visualizations",
            "Interactive data exploration",
            "Cross-platform compatibility"
        ],
        progress: 85,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 90 },
            { name: "Refining", progress: 70 },
            { name: "Finishing", progress: 50 }
        ],
        challenges: [
            {
                title: "Performance Optimization",
                description: "Ensuring smooth performance with large datasets and complex visualizations.",
                solution: "Utilized efficient data handling techniques and optimized rendering processes."
            },
            {
                title: "User Customization",
                description: "Providing extensive customization options without overwhelming the user.",
                solution: "Designed a user-friendly interface with modular customization options."
            }
        ],
        futureDevelopments: [
            {
                title: "Machine Learning Integration",
                description: "Incorporate machine learning models to analyze data patterns and offer predictive insights.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Collaborative Features",
                description: "Enable multiple users to collaborate on data analysis in real-time.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    },
    {
        name: "AI-Driven Music Composition Tool",
        image: "images/projects/goat4.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-05-22",
        expectedCompletion: "2025-01-31",
        technologies: ["AI", "Music Theory", "Digital Audio Workstation", "Machine Learning"],
        description: "A tool that uses AI to assist in composing music, providing suggestions based on genre, mood, and user input.",
        overview: "This project aims to develop an AI-powered tool for music composition, allowing users to create original music with the help of machine learning. The tool suggests melodies, harmonies, and rhythms based on the user’s input, making it easier for both novice and experienced composers to create new music.",
        keyFeatures: [
            "Genre-specific suggestions",
            "Mood-based composition",
            "Integration with DAWs",
            "AI-generated musical themes"
        ],
        progress: 40,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 50 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "AI Creativity",
                description: "Balancing AI-generated suggestions with the user’s creative input.",
                solution: "Developed a system that learns from user preferences and offers personalized suggestions."
            },
            {
                title: "Genre Versatility",
                description: "Ensuring the AI can adapt to a wide range of musical genres.",
                solution: "Trained the AI on a diverse dataset covering multiple music styles."
            }
        ],
        futureDevelopments: [
            {
                title: "Live Performance Integration",
                description: "Enable real-time AI assistance during live music performances.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Collaborative Composition",
                description: "Allow multiple users to collaborate on music composition simultaneously.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "Energy-Harvesting Wearable Devices",
        image: "images/projects/man1.jpg",
        type: "electro",
        creator: "NyX",
        created: "2024-03-12",
        expectedCompletion: "2024-12-01",
        technologies: ["Nanotechnology", "Wearable Tech", "Piezoelectric Materials", "Energy Storage"],
        description: "Developing wearable devices that harvest energy from body movements, reducing the need for external power sources.",
        overview: "This project focuses on creating wearable devices that can generate and store energy from the wearer’s movements. Using advanced piezoelectric materials and nanotechnology, these devices aim to be self-sustaining, reducing or eliminating the need for batteries or external power sources.",
        keyFeatures: [
            "Energy harvesting from motion",
            "Integrated energy storage",
            "Lightweight and durable materials",
            "Scalable for various wearable applications"
        ],
        progress: 55,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 70 },
            { name: "Refining", progress: 30 },
            { name: "Finishing", progress: 10 }
        ],
        challenges: [
            {
                title: "Energy Efficiency",
                description: "Maximizing energy harvested while maintaining device comfort and usability.",
                solution: "Optimized material design and energy conversion efficiency through iterative prototyping."
            },
            {
                title: "Durability",
                description: "Ensuring the devices remain functional over extended use in various conditions.",
                solution: "Developed robust materials and conducted extensive wear testing."
            }
        ],
        futureDevelopments: [
            {
                title: "Multisource Energy Harvesting",
                description: "Incorporate additional energy sources, such as solar and thermal, into the wearable devices.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Health Monitoring Integration",
                description: "Combine energy harvesting with biometric sensors for health monitoring wearables.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    },
    {
        name: "AI-Enhanced Video Editing Software",
        image: "images/projects/man2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-07-05",
        expectedCompletion: "2025-02-28",
        technologies: ["AI", "Video Editing", "Machine Learning", "Natural Language Processing"],
        description: "Video editing software that uses AI to automate routine tasks and provide creative suggestions, speeding up the editing process.",
        overview: "This project aims to revolutionize video editing by integrating AI to assist with routine tasks such as cutting, color correction, and effects application. The software also offers creative suggestions based on the content, making the editing process faster and more intuitive.",
        keyFeatures: [
            "Automated cutting and trimming",
            "AI-driven color grading",
            "Content-based effects suggestions",
            "Natural language commands"
        ],
        progress: 45,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Creative Control",
                description: "Balancing AI automation with the editor’s creative vision.",
                solution: "Developed a system that allows easy toggling of AI suggestions and manual controls."
            },
            {
                title: "Performance",
                description: "Ensuring the software performs well with high-resolution video files and complex effects.",
                solution: "Incorporated GPU acceleration and optimized processing algorithms."
            }
        ],
        futureDevelopments: [
            {
                title: "Multilingual Support",
                description: "Enable the software to understand and execute commands in multiple languages.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Real-Time Collaboration",
                description: "Allow multiple editors to work on the same project simultaneously.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "Interactive Augmented Reality Museum Guide",
        image: "images/projects/man3.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-08-01",
        expectedCompletion: "2025-06-30",
        technologies: ["AR", "Interactive Media", "Museum Technology", "AI"],
        description: "An AR-based guide that provides interactive tours in museums, offering insights and stories about exhibits in a dynamic, engaging way.",
        overview: "This project focuses on creating an AR application that enhances the museum-going experience. The guide uses augmented reality to overlay information, animations, and interactive content onto exhibits, making museum visits more engaging and educational.",
        keyFeatures: [
            "Interactive AR tours",
            "Personalized content based on visitor interests",
            "Multi-language support",
            "Integration with museum databases"
        ],
        progress: 25,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 40 },
            { name: "Refining", progress: 10 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "AR Content Development",
                description: "Creating rich, immersive AR content that enhances the museum experience.",
                solution: "Collaborated with historians and designers to develop engaging and accurate AR content."
            },
            {
                title: "Visitor Interaction",
                description: "Ensuring that the AR guide is intuitive and enhances, rather than distracts from, the museum experience.",
                solution: "Conducted user testing and iterative design improvements to optimize interaction."
            }
        ],
        futureDevelopments: [
            {
                title: "AI-Powered Recommendations",
                description: "Use AI to recommend personalized museum paths based on visitor preferences and history.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Virtual Museum Tours",
                description: "Extend the AR experience to virtual tours for remote visitors.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "Advanced Solar-Powered Charging Station",
        image: "images/projects/dog1.jpg",
        type: "electro",
        creator: "NyX",
        created: "2024-02-10",
        expectedCompletion: "2024-10-31",
        technologies: ["Solar Power", "Energy Storage", "IoT", "Sustainable Design"],
        description: "Designing a solar-powered charging station for electric vehicles and mobile devices, equipped with real-time energy monitoring.",
        overview: "This project involves the development of a solar-powered charging station that can charge electric vehicles and mobile devices. The station features advanced energy storage and real-time monitoring, making it a sustainable and efficient solution for renewable energy utilization.",
        keyFeatures: [
            "High-efficiency solar panels",
            "Smart energy management",
            "Real-time energy monitoring",
            "Multi-device charging capabilities"
        ],
        progress: 70,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 80 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 30 }
        ],
        challenges: [
            {
                title: "Energy Storage Optimization",
                description: "Maximizing energy storage capacity while maintaining affordability.",
                solution: "Developed a hybrid energy storage system combining batteries and supercapacitors."
            },
            {
                title: "Durability in Harsh Environments",
                description: "Ensuring the station can withstand extreme weather conditions.",
                solution: "Utilized weather-resistant materials and designed protective housing."
            }
        ],
        futureDevelopments: [
            {
                title: "Wireless Charging",
                description: "Implement wireless charging capabilities for compatible devices.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Grid-Connected Operation",
                description: "Allow the station to feed excess energy back into the grid.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    },
    {
        name: "AI-Assisted Architectural Design",
        image: "images/projects/dog2.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-03-22",
        expectedCompletion: "2025-01-15",
        technologies: ["AI", "BIM", "Generative Design", "Sustainable Architecture"],
        description: "An AI-driven tool that assists architects in designing buildings by generating optimized designs based on user inputs and sustainability goals.",
        overview: "This project focuses on creating a tool that uses AI to assist architects in designing buildings. The AI generates design options based on inputs like site location, environmental conditions, and sustainability goals, allowing architects to explore a wide range of possibilities quickly.",
        keyFeatures: [
            "Generative design algorithms",
            "Sustainability optimization",
            "Integration with BIM software",
            "Real-time design adjustments"
        ],
        progress: 35,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 50 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Design Flexibility",
                description: "Ensuring the AI-generated designs are flexible enough to allow for creative input.",
                solution: "Incorporated adjustable parameters and manual override options."
            },
            {
                title: "Performance with Complex Models",
                description: "Maintaining performance when working with large, complex architectural models.",
                solution: "Optimized algorithms and utilized cloud-based processing for heavy computations."
            }
        ],
        futureDevelopments: [
            {
                title: "VR Design Review",
                description: "Enable architects to review AI-generated designs in virtual reality.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Collaborative Design Platform",
                description: "Develop a platform that allows multiple architects to collaborate on AI-assisted designs in real-time.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "Interactive 3D Art Installation",
        image: "images/projects/goat1.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-04-25",
        expectedCompletion: "2025-02-28",
        technologies: ["3D Printing", "Interactive Art", "Generative Design", "Sensors"],
        description: "A 3D art installation that changes shape and color in response to environmental factors and viewer interactions.",
        overview: "This project involves the creation of a large-scale 3D art installation that reacts to its environment and to viewers. The installation changes its form and color based on factors like temperature, light, and proximity, creating a dynamic, evolving piece of art.",
        keyFeatures: [
            "Responsive to environmental changes",
            "Multi-sensory interaction",
            "Generative design elements",
            "Sustainable materials"
        ],
        progress: 40,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 50 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Material Durability",
                description: "Ensuring the materials can withstand continuous change and interaction.",
                solution: "Developed a material composite that combines flexibility with strength."
            },
            {
                title: "Sensor Integration",
                description: "Seamlessly integrating sensors into the art piece without compromising aesthetics.",
                solution: "Used transparent and embedded sensors that are hidden within the structure."
            }
        ],
        futureDevelopments: [
            {
                title: "Sound Integration",
                description: "Add an audio component that changes based on interactions.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Augmented Reality Layer",
                description: "Enable viewers to experience an additional AR layer that complements the physical installation.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "Wearable Tech for Environmental Monitoring",
        image: "images/projects/goat2.jpg",
        type: "electro",
        creator: "NyX",
        created: "2024-06-15",
        expectedCompletion: "2025-03-31",
        technologies: ["Wearable Tech", "IoT", "Environmental Sensors", "Machine Learning"],
        description: "A wearable device that monitors environmental conditions such as air quality, temperature, and UV exposure, providing real-time data and alerts.",
        overview: "This project aims to develop a wearable device that helps users monitor environmental conditions. The device tracks data like air quality, temperature, humidity, and UV exposure, and provides real-time alerts and recommendations to help users stay safe and informed.",
        keyFeatures: [
            "Real-time environmental monitoring",
            "Customizable alerts",
            "Data analysis and insights",
            "Integration with health apps"
        ],
        progress: 55,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 70 },
            { name: "Refining", progress: 30 },
            { name: "Finishing", progress: 10 }
        ],
        challenges: [
            {
                title: "Sensor Accuracy",
                description: "Ensuring the sensors provide accurate readings in various conditions.",
                solution: "Conducted extensive calibration and testing in different environments."
            },
            {
                title: "Battery Life",
                description: "Maximizing battery life while supporting continuous monitoring.",
                solution: "Implemented power-efficient algorithms and energy-saving modes."
            }
        ],
        futureDevelopments: [
            {
                title: "AI-Powered Insights",
                description: "Use AI to provide personalized insights and recommendations based on environmental data.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Wearable Network Integration",
                description: "Enable the device to connect and share data with other wearables in the area.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "Generative Art Composition Tool",
        image: "images/projects/goat3.jpg",
        type: "artwork",
        creator: "NyX",
        created: "2024-07-10",
        expectedCompletion: "2025-04-15",
        technologies: ["Generative Art", "AI", "Machine Learning", "Interactive Art"],
        description: "A tool that allows artists to create complex generative art pieces using AI and machine learning algorithms.",
        overview: "This project involves the development of a tool that assists artists in creating generative art. Using AI and machine learning, the tool generates intricate designs based on input parameters, allowing artists to explore new creative possibilities with minimal effort.",
        keyFeatures: [
            "AI-driven design generation",
            "Interactive parameter adjustment",
            "Real-time preview",
            "Export to various formats"
        ],
        progress: 45,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 20 },
            { name: "Finishing", progress: 0 }
        ],
        challenges: [
            {
                title: "Algorithm Flexibility",
                description: "Ensuring the algorithms can generate a wide range of styles and patterns.",
                solution: "Incorporated a diverse set of algorithms and provided users with extensive customization options."
            },
            {
                title: "User Interface",
                description: "Creating an interface that is both powerful and easy to use.",
                solution: "Conducted user testing and iterative design improvements to balance functionality with usability."
            }
        ],
        futureDevelopments: [
            {
                title: "Collaborative Art Creation",
                description: "Allow multiple users to work together on generative art pieces in real-time.",
                status: "planned",
                plannedDate: "Q3 2025"
            },
            {
                title: "Integration with VR",
                description: "Enable artists to create and experience generative art in virtual reality.",
                status: "planned",
                plannedDate: "Q1 2026"
            }
        ]
    },
    {
        name: "AI-Enhanced Photography Tool",
        image: "images/projects/goat4.jpg",
        type: "design",
        creator: "NyX",
        created: "2024-05-15",
        expectedCompletion: "2025-01-01",
        technologies: ["AI", "Photography", "Image Processing", "Machine Learning"],
        description: "A photography tool that uses AI to enhance images automatically, providing suggestions for lighting, composition, and post-processing.",
        overview: "This project focuses on creating a photography tool that uses AI to enhance images. The tool analyzes photos and offers real-time suggestions for lighting, composition, and post-processing, helping photographers achieve professional results with ease.",
        keyFeatures: [
            "AI-driven image enhancement",
            "Real-time suggestions",
            "Automatic post-processing",
            "Integration with popular photo editing software"
        ],
        progress: 50,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 60 },
            { name: "Refining", progress: 30 },
            { name: "Finishing", progress: 10 }
        ],
        challenges: [
            {
                title: "Creative Control",
                description: "Balancing AI enhancements with the photographer's artistic vision.",
                solution: "Included manual override options and customizable AI settings."
            },
            {
                title: "Performance",
                description: "Ensuring fast processing times without compromising image quality.",
                solution: "Optimized algorithms for both speed and quality, using GPU acceleration."
            }
        ],
        futureDevelopments: [
            {
                title: "Multilingual Support",
                description: "Enable the tool to offer suggestions and feedback in multiple languages.",
                status: "planned",
                plannedDate: "Q2 2025"
            },
            {
                title: "Augmented Reality Preview",
                description: "Allow photographers to preview enhancements in real-time through augmented reality.",
                status: "planned",
                plannedDate: "Q4 2025"
            }
        ]
    },
    {
        name: "IoT-Connected Smart Garden System",
        image: "images/projects/man1.jpg",
        type: "electro",
        creator: "NyX",
        created: "2024-04-05",
        expectedCompletion: "2024-12-31",
        technologies: ["IoT", "Smart Home", "Environmental Sensors", "AI"],
        description: "A smart garden system that uses IoT and AI to monitor plant health, optimize watering, and enhance growth conditions.",
        overview: "This project involves the development of a smart garden system that helps users maintain healthy plants. The system uses IoT sensors to monitor environmental conditions and plant health, and AI to optimize watering and suggest improvements for better growth.",
        keyFeatures: [
            "Real-time plant monitoring",
            "Automated watering system",
            "AI-driven growth optimization",
            "Mobile app integration"
        ],
        progress: 65,
        subparts: [
            { name: "Concept", progress: 100 },
            { name: "Initial Implementation", progress: 75 },
            { name: "Refining", progress: 50 },
            { name: "Finishing", progress: 30 }
        ],
        challenges: [
            {
                title: "Sensor Accuracy",
                description: "Ensuring the sensors provide accurate readings of soil moisture, light, and temperature.",
                solution: "Used high-precision sensors and conducted extensive calibration."
            },
            {
                title: "User Accessibility",
                description: "Making the system easy to use for both novice and experienced gardeners.",
                solution: "Developed a user-friendly app with guided setup and maintenance instructions."
            }
        ],
        futureDevelopments: [
            {
                title: "Plant Species Database",
                description: "Expand the system's knowledge base to include care recommendations for a wider range of plant species.",
                status: "planned",
                plannedDate: "Q1 2025"
            },
            {
                title: "Community Sharing",
                description: "Allow users to share their garden data and tips with an online community.",
                status: "planned",
                plannedDate: "Q3 2025"
            }
        ]
    }
];

let projectsShown = 0;
const projectsPerLoad = 8;
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    handleInitialLoad();
    initializeEventListeners();
});

function handleInitialLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter') || 'all';
    
    currentFilter = filter;
    updateActiveButton(filter);
    loadProjects(filter);
}

function updateActiveButton(filter) {
    document.querySelectorAll('.category-btn, .mobile-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
}

function initializeEventListeners() {
    document.querySelectorAll('.category-btn, .mobile-filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });

    document.querySelectorAll('.desktop-menu .dropdown a, .mobile-menu .dropdown a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = new URLSearchParams(new URL(item.href).search).get('filter') || 'all';
            filterProjects(filter);
        });
    });

    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => loadProjects());
    }

    // Event delegation for "View Details" buttons and back button
    document.querySelector('.projects-content').addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details-btn')) {
            const projectName = e.target.dataset.project;
            showProjectDetails(projectName);
        } else if (e.target.closest('.back-btn')) {
            hideProjectDetails();
        }
    });
}

function filterProjects(filter) {
    if (filter !== currentFilter) {
        currentFilter = filter;
        projectsShown = 0;
        updateActiveButton(filter);
        loadProjects(filter);
        
        const url = new URL(window.location);
        url.searchParams.set('filter', filter);
        window.history.pushState({}, '', url);
    }
    hideProjectDetails();
}

function loadProjects(filter = currentFilter) {
    const projectsContainer = document.getElementById('projects-container');
    const projectsToShow = projectsData.filter(project => filter === 'all' || project.type === filter);
    const endIndex = Math.min(projectsShown + projectsPerLoad, projectsToShow.length);
    
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
    
    document.getElementById('load-more').style.display = projectsShown >= projectsToShow.length ? 'none' : 'block';
}

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
            <p class="project-description">${project.description}</p>
            <button class="view-details-btn" data-project="${project.name}">View Details</button>
        </div>
    `;
    return projectElement;
}

function showProjectDetails(projectName) {
    const project = projectsData.find(p => p.name === projectName);
    if (!project) return;

    const detailsContainer = document.getElementById('project-details-container') || createProjectDetailsContainer();
    detailsContainer.innerHTML = createProjectDetailsContent(project);
    detailsContainer.style.display = 'block';
    detailsContainer.style.opacity = '0'; // Set initial opacity to 0

    document.querySelector('.projects-section').classList.add('details-view');
    document.getElementById('projects-container').style.display = 'none';
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }

    gsap.to(detailsContainer, {
        opacity: 1, // Animate to full opacity
        duration: 0.5,
        onComplete: () => {
            detailsContainer.style.opacity = '1'; // Ensure opacity remains 1 after animation
            initializeProjectDetailsPage();
        }
    });
}

function hideProjectDetails() {
    const detailsContainer = document.getElementById('project-details-container');
    if (detailsContainer) {
        gsap.to(detailsContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                detailsContainer.style.display = 'none';
                detailsContainer.style.opacity = '0'; // Reset opacity to 0
                document.querySelector('.projects-section').classList.remove('details-view');
                document.getElementById('projects-container').style.display = 'grid';
                const loadMoreBtn = document.getElementById('load-more');
                if (loadMoreBtn) {
                    loadMoreBtn.style.display = projectsShown < projectsData.filter(project => currentFilter === 'all' || project.type === currentFilter).length ? 'block' : 'none';
                }
            }
        });
    }
}

function createProjectDetailsContainer() {
    const container = document.createElement('div');
    container.id = 'project-details-container';
    container.style.display = 'none';
    document.querySelector('.projects-content').appendChild(container);
    return container;
}

function createProjectDetailsContent(project) {
    return `
        <div class="project-details-container">
            <button class="back-btn"><i class="fas fa-arrow-left"></i></button>
            <div class="project-details-layout">
                <div class="image-gallery">
                    <div class="main-image">
                        <img src="${project.image}" alt="${project.name}" id="mainImage">
                    </div>
                    <div class="thumbnail-gallery">
                        <img src="${project.image}" alt="Thumbnail 1" class="thumbnail" data-full="${project.image}">
                    </div>
                </div>
                <div class="project-details">
                    <h1>${project.name}</h1>
                    <p class="project-meta"><strong>Creator:</strong> ${project.creator} | <strong>Date Started:</strong> ${project.created} | <strong>Expected Completion:</strong> ${project.expectedCompletion}</p>

                    <h2>Project Overview</h2>
                    <p>${project.overview}</p>
                    
                    <h2>Key Features</h2>
                    <ul>
                        ${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h2>Technologies Used</h2>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                    
                    <h2>Project Progress</h2>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div id="progressBar" class="progress" style="width: ${project.progress}%"></div>
                        </div>
                        <span id="progressValue" class="progress-value">${project.progress}%</span>
                    </div>
                    
                    <div class="progress-subparts">
                        ${project.subparts.map(subpart => `
                            <div class="subpart">
                                <span>${subpart.name}</span>
                                <div class="subpart-progress">
                                    <div class="subpart-progress-inner ${subpart.name.toLowerCase()}" style="width: ${subpart.progress}%"></div>
                                </div>
                                <i class="fas ${subpart.progress === 100 ? 'fa-check' : 'fa-times'}"></i>
                            </div>
                        `).join('')}
                    </div>
                    
                    <h2>Challenges and Solutions</h2>
                    <div class="challenges">
                        ${project.challenges.map(challenge => `
                            <div class="challenge">
                                <h3>${challenge.title}</h3>
                                <p>${challenge.description}</p>
                                <h4>Solution:</h4>
                                <p>${challenge.solution}</p>
                            </div>
                        `).join('')}
                    </div>
                    
                    <h2>Future Developments</h2>
                    <div class="future-developments">
                        ${project.futureDevelopments.map(development => `
                            <div class="future-item ${development.status}">
                                <div class="future-content">
                                    <h4>${development.title}</h4>
                                    <p>${development.description}</p>
                                    ${development.status === 'planned' ? `<p>Planned for: ${development.plannedDate}</p>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeProjectDetailsPage() {
    initializeImageGallery();
    animateProgressBars();
    initializeChallengesHoverEffect();
    initializeFutureDevelopmentsHoverEffect();
}

function initializeImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const fullImage = this.getAttribute('data-full');
            gsap.to(mainImage, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    mainImage.src = fullImage;
                    mainImage.alt = this.alt;
                    gsap.to(mainImage, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
        });
    });
}

function animateProgressBars() {
    const progressBar = document.getElementById('progressBar');
    const progressValue = document.getElementById('progressValue');
    
    if (progressBar && progressValue) {
        const progress = parseInt(progressValue.textContent);
        gsap.from(progressBar, {
            width: 0,
            duration: 1.5,
            ease: "power2.out"
        });
        gsap.from(progressValue, {
            textContent: 0,
            duration: 1.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 1
        });
    }

    const subpartProgressBars = document.querySelectorAll('.subpart-progress-inner');
    subpartProgressBars.forEach(bar => {
        const progress = parseInt(bar.style.width);
        gsap.from(bar, {
            width: 0,
            duration: 1.5,
            ease: "power2.out"
        });
    });
}

function initializeChallengesHoverEffect() {
    const challenges = document.querySelectorAll('.challenge');
    challenges.forEach(challenge => {
        challenge.addEventListener('mouseenter', () => {
            gsap.to(challenge, {
                x: 10,
                boxShadow: "-5px 5px 10px rgba(0,0,0,0.1)",
                duration: 0.3
            });
        });
        challenge.addEventListener('mouseleave', () => {
            gsap.to(challenge, {
                x: 0,
                boxShadow: "none",
                duration: 0.3
            });
        });
    });
}

function initializeFutureDevelopmentsHoverEffect() {
    const futureItems = document.querySelectorAll('.future-item');
    futureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                duration: 0.3
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                duration: 0.3
            });
        });
    });
}