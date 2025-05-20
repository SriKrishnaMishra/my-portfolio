import { motion } from "framer-motion";
import RobustComputer from "../Computer/RobustComputer";
import "./Hero.scss";

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "200%",
        transition: {
            repeat: Infinity,
            duration: 20,
        },
    },
};

const textVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 1,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {

    return (
    <div className="Hero">
        <div className="wrapper">
            <motion.div
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <motion.h2 variants={textVariants}>Sri Krishna Mishra</motion.h2>
                <motion.h1 variants={textVariants}>AI & ML Developer | Full Stack Engineer</motion.h1>
                <motion.p variants={textVariants} className="bio">
                    3rd year Student passionate about AI & ML, Generative AI, and Full Stack Development.
                    Building innovative solutions at the intersection of artificial intelligence and web technologies.
                </motion.p>
                <motion.div variants={textVariants} className="computer-canvas">
                    <RobustComputer />
                </motion.div>
                <motion.div variants={textVariants} className="social-links">
                    <a
                        id="linkedin-profile"
                        href="https://www.linkedin.com/in/sri-krishna-mishra-0i"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn Profile"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        id="github-profile"
                        href="https://github.com/SriKrishnaMishra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub Profile"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </motion.div>
                <motion.div variants={textVariants} className="button">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img
                    variants={textVariants}
                    animate="scrollButton"
                    src="/scroll.png"
                    alt="Scroll down"
                />
                <motion.div
                    className="scroll-indicator"
                    variants={textVariants}
                    animate="scrollButton"
                >
                    <motion.div
                        className="scroll-dot"
                        initial={{ y: 0 }}
                        animate={{ y: [0, 24, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
        <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
        >
            Writer Content Creator Influencer
        </motion.div>
        <motion.div className="imageContainer">
            <img src="/hero.png" alt="Sri Krishna Mishra" />
        </motion.div>
    </div>
    );
};

export default Hero;