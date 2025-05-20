import React, { useEffect, useState } from 'react';
import { Html, useProgress } from '@react-three/drei';
import './CanvasLoader.scss';

const CanvasLoader = () => {
  const { progress, active, errors } = useProgress();
  const [loadingText, setLoadingText] = useState('Loading 3D Model');
  const [dots, setDots] = useState('');

  // Animated loading text with dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Change loading text based on progress
  useEffect(() => {
    if (progress < 30) {
      setLoadingText('Initializing 3D Environment');
    } else if (progress < 60) {
      setLoadingText('Loading 3D Model');
    } else if (progress < 90) {
      setLoadingText('Preparing Visualization');
    } else {
      setLoadingText('Almost Ready');
    }
  }, [progress]);

  // Show error message if there are errors
  if (errors.length > 0) {
    return (
      <Html as='div' center style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '10px',
      }}>
        <div className="error-icon">❌</div>
        <h3 style={{ color: '#ff4d4d', marginTop: '10px' }}>Loading Error</h3>
        <p style={{ color: '#ffffff', textAlign: 'center', maxWidth: '300px' }}>
          There was a problem loading the 3D model. Please refresh the page.
        </p>
      </Html>
    );
  }

  return (
    <Html as='div' center style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      minWidth: '200px',
    }}>
      <div className="loader-container">
        <span className='canvas-loader'></span>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="loading-text">
        {loadingText}{dots}
      </p>
      <p className="progress-percentage">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
