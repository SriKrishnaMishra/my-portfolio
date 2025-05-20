import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, useProgress, Html } from '@react-three/drei';
import FallbackComputer from './FallbackComputer';
import './SimpleComputer.scss';

// Simple 3D scene with a rotating cube
const Scene = ({ color = '#4FACFE' }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />

      {/* 3D Object - Simple cube that rotates */}
      <group position={[0, 0, 0]}>
        <Box
          args={[3, 3, 3]}
          rotation={[0.5, 0.5, 0]}
        >
          <meshStandardMaterial
            color={color}
            metalness={0.5}
            roughness={0.2}
          />
        </Box>
      </group>
    </>
  );
};

// Custom loader component
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="simple-loader">
        <div className="spinner"></div>
        <div className="progress">{progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
};

// Main component
const SimpleComputer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      if (!gl) {
        console.warn('WebGL not supported');
        setHasError(true);
      }
    } catch (error) {
      console.error('Error checking WebGL support:', error);
      setHasError(true);
    }

    // Set a timeout to consider the scene loaded after 2 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Error fallback - use our custom FallbackComputer component
  if (hasError) {
    return <FallbackComputer />;
  }

  // Use a try-catch block to handle any rendering errors
  try {
    return (
      <div className="simple-computer-container">
        {!isLoaded && (
          <div className="loading-overlay">
            <div className="simple-loader">
              <div className="spinner"></div>
              <div className="loading-text">Loading 3D Scene...</div>
            </div>
          </div>
        )}

        <Canvas
          camera={{ position: [0, 0, 10], fov: 25 }}
          gl={{ antialias: true }}
          style={{
            background: 'linear-gradient(to bottom, #0c0c1d, #111132)',
            borderRadius: '10px',
            width: '100%',
            height: '100%'
          }}
        >
          <Suspense fallback={<Loader />}>
            <Scene />
            <OrbitControls
              autoRotate
              autoRotateSpeed={1.5}
              enableZoom={false}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  } catch (error) {
    console.error("Error rendering 3D scene:", error);
    return <FallbackComputer />;
  }
};

export default SimpleComputer;
