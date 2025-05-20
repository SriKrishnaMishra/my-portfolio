import { motion } from 'framer-motion';
import { useState } from 'react';
import './ProjectsFixed.scss';

// Project data
const projects = [
    {
        id: 1,
        title: "Financial Agent",
        description: "An AI-powered financial assistant that helps users manage their finances, analyze expenses, and make informed investment decisions using advanced language models.",
        link: "https://github.com/SriKrishnaMishra/financial_agent",
        image: "/project-images/placeholder.svg",
        category: "ai",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "LangChain", color: "#412991" },
            { name: "AI", color: "#FF6B6B" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/financial_agent"
    },
    {
        id: 2,
        title: "Movie Recommender",
        description: "An intelligent movie recommendation system that suggests personalized movie choices based on user preferences and viewing history using machine learning algorithms.",
        link: "https://github.com/SriKrishnaMishra/Movie-Recommender",
        image: "/project-images/placeholder.svg",
        category: "ai",
        tags: [
            { name: "Python", color: "#3776AB" },
            { name: "Machine Learning", color: "#FF6B6B" },
            { name: "Data Science", color: "#38B2AC" }
        ],
        sourceCode: "https://github.com/SriKrishnaMishra/Movie-Recommender"
    },
    {
        id: 3,
        title: "Rock Paper Scissors LLM",
        description: "An innovative take on the classic game using Large Language Models to create an intelligent opponent that learns and adapts to player strategies.",
        link: "https://what-beats-rock-using-llm.netlify.app/",
        image: "/project-images/placeholder.svg",
        category: "ai",
        tags: [
            { name: "LLM", color: "#412991" },
            { name: "React", color: "#61DAFB" },
            { name: "AI Gaming", color: "#FF6B6B" }
        ],
        liveDemo: "https://what-beats-rock-using-llm.netlify.app/"
    },
    {
        id: 4,
        title: "Razorpay Clone",
        description: "A pixel-perfect clone of Razorpay's interface featuring responsive design, modern UI/UX principles, and seamless payment integration capabilities.",
        link: "https://razorpay-rep.netlify.app/",
        image: "/project-images/placeholder.svg",
        category: "web",
        tags: [
            { name: "HTML5", color: "#E34F26" },
            { name: "TailwindCSS", color: "#38B2AC" },
            { name: "JavaScript", color: "#F7DF1E" }
        ],
        liveDemo: "https://razorpay-rep.netlify.app/"
    }
];

// Simple project card component
const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-content">
                <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    {isHovered && (
                        <div className="overlay">
                            <div className="overlay-content">
                                {project.sourceCode && (
                                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                        <button className="view-project-btn source-code">
                                            View Code
                                        </button>
                                    </a>
                                )}
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                        <button className="view-project-btn live-demo">
                                            Live Demo
                                        </button>
                                    </a>
                                )}
                                {!project.sourceCode && !project.liveDemo && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button className="view-project-btn">
                                            View Project
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="tag"
                                style={{ backgroundColor: isHovered ? tag.color : 'rgba(255, 255, 255, 0.1)' }}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Main Projects component
const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'ai', name: 'AI & ML' },
        { id: 'mobile', name: 'Mobile Apps' }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = filter === 'all' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="projects">
            <div className="projects-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>My Projects</h1>
                    <p>Explore my latest work and personal projects</p>
                </motion.div>

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

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-results">
                        <h3>No projects found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
