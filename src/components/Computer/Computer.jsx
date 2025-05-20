import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei';
import CanvasLoader from '../Loader/CanvasLoader';

// Preload the model to avoid loading issues
useGLTF.preload('./desktop_pc/scene.gltf');

const Computers = ({ isMobile }) => {
  const [modelError, setModelError] = useState(false);
  const meshRef = useRef();
  const modelRef = useRef();

  // Load the model with proper error handling
  const { scene } = useGLTF('./desktop_pc/scene.gltf', true,
    (e) => {
      console.error("Error loading 3D model:", e);
      setModelError(true);
      const modelErrorEvent = new CustomEvent('model-error', { detail: e });
      window.dispatchEvent(modelErrorEvent);
    }
  );

  // Notify when model is loaded successfully
  useEffect(() => {
    if (scene) {
      console.log("3D model loaded successfully");
      const modelLoadedEvent = new CustomEvent('model-loaded', { detail: { success: true } });
      window.dispatchEvent(modelLoadedEvent);
    }
  }, [scene]);

  // Animate the model
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = -3.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    if (modelRef.current) {
      // Add subtle rotation to make it more interactive
      modelRef.current.rotation.y += delta * 0.05;
    }
  });

  if (modelError) {
    return (
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#4FACFE" />
        <hemisphereLight intensity={0.5} groundColor='black' />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef}>
      {/* Improved lighting for better model visibility */}
      <hemisphereLight intensity={0.25} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 5, 10]} intensity={0.8} />
      <pointLight position={[-10, 5, -10]} intensity={0.8} />

      {/* The 3D model */}
      {scene && (
        <group ref={modelRef}>
          <primitive
            object={scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -1, -2.2] : [0, -1, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </group>
      )}
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canvasError, setCanvasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      console.warn('WebGL not supported');
      handleCanvasError(new Error('WebGL not supported'));
    }

    // Add listener for model loading completion
    const handleModelLoaded = () => {
      console.log('3D model loaded successfully');
      setIsLoading(false);
    };

    // Set a timeout to hide the loader after a reasonable time
    // even if the model is still loading (prevents infinite loading)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    window.addEventListener('model-loaded', handleModelLoaded);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('model-loaded', handleModelLoaded);
      clearTimeout(loadingTimeout);
    };
  }, []);

  // Error boundary for the Canvas
  const handleCanvasError = (error) => {
    console.error("Canvas error:", error);
    setCanvasError(true);
    // Dispatch a custom event to notify parent components
    const canvasErrorEvent = new CustomEvent('model-error', { detail: error });
    window.dispatchEvent(canvasErrorEvent);
  };

  // Handle successful canvas creation
  const handleCanvasCreated = (state) => {
    // Check if WebGL is supported
    if (!state.gl.capabilities.isWebGL2) {
      console.warn("WebGL 2 not supported, falling back to WebGL 1");
    }

    // Optimize renderer settings
    state.gl.setPixelRatio(window.devicePixelRatio);
    state.gl.setClearColor('#0c0c1d', 1);

    // Notify when canvas is ready
    console.log('Canvas created successfully');
  };

  if (canvasError) {
    return (
      <div className="canvas-error" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a2e',
        color: 'white',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div>
          <h3>3D Model Viewer Unavailable</h3>
          <p>Sorry, we couldn't load the 3D model viewer. Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  try {
    return (
      <>
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(12, 12, 29, 0.7)',
            zIndex: 10,
            borderRadius: '10px'
          }}>
            <CanvasLoader />
          </div>
        )}
        <Canvas
          frameloop='always'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true
          }}
          onCreated={handleCanvasCreated}
          onError={handleCanvasError}
          style={{
            background: 'linear-gradient(to bottom, #0c0c1d, #111132)',
            borderRadius: '10px'
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enablePan={false}
              enableDamping
              dampingFactor={0.05}
            />
            <Computers isMobile={isMobile} />
            <Environment preset="city" />
          </Suspense>

          <Preload all />
        </Canvas>
      </>
    );
  } catch (error) {
    console.error("Error rendering Canvas:", error);
    handleCanvasError(error);
    return null;
  }
};

export default ComputerCanvas;
