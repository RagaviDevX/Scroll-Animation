'use client';

import { useEffect, useRef, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const totalFrames = 200;
    let loaded = 0;

    // Preload all frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const num = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${num}.jpg`;
      img.onload = img.onerror = () => {
        loaded++;
        const pct = Math.round((loaded / totalFrames) * 100);
        setProgress(pct);
        if (loaded === totalFrames) {
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 700);
          }, 400);
        }
      };
    }
  }, [onComplete]);

  return (
    <div
      className="loader-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.7s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 0 40px rgba(255,255,255,0.2)',
            overflow: 'hidden',
          }}
        >
          <img src="/coffee.png" alt="BrewCraft Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.1em',
          }}
        >
          BREWCRAFT
        </h1>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.3em',
            marginTop: 4,
            textTransform: 'uppercase',
          }}
        >
          Premium Coffee Experience
        </p>
      </div>

      {/* Progress */}
      <div style={{ width: 200, textAlign: 'center' }}>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            marginTop: 12,
            letterSpacing: '0.15em',
          }}
        >
          Brewing your experience... {progress}%
        </p>
      </div>
    </div>
  );
}
