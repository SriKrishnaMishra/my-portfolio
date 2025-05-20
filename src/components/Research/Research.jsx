import { motion } from 'framer-motion';
import './Research.scss';

const researchPapers = [
    {
        title: "A Machine Learning Approach to Text Classification with Class Imbalance Handling",
        abstract: "This research explores innovative machine learning techniques for text classification, specifically addressing the challenges of class imbalance in datasets. The study proposes novel approaches combining sampling methods and advanced algorithms to improve classification accuracy.",
        link: "#",
        tags: ["Machine Learning", "Text Classification", "Class Imbalance", "NLP"],
        year: "2024"
    },
    {
        title: "AI & Machine Learning Research",
        abstract: "Research on advanced AI algorithms and their applications in real-world scenarios.",
        link: "#",
        tags: ["AI", "ML", "Deep Learning"],
        year: "2024"
    },
    {
        title: "Generative AI Applications",
        abstract: "Study on the implementation of generative AI in creative and technical domains.",
        link: "#",
        tags: ["Generative AI", "Neural Networks"],
        year: "2024"
    }
];

const Research = () => {
    return (
        <div className="research">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Research Papers
            </motion.h2>
            <div className="papers-container">
                {researchPapers.map((paper, index) => (
                    <motion.div
                        key={index}
                        className="paper-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="paper-year">{paper.year}</div>
                        <h3 className="paper-title">{paper.title}</h3>
                        <p className="paper-abstract">{paper.abstract}</p>
                        <div className="paper-tags">
                            {paper.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <motion.a
                            href={paper.link}
                            className="read-more"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read Paper
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Research;
