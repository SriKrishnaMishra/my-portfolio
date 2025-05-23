import { motion } from 'framer-motion';

const ToogleButton = ({ setOpen }) => {
    return (
        <motion.button 
            onClick={() => setOpen((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="toggle-button"
        >
            <motion.svg 
                width="23" 
                height="23" 
                viewBox="0 0 23 23"
            >
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </motion.svg>
        </motion.button>
    );
};

export default ToogleButton;
