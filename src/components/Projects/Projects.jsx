import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

const projects = [
    // AI/ML Projects - Natural Language Processing
    {
        id: 1,
        title: "Financial Agent",
        description: "An AI-powered financial assistant that helps users manage their finances, analyze expenses, and make informed investment decisions using advanced language models and the phi library.",
        link: "https://github.com/SriKrishnaMishra/financial_agent",
        image: "/project-images/financial-agent-1.svg",
        category: "ai",
        subcategory: "nlp",
        featured: true,
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "LangChain", color: "#412991" },
            { name: "Groq API", color: "#FF6B6B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/financial_agent"
    },
    {
        id: 2,
        title: "What Beats Rock Game",
        description: "A creative twist on Rock-Paper-Scissors that uses AI to dynamically determine relationships between new game items. Built with React and integrated with the Groq API for intelligent predictions.",
        link: "https://github.com/SriKrishnaMishra/srimishra-wasserstoff-AiInternTask",
        image: "/project-images/what-beats-rock-1.svg",
        category: "ai",
        subcategory: "nlp",
        featured: true,
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "LLM", color: "#FF6B6B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/srimishra-wasserstoff-AiInternTask",
        liveDemo: "https://what-beats-rock-using-llm.netlify.app/"
    },
    {
        id: 3,
        title: "Document Research & Theme Identification",
        description: "A sophisticated NLP application that analyzes documents to extract key themes, generate summaries, and answer questions about the content using advanced language models.",
        link: "https://github.com/SriKrishnaMishra/document-research",
        image: "/project-images/doc-analyzer-1.svg",
        category: "ai",
        subcategory: "nlp",
        tags: [
            { name: "NLP", color: "#38B2AC" },
            { name: "Python", color: "#3776AB" },
            { name: "Streamlit", color: "#FF4B4B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/document-research"
    },

    // AI/ML Projects - Machine Learning
    {
        id: 4,
        title: "Movie Recommender",
        description: "An intelligent movie recommendation system that suggests personalized movie choices based on TF-IDF vectorization and cosine similarity. Built with Python and Streamlit for an interactive experience.",
        link: "https://github.com/SriKrishnaMishra/Movie-Recommender",
        image: "/project-images/movie-recommender-1.svg",
        category: "ai",
        subcategory: "ml",
        featured: true,
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "TF-IDF", color: "#FF6B6B" },
            { name: "Streamlit", color: "#FF4B4B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/Movie-Recommender"
    },
    {
        id: 5,
        title: "Predictive Analytics Dashboard",
        description: "A comprehensive dashboard that leverages machine learning to predict business metrics, identify trends, and provide actionable insights for decision-making.",
        link: "https://github.com/SriKrishnaMishra/predictive-analytics",
        image: "/project-images/placeholder.svg",
        category: "ai",
        subcategory: "ml",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "Scikit-learn", color: "#F7931E" },
            { name: "Pandas", color: "#150458" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/predictive-analytics"
    },
    {
        id: 6,
        title: "Customer Segmentation Tool",
        description: "A machine learning application that analyzes customer data to identify distinct segments, enabling targeted marketing strategies and personalized customer experiences.",
        link: "https://github.com/SriKrishnaMishra/customer-segmentation",
        image: "/project-images/placeholder.svg",
        category: "ai",
        subcategory: "ml",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "Clustering", color: "#FF6B6B" },
            { name: "Data Visualization", color: "#38B2AC" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/customer-segmentation"
    },

    // AI/ML Projects - Computer Vision
    {
        id: 7,
        title: "Object Detection System",
        description: "A real-time object detection system that identifies and tracks objects in images and video streams using state-of-the-art computer vision algorithms.",
        link: "https://github.com/SriKrishnaMishra/object-detection",
        image: "/project-images/placeholder.svg",
        category: "ai",
        subcategory: "cv",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "OpenCV", color: "#5C3EE8" },
            { name: "TensorFlow", color: "#FF6F00" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/object-detection"
    },
    {
        id: 8,
        title: "Facial Recognition App",
        description: "A facial recognition application that detects and identifies faces in images and video, with features for emotion detection and demographic analysis.",
        link: "https://github.com/SriKrishnaMishra/facial-recognition",
        image: "/project-images/placeholder.svg",
        category: "ai",
        subcategory: "cv",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "Computer Vision", color: "#5C3EE8" },
            { name: "Deep Learning", color: "#FF6B6B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/facial-recognition"
    },
    {
        id: 9,
        title: "Image Enhancement Tool",
        description: "An AI-powered image enhancement tool that improves image quality, removes noise, and enhances details using advanced computer vision techniques.",
        link: "https://github.com/SriKrishnaMishra/image-enhancement",
        image: "/project-images/placeholder.svg",
        category: "ai",
        subcategory: "cv",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "GANs", color: "#FF6B6B" },
            { name: "Image Processing", color: "#38B2AC" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/image-enhancement"
    },

    // Web Development Projects - Frontend
    {
        id: 10,
        title: "Razorpay Clone",
        description: "A pixel-perfect clone of Razorpay's interface featuring responsive design, modern UI/UX principles, and seamless payment integration capabilities.",
        link: "https://razorpay-rep.netlify.app/",
        image: "/project-images/razorpay-1.svg",
        category: "web",
        subcategory: "frontend",
        featured: true,
        tags: [
            { name: "HTML5", color: "#E34F26" },
            { name: "TailwindCSS", color: "#38B2AC" },
            { name: "JavaScript", color: "#F7DF1E" }
        ],
        liveDemo: "https://razorpay-rep.netlify.app/"
    },
    {
        id: 11,
        title: "Modern Portfolio",
        description: "A responsive and interactive portfolio website built with React and Framer Motion, featuring smooth animations, dark mode, and a clean, modern design.",
        link: "https://krishna-portfolio.netlify.app/",
        image: "/project-images/portfolio-1.svg",
        category: "web",
        subcategory: "frontend",
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "SCSS", color: "#CC6699" },
            { name: "Framer Motion", color: "#0055FF" }
        ],
        liveDemo: "https://krishna-portfolio.netlify.app/",
        sourceCode: "https://github.com/SriKrishnaMishra/portfolio"
    },
    {
        id: 12,
        title: "E-commerce UI",
        description: "A modern e-commerce user interface with product listings, cart functionality, and checkout process, built with React and styled-components.",
        link: "https://github.com/SriKrishnaMishra/ecommerce-ui",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "frontend",
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "Styled Components", color: "#DB7093" },
            { name: "Redux", color: "#764ABC" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/ecommerce-ui"
    },

    // Web Development Projects - Backend
    {
        id: 13,
        title: "Restaurant Ordering System",
        description: "A full-stack web application for restaurant ordering with real-time updates, payment integration, and an intuitive admin dashboard for order management.",
        link: "https://github.com/SriKrishnaMishra/restaurant-ordering",
        image: "/project-images/restaurant-1.svg",
        category: "web",
        subcategory: "backend",
        tags: [
            { name: "Node.js", color: "#339933" },
            { name: "Express", color: "#000000" },
            { name: "MongoDB", color: "#47A248" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/restaurant-ordering"
    },
    {
        id: 14,
        title: "API Gateway Service",
        description: "A robust API gateway that handles routing, authentication, rate limiting, and request/response transformation for microservices architecture.",
        link: "https://github.com/SriKrishnaMishra/api-gateway",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "backend",
        tags: [
            { name: "Node.js", color: "#339933" },
            { name: "Express", color: "#000000" },
            { name: "JWT", color: "#000000" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/api-gateway"
    },
    {
        id: 15,
        title: "Content Management System",
        description: "A headless CMS with a RESTful API for content creation, management, and delivery, supporting multiple content types and user roles.",
        link: "https://github.com/SriKrishnaMishra/headless-cms",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "backend",
        tags: [
            { name: "Node.js", color: "#339933" },
            { name: "GraphQL", color: "#E10098" },
            { name: "MongoDB", color: "#47A248" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/headless-cms"
    },

    // Web Development Projects - Full Stack
    {
        id: 16,
        title: "Task Management Platform",
        description: "A comprehensive task management platform with features for project planning, task assignment, progress tracking, and team collaboration.",
        link: "https://github.com/SriKrishnaMishra/task-management",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "fullstack",
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "PostgreSQL", color: "#336791" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/task-management"
    },
    {
        id: 17,
        title: "Social Media Dashboard",
        description: "A full-stack social media dashboard that aggregates content from multiple platforms, provides analytics, and enables scheduling and posting.",
        link: "https://github.com/SriKrishnaMishra/social-dashboard",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "fullstack",
        tags: [
            { name: "React", color: "#61DAFB" },
            { name: "Express", color: "#000000" },
            { name: "Redis", color: "#DC382D" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/social-dashboard"
    },
    {
        id: 18,
        title: "Learning Management System",
        description: "A comprehensive LMS with course creation, student enrollment, progress tracking, assessment tools, and interactive learning features.",
        link: "https://github.com/SriKrishnaMishra/learning-platform",
        image: "/project-images/placeholder.svg",
        category: "web",
        subcategory: "fullstack",
        tags: [
            { name: "Next.js", color: "#000000" },
            { name: "Node.js", color: "#339933" },
            { name: "MongoDB", color: "#47A248" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/learning-platform"
    }
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05, /* Reduced delay between cards */
                ease: "easeOut"
            }}
            whileHover={{
                y: -8, /* Reduced hover movement */
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-content">
                <motion.div
                    className="project-image"
                    whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 }
                    }}
                >
                    <div className="image-wrapper">
                        <motion.div
                            className="parallax-effect"
                            style={{
                                y: isHovered ? -10 : 0,
                                transition: "y 0.3s ease-out"
                            }}
                        >
                            <img src={project.image} alt={project.title} />
                        </motion.div>
                        <div className="image-shine"></div>
                    </div>
                    <div className="image-border"></div>
                    <div className="overlay" style={{ opacity: isHovered ? 1 : 0 }}>
                        <motion.div
                            className="overlay-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? 0 : 20,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            {project.sourceCode && (
                                <motion.a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="view-project-btn source-code">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                        View Code
                                    </button>
                                </motion.a>
                            )}
                            {project.liveDemo && (
                                <motion.a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="view-project-btn live-demo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                        </svg>
                                        Live Demo
                                    </button>
                                </motion.a>
                            )}
                            {!project.sourceCode && !project.liveDemo && (
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="view-project-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                        </svg>
                                        View Project
                                    </button>
                                </motion.a>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                className="tag"
                                style={{
                                    backgroundColor: isHovered ? tag.color : 'rgba(255, 255, 255, 0.1)',
                                    color: isHovered ? '#fff' : '#ddd'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tag.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Main Projects Component
const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Show back to top button when scrolled down
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'ai', name: 'AI & ML' }
    ];

    // Filter projects based on category and search query
    const filteredProjects = projects.filter(project => {
        const matchesFilter = filter === 'all' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Group AI/ML projects by subcategory
    const nlpProjects = filteredProjects.filter(project => project.category === 'ai' && project.subcategory === 'nlp');
    const mlProjects = filteredProjects.filter(project => project.category === 'ai' && project.subcategory === 'ml');
    const cvProjects = filteredProjects.filter(project => project.category === 'ai' && project.subcategory === 'cv');

    // Group Web Development projects by subcategory
    const frontendProjects = filteredProjects.filter(project => project.category === 'web' && project.subcategory === 'frontend');
    const backendProjects = filteredProjects.filter(project => project.category === 'web' && project.subcategory === 'backend');
    const fullstackProjects = filteredProjects.filter(project => project.category === 'web' && project.subcategory === 'fullstack');

    // Animation variants - reduced intensity
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05 // Reduced stagger time
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 }, // Reduced movement
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3 // Faster animation
            }
        }
    };

    return (
        <div className="projects">
            <div className="projects-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 10 }} /* Reduced movement */
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }} /* Faster animation */
                >
                    <h1>My Projects</h1>
                    <p>Explore my latest work and personal projects</p>
                </motion.div>

                {/* Back to Top Button - simplified animation */}
                {showBackToTop && (
                    <motion.button
                        className="back-to-top"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ y: -3 }} /* Reduced movement */
                        whileTap={{ scale: 0.97 }} /* Less scale change */
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6"/>
                        </svg>
                    </motion.button>
                )}

                <div className="projects-filter">
                    <div className="filter-categories">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                                onClick={() => setFilter(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {filteredProjects.length === 0 ? (
                    <div className="no-results">
                        <h3>No projects found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* AI & ML Section Header */}
                        {(filter === 'all' || filter === 'ai') && (nlpProjects.length > 0 || mlProjects.length > 0 || cvProjects.length > 0) && (
                            <motion.div variants={itemVariants} className="main-category-header">
                                <h2>AI & Machine Learning</h2>
                                <p>Projects focused on artificial intelligence and machine learning technologies</p>
                            </motion.div>
                        )}

                        {/* AI & ML - NLP Projects */}
                        {(filter === 'all' || filter === 'ai') && nlpProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Natural Language Processing</h2>
                                    <p>Projects focused on understanding and generating human language</p>
                                </div>
                                <div className="projects-grid">
                                    {nlpProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* AI & ML - Machine Learning Projects */}
                        {(filter === 'all' || filter === 'ai') && mlProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Machine Learning</h2>
                                    <p>Projects leveraging data-driven algorithms and statistical models</p>
                                </div>
                                <div className="projects-grid">
                                    {mlProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* AI & ML - Computer Vision Projects */}
                        {(filter === 'all' || filter === 'ai') && cvProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Computer Vision</h2>
                                    <p>Projects enabling computers to interpret and understand visual information</p>
                                </div>
                                <div className="projects-grid">
                                    {cvProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Web Development Section Header */}
                        {(filter === 'all' || filter === 'web') && (frontendProjects.length > 0 || backendProjects.length > 0 || fullstackProjects.length > 0) && (
                            <motion.div variants={itemVariants} className="main-category-header">
                                <h2>Web Development</h2>
                                <p>Projects showcasing web development skills and technologies</p>
                            </motion.div>
                        )}

                        {/* Web Development - Frontend Projects */}
                        {(filter === 'all' || filter === 'web') && frontendProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Frontend Development</h2>
                                    <p>Projects focused on user interfaces and client-side applications</p>
                                </div>
                                <div className="projects-grid">
                                    {frontendProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Web Development - Backend Projects */}
                        {(filter === 'all' || filter === 'web') && backendProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Backend Development</h2>
                                    <p>Projects focused on server-side logic, APIs, and databases</p>
                                </div>
                                <div className="projects-grid">
                                    {backendProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Web Development - Full Stack Projects */}
                        {(filter === 'all' || filter === 'web') && fullstackProjects.length > 0 && (
                            <motion.div variants={itemVariants} className="category-section">
                                <div className="category-header">
                                    <h2>Full Stack Development</h2>
                                    <p>End-to-end projects combining frontend and backend technologies</p>
                                </div>
                                <div className="projects-grid">
                                    {fullstackProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
