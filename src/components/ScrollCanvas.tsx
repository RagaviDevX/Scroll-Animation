'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 200;

const overlays = [
  { at: 0.05, text: 'Freshly Brewed', sub: 'From bean to cup in minutes' },
  { at: 0.4, text: 'Made With Passion', sub: 'Artisan craftsmanship in every sip' },
  { at: 0.75, text: 'Premium Coffee Beans', sub: 'Sourced from the world\'s finest farms' },
];

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  useEffect(() => {
    // Pre-build image array
    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      const num = String(i + 1).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${num}.jpg`;
      return img;
    });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill container
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      renderFrame(frameIndexRef.current);
    };

    const renderFrame = (index: number) => {
      const img = imagesRef.current[Math.round(index)];
      if (!img || !img.complete) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // cover fit
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale, sh = ih * scale;
      const sx = (cw - sw) / 2, sy = (ch - sh) / 2;
      ctx.drawImage(img, sx, sy, sw, sh);
    };

    const onScroll = () => {
      const section = containerRef.current?.parentElement;
      if (!section || !canvas) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);

      const targetFrame = progress * (TOTAL_FRAMES - 1);

      // Smooth interpolation
      cancelAnimationFrame(rafRef.current);
      const animate = () => {
        const diff = targetFrame - frameIndexRef.current;
        if (Math.abs(diff) < 0.3) {
          frameIndexRef.current = targetFrame;
          renderFrame(Math.round(targetFrame));
          return;
        }
        frameIndexRef.current += diff * 0.18;
        renderFrame(Math.round(frameIndexRef.current));
        rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);

      // Update text overlay
      let newOverlay: number | null = null;
      overlays.forEach((o, i) => {
        if (progress >= o.at && progress < o.at + 0.28) newOverlay = i;
      });
      setActiveOverlay(newOverlay);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        id="scroll-canvas"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />

      {/* Dark overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dynamic text overlays */}
      {overlays.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            opacity: activeOverlay === i ? 1 : 0,
            transition: 'opacity 0.8s ease',
            pointerEvents: 'none',
            width: '90%',
          }}
        >
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
              color: '#CBA258',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              marginBottom: 12,
              transform: activeOverlay === i ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.8s ease',
            }}
          >
            {o.sub}
          </p>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 7vw, 6rem)',
              color: '#fff',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 40px rgba(0,0,0,0.4)',
              transform: activeOverlay === i ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.9s ease 0.1s',
            }}
          >
            {o.text}
          </h2>
        </div>
      ))}

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          right: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.75rem',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
          }}
        />
      </div>
    </div>
  );
}
