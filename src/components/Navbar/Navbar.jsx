import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
            setScrolled(latest > 0);
        });

        const handleScroll = () => {
            const sections = ["home", "projects", "research"];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            unsubscribe();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    const navItems = [
        { title: "Home", href: "#home", icon: "🏠" },
        { title: "Projects", href: "#projects", icon: "💻" },
        { title: "Research", href: "#research", icon: "📚" }
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="wrapper">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div 
                        className="name-container"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="name-text">Sri Krishna Mishra</span>
                        <motion.div 
                            className="name-bg"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.span 
                        className="title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        AI & Full Stack Developer
                    </motion.span>
                </motion.div>

                <div className="nav-links">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            className={`nav-item ${activeSection === item.href.slice(1) ? "active" : ""}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.title}
                            {activeSection === item.href.slice(1) && (
                                <motion.div
                                    className="active-indicator"
                                    layoutId="activeIndicator"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                <motion.div 
                    className="social"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.a
                        className="social-link linkedin"
                        href="https://www.linkedin.com/in/sri-krishna-mishra-0i/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fab fa-linkedin"></i>
                        <span className="tooltip">LinkedIn</span>
                    </motion.a>
                    <motion.a
                        className="social-link github"
                        href="https://github.com/SriKrishnaMishra"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fab fa-github"></i>
                        <span className="tooltip">GitHub</span>
                    </motion.a>
                </motion.div>

                <motion.button
                    className={`menu-button ${open ? 'open' : ''}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.button>

                <motion.div 
                    className={`mobile-menu ${open ? 'open' : ''}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="nav-links">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className={`nav-item ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                                onClick={() => setOpen(false)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                {item.title}
                            </motion.a>
                        ))}
                    </div>
                    <div className="social">
                        <motion.a
                            href="https://www.linkedin.com/in/sri-krishna-mishra-0i/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link linkedin"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className="fab fa-linkedin"></i>
                            <span className="tooltip">LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href="https://github.com/SriKrishnaMishra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link github"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className="fab fa-github"></i>
                            <span className="tooltip">GitHub</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="nav-links">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className={`nav-item ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                                    onClick={() => setOpen(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                        <div className="social">
                            <motion.a
                                href="https://www.linkedin.com/in/sri-krishna-mishra-0i/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link linkedin"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className="fab fa-linkedin"></i>
                                <span className="tooltip">LinkedIn</span>
                            </motion.a>
                            <motion.a
                                href="https://github.com/SriKrishnaMishra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link github"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className="fab fa-github"></i>
                                <span className="tooltip">GitHub</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;