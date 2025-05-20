import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    const items = [
        { id: "home", text: "Home", icon: "🏠" },
        { id: "about", text: "About", icon: "👨‍💻" },
        { 
            id: "projects", 
            text: "Projects", 
            icon: "💼",
            subItems: [
                { name: "Shopping Pro", url: "https://shopping-pro.netlify.app/" },
                { name: "Razorpay Clone", url: "https://razorpay-rep.netlify.app/" },
                { name: "What Beats Rock", url: "https://what-beats-rock-using-llm.netlify.app/" },
                { name: "Movie Recommender", url: "https://github.com/SriKrishnaMishra/Movie-Recommender" },
                { name: "Financial Agent", url: "https://github.com/SriKrishnaMishra/financial_agent" }
            ]
        },
        { id: "skills", text: "Skills", icon: "🛠️" },
        { id: "research", text: "Research", icon: "📚" },
        { id: "contact", text: "Contact", icon: "📧" },
    ];

    return (
        <motion.div className="links" variants={variants} initial="closed" animate="open">
            {items.map((item) => (
                <motion.div key={item.id} className="link-item">
                    <motion.a
                        href={`#${item.id}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="main-link"
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.text}</span>
                    </motion.a>
                    {item.subItems && (
                        <motion.div 
                            className="sub-links"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            {item.subItems.map((subItem, index) => (
                                <motion.a
                                    key={subItem.name}
                                    href={subItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="sub-link"
                                >
                                    {subItem.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Links;
