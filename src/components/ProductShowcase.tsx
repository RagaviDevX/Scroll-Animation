'use client';

import { useEffect, useRef, useState } from 'react';

const products = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    tagline: 'Silky & Bold',
    price: '$5.99',
    desc: 'Rich espresso balanced with velvety steamed milk and a thick layer of foam.',
    emoji: '☕',
    color: '#6B4226',
    bg: 'linear-gradient(135deg, #3d2414, #6B4226)',
    badge: 'Bestseller',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    tagline: 'Intense & Pure',
    price: '$3.99',
    desc: 'A concentrated shot of bold, complex flavor extracted at perfection.',
    emoji: '⚡',
    color: '#1E3932',
    bg: 'linear-gradient(135deg, #0d1f1a, #1E3932)',
    badge: 'Classic',
  },
  {
    id: 'latte',
    name: 'Latte',
    tagline: 'Smooth & Creamy',
    price: '$6.49',
    desc: 'Espresso blended with generous steamed milk topped with latte art.',
    emoji: '🎨',
    color: '#8B5E3C',
    bg: 'linear-gradient(135deg, #4a3020, #8B5E3C)',
    badge: 'Popular',
  },
  {
    id: 'coldbrew',
    name: 'Cold Brew',
    tagline: 'Refreshing & Rich',
    price: '$6.99',
    desc: '20-hour slow-steeped beans for a smooth, naturally sweet cold brew.',
    emoji: '🧊',
    color: '#1a4a6b',
    bg: 'linear-gradient(135deg, #0d2235, #1a4a6b)',
    badge: 'New',
  },
];

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
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
      id="menu"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        background: 'var(--cream)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 80px)' }}>
          <span className="reveal" style={{
            display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: '0.8rem', color: '#00704A', letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: 16,
          }}>
            Our Menu
          </span>
          <h2 className="reveal" style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#1E1E1E',
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            Signature <span style={{
              background: 'linear-gradient(135deg, #00704A, #CBA258)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Blends</span>
          </h2>
          <p className="reveal" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: '#6B6B6B',
            lineHeight: 1.7, maxWidth: 500, margin: '20px auto 0',
          }}>
            Handcrafted with precision and passion. Each drink is a masterpiece.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className="reveal product-card"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                background: p.bg,
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                cursor: 'none',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease',
                transform: hovered === p.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                position: 'relative',
              }}
            >
              {/* Badge */}
              <span style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(203,162,88,0.2)',
                border: '1px solid rgba(203,162,88,0.5)',
                color: '#CBA258', fontSize: '0.7rem', fontWeight: 600,
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '4px 12px', borderRadius: 50,
              }}>{p.badge}</span>

              {/* Emoji icon */}
              <div style={{
                width: 70, height: 70, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32,
                transition: 'transform 0.4s ease',
                transform: hovered === p.id ? 'rotate(-10deg) scale(1.15)' : 'none',
              }}>
                {p.emoji}
              </div>

              {/* Text */}
              <div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2em',
                  textTransform: 'uppercase', marginBottom: 6,
                }}>{p.tagline}</p>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                  fontSize: '1.8rem', color: '#fff', letterSpacing: '-0.02em',
                }}>{p.name}</h3>
              </div>

              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, flexGrow: 1,
              }}>{p.desc}</p>

              {/* Price + CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                  fontSize: '1.4rem', color: '#CBA258',
                }}>{p.price}</span>
                <button style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff', padding: '10px 20px', borderRadius: 50,
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                  cursor: 'none',
                  transition: 'background 0.3s, transform 0.3s',
                  transform: hovered === p.id ? 'scale(1.05)' : 'scale(1)',
                }}>
                  Order +
                </button>
              </div>

              {/* Glow on hover */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 30% 80%, ${p.color}33 0%, transparent 60%)`,
                opacity: hovered === p.id ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
