import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CssComputer.scss';

// CSS-only 3D cube that works in all browsers
const CssComputer = () => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 15, y: 15 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle mouse movement for interactive rotation
  const handleMouseMove = (e) => {
    if (!containerRef.current || autoRotate) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const rotateX = 30 * ((y / rect.height) - 0.5);
    const rotateY = 30 * (0.5 - (x / rect.width));
    
    setRotation({ x: rotateX, y: rotateY });
    setMousePosition({ x, y });
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    let animationFrameId;
    let angle = 0;
    
    const animate = () => {
      angle += 0.5;
      setRotation({
        x: 15 * Math.sin(angle * 0.01),
        y: 15 * Math.cos(angle * 0.01)
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Show the component after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, [autoRotate]);

  // Toggle auto-rotation on click
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div className="css-computer-container">
      {!isLoaded && (
        <div className="css-loader">
          <div className="spinner"></div>
          <p>Loading Interactive Element...</p>
        </div>
      )}
      
      <motion.div 
        className={`css-scene ${isLoaded ? 'loaded' : ''}`}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onClick={toggleAutoRotate}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="cube"
          style={{ 
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          {/* Front face */}
          <div className="face front">
            <div className="content">
              <div className="logo">SK</div>
              <div className="title">Portfolio</div>
            </div>
          </div>
          
          {/* Back face */}
          <div className="face back">
            <div className="content">
              <div className="icon"><i className="fas fa-code"></i></div>
              <div className="text">Full Stack</div>
            </div>
          </div>
          
          {/* Right face */}
          <div className="face right">
            <div className="content">
              <div className="icon"><i className="fas fa-brain"></i></div>
              <div className="text">AI & ML</div>
            </div>
          </div>
          
          {/* Left face */}
          <div className="face left">
            <div className="content">
              <div className="icon"><i className="fas fa-database"></i></div>
              <div className="text">Data</div>
            </div>
          </div>
          
          {/* Top face */}
          <div className="face top">
            <div className="content">
              <div className="icon"><i className="fas fa-project-diagram"></i></div>
              <div className="text">Projects</div>
            </div>
          </div>
          
          {/* Bottom face */}
          <div className="face bottom">
            <div className="content">
              <div className="icon"><i className="fas fa-graduation-cap"></i></div>
              <div className="text">Research</div>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="instructions">
          {autoRotate ? 'Click to interact' : 'Move mouse to rotate • Click to auto-rotate'}
        </div>
        
        {/* Light effect that follows mouse */}
        {!autoRotate && (
          <div 
            className="light-effect"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`
            }}
          ></div>
        )}
      </motion.div>
    </div>
  );
};

export default CssComputer;
