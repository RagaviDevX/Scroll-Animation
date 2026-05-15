'use client';

import { useEffect, useRef } from 'react';

const experiences = [
  {
    icon: '🫘',
    title: 'Fresh Beans',
    desc: 'Single-origin beans selected at peak ripeness from highland farms across three continents.',
    color: '#00704A',
    bg: 'rgba(0,112,74,0.07)',
  },
  {
    icon: '🔥',
    title: 'Artisan Brewing',
    desc: 'Each cup is brewed to order by our trained baristas using precision temperature control.',
    color: '#CBA258',
    bg: 'rgba(203,162,88,0.07)',
  },
  {
    icon: '✨',
    title: 'Rich Aroma',
    desc: 'The intoxicating aroma of freshly ground coffee is part of the BrewCraft experience.',
    color: '#6B4226',
    bg: 'rgba(107,66,38,0.07)',
  },
  {
    icon: '🌍',
    title: 'Sustainable Farming',
    desc: 'We partner directly with farmers committed to regenerative agriculture and fair wages.',
    color: '#1E3932',
    bg: 'rgba(30,57,50,0.07)',
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 130);
          });
        }
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        background: 'linear-gradient(160deg, #1E3932 0%, #0d2318 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '-30%', right: '-10%', width: '50vw', height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,112,74,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 80px)' }}>
          <span className="reveal" style={{
            display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: '0.8rem', color: '#CBA258', letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: 16,
          }}>The Experience</span>
          <h2 className="reveal" style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#fff',
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            What Sets Us{' '}
            <span style={{
              background: 'linear-gradient(135deg, #CBA258, #e8c87a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Apart</span>
          </h2>
        </div>

        {/* Experience cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 24,
        }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '36px 28px',
                transition: 'background 0.4s ease, transform 0.4s ease, border-color 0.4s',
                cursor: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.color}44`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Glowing number */}
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontFamily: 'Poppins, sans-serif', fontWeight: 900,
                fontSize: '5rem', color: 'rgba(255,255,255,0.04)',
                lineHeight: 1, userSelect: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: exp.bg,
                border: `1px solid ${exp.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, marginBottom: 24,
              }}>{exp.icon}</div>

              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                fontSize: '1.25rem', color: '#fff', marginBottom: 12,
              }}>{exp.title}</h3>

              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 400,
                fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75,
              }}>{exp.desc}</p>

              {/* Bottom accent */}
              <div style={{
                marginTop: 28, height: 2, width: 40, borderRadius: 1,
                background: `linear-gradient(90deg, ${exp.color}, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
