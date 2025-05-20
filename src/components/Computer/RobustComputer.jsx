import React, { useState, useEffect } from 'react';
import CssComputer from './CssComputer';
import CanvasComputer from './CanvasComputer';
import FallbackComputer from './FallbackComputer';
import './RobustComputer.scss';

// This component will detect browser capabilities and render the appropriate component
const RobustComputer = () => {
  const [renderMode, setRenderMode] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check browser capabilities
    const checkCapabilities = () => {
      try {
        // First, check if CSS 3D transforms are supported
        const el = document.createElement('div');
        const cssTransforms = 'transform-style' in el.style || 
                             'webkitTransformStyle' in el.style || 
                             'mozTransformStyle' in el.style;
        
        if (cssTransforms) {
          console.log('CSS 3D transforms are supported');
          setRenderMode('css');
          return;
        }
        
        // If CSS 3D transforms are not supported, check for Canvas support
        const canvas = document.createElement('canvas');
        const hasCanvas = !!(canvas.getContext && canvas.getContext('2d'));
        
        if (hasCanvas) {
          console.log('Canvas is supported');
          setRenderMode('canvas');
          return;
        }
        
        // If neither is supported, use the fallback
        console.log('Using static fallback');
        setRenderMode('fallback');
        setErrorMessage('Your browser does not support modern rendering features');
      } catch (error) {
        console.error('Error detecting capabilities:', error);
        setRenderMode('fallback');
        setErrorMessage('An error occurred while initializing the interactive element');
      }
    };
    
    // Add a small delay to ensure the component is mounted
    const timer = setTimeout(() => {
      checkCapabilities();
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Render the appropriate component based on browser capabilities
  const renderComponent = () => {
    switch (renderMode) {
      case 'css':
        return <CssComputer />;
      case 'canvas':
        return <CanvasComputer />;
      case 'fallback':
        return <FallbackComputer errorMessage={errorMessage} />;
      case 'loading':
      default:
        return (
          <div className="robust-loader">
            <div className="spinner"></div>
            <p>Initializing...</p>
          </div>
        );
    }
  };

  return (
    <div className="robust-computer-container">
      {renderComponent()}
    </div>
  );
};

export default RobustComputer;
