import React, { useRef, useEffect, useState } from 'react';
import './CanvasComputer.scss';

// Canvas-based animation that works in all browsers that support Canvas
const CanvasComputer = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setHasError(true);
      return;
    }

    let animationFrameId;
    try {
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setHasError(true);
        return;
      }

      // Set canvas dimensions
      const setCanvasDimensions = () => {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      };

      setCanvasDimensions();
      window.addEventListener('resize', setCanvasDimensions);

      // Create particles
      const particles = [];
      const particleCount = 50;
      const colors = ['#4FACFE', '#00F2FE', '#ffffff'];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          opacity: Math.random() * 0.5 + 0.3
        });
      }

      // Create logo
      const logo = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: 80,
        rotation: 0,
        text: 'SK',
        pulsate: 0
      };

      // Animation function
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#0c0c1d');
        gradient.addColorStop(1, '#111132');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw particles
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
          
          // Update particle position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        });
        
        // Draw connecting lines between nearby particles
        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = '#4FACFE';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        
        // Draw logo
        ctx.globalAlpha = 1;
        logo.rotation += 0.005;
        logo.pulsate += 0.05;
        
        // Draw logo background
        ctx.save();
        ctx.translate(logo.x, logo.y);
        ctx.rotate(logo.rotation);
        
        const logoGradient = ctx.createLinearGradient(-logo.size/2, -logo.size/2, logo.size/2, logo.size/2);
        logoGradient.addColorStop(0, '#00F2FE');
        logoGradient.addColorStop(1, '#4FACFE');
        
        ctx.beginPath();
        ctx.arc(0, 0, logo.size/2 + 5 * Math.sin(logo.pulsate), 0, Math.PI * 2);
        ctx.fillStyle = logoGradient;
        ctx.fill();
        
        // Draw logo text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(logo.text, 0, 0);
        
        ctx.restore();
        
        // Draw text below logo
        ctx.fillStyle = '#ffffff';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Portfolio', canvas.width / 2, canvas.height / 2 + logo.size/2 + 30);
        
        // Draw instruction text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '14px Arial';
        ctx.fillText('Interactive Portfolio Experience', canvas.width / 2, canvas.height - 20);
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      // Start animation after a short delay
      setTimeout(() => {
        setIsLoaded(true);
        animationFrameId = requestAnimationFrame(animate);
      }, 500);
      
      return () => {
        window.removeEventListener('resize', setCanvasDimensions);
        cancelAnimationFrame(animationFrameId);
      };
    } catch (error) {
      console.error('Canvas error:', error);
      setHasError(true);
      return () => {};
    }
  }, []);

  if (hasError) {
    return (
      <div className="canvas-fallback">
        <div className="content">
          <div className="logo">SK</div>
          <h3>Portfolio</h3>
          <p>Interactive experience unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="canvas-computer-container">
      {!isLoaded && (
        <div className="canvas-loader">
          <div className="spinner"></div>
          <p>Loading Interactive Element...</p>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className={`canvas-element ${isLoaded ? 'loaded' : ''}`}
      />
    </div>
  );
};

export default CanvasComputer;
