import React from 'react';
import './BasicProjects.css';

const projects = [
  {
    id: 1,
    title: "Financial Agent",
    description: "An AI-powered financial assistant that helps users manage their finances.",
    link: "https://github.com/SriKrishnaMishra/financial_agent",
    image: "/project-images/placeholder.svg",
    category: "ai",
    tags: ["Python", "LangChain", "AI"],
    sourceCode: "https://github.com/SriKrishnaMishra/financial_agent"
  },
  {
    id: 2,
    title: "Movie Recommender",
    description: "An intelligent movie recommendation system using machine learning algorithms.",
    link: "https://github.com/SriKrishnaMishra/Movie-Recommender",
    image: "/project-images/placeholder.svg",
    category: "ai",
    tags: ["Python", "Machine Learning", "Data Science"],
    sourceCode: "https://github.com/SriKrishnaMishra/Movie-Recommender"
  },
  {
    id: 3,
    title: "Rock Paper Scissors LLM",
    description: "An innovative take on the classic game using Large Language Models.",
    link: "https://what-beats-rock-using-llm.netlify.app/",
    image: "/project-images/placeholder.svg",
    category: "ai",
    tags: ["LLM", "React", "AI Gaming"],
    liveDemo: "https://what-beats-rock-using-llm.netlify.app/"
  },
  {
    id: 4,
    title: "Razorpay Clone",
    description: "A pixel-perfect clone of Razorpay's interface with responsive design.",
    link: "https://razorpay-rep.netlify.app/",
    image: "/project-images/placeholder.svg",
    category: "web",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    liveDemo: "https://razorpay-rep.netlify.app/"
  }
];

// Simple Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          {project.sourceCode && (
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-button">
              View Code
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button">
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const BasicProjects = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Explore my latest work and personal projects</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicProjects;
