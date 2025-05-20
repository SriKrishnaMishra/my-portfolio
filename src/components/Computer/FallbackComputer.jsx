import React from 'react';
import { motion } from 'framer-motion';
import './FallbackComputer.scss';

const FallbackComputer = ({ errorMessage }) => {
  return (
    <div className="fallback-computer">
      <div className="content">
        <motion.div
          className="animated-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-container">
            <div className="logo-circle"></div>
            <div className="logo-text">SK</div>
          </div>
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to my Portfolio
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore my projects and skills in AI, ML, and Full Stack Development
        </motion.p>

        <motion.div
          className="tech-icons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="icon">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="icon">
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div className="icon">
            <i className="fas fa-brain"></i>
            <span>AI/ML</span>
          </div>
          <div className="icon">
            <i className="fas fa-database"></i>
            <span>Data</span>
          </div>
        </motion.div>

        {errorMessage && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p>{errorMessage}</p>
          </motion.div>
        )}
      </div>

      <div className="background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="square square-1"></div>
        <div className="square square-2"></div>
      </div>
    </div>
  );
};

export default FallbackComputer;
