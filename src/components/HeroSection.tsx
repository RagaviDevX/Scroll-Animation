'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number; size: number;
  speedX: number; speedY: number;
  opacity: number; emoji: string;
}

const EMOJIS = ['☕', '✦', '◦', '·'];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn particles
    const spawn = () => {
      const p: Particle = {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 14 + 8,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -(Math.random() * 0.8 + 0.4),
        opacity: Math.random() * 0.5 + 0.2,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      };
      particles.current.push(p);
    };

    const spawnInterval = setInterval(spawn, 600);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.001;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.font = `${p.size}px serif`;
        ctx.fillText(p.emoji, p.x, p.y);
        return p.y > -40 && p.opacity > 0;
      });
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(spawnInterval);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #1E3932 0%, #2d5a45 40%, #1a2e26 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* Background circles */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,112,74,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-15%',
        width: '55vw', height: '55vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(203,162,88,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div
        style={{
          position: 'relative', zIndex: 2, textAlign: 'center',
          maxWidth: 900, padding: '0 24px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 28,
            animation: 'fadeInUp 0.8s ease both',
          }}
        >
          <div style={{ width: 32, height: 1, background: '#CBA258' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.8rem',
            color: '#CBA258', letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
            Premium Coffee Experience
          </span>
          <div style={{ width: 32, height: 1, background: '#CBA258' }} />
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
            lineHeight: 1.0,
            color: '#fff',
            letterSpacing: '-0.03em',
            marginBottom: 28,
            animation: 'fadeInUp 0.9s ease 0.15s both',
          }}
        >
          Crafted{' '}
          <span style={{
            background: 'linear-gradient(135deg, #CBA258, #e8c87a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Coffee</span>
          <br />Experience
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 44px',
            animation: 'fadeInUp 1s ease 0.3s both',
          }}
        >
          Every cup tells a story of flavor, aroma, and craftsmanship.
          Brewed with care, delivered with love.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            animation: 'fadeInUp 1s ease 0.45s both',
          }}
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>☕</span> Order Now
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu →
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap',
            marginTop: 64,
            animation: 'fadeInUp 1s ease 0.6s both',
          }}
        >
          {[
            { num: '50+', label: 'Blend Varieties' },
            { num: '2M+', label: 'Cups Served' },
            { num: '100%', label: 'Sustainable' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: '#CBA258',
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 400,
                fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2,
          animation: 'fadeIn 1.5s ease 1s both',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>Scroll</span>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, rgba(203,162,88,0.7), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
