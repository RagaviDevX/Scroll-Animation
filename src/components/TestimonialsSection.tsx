'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    review: 'BrewCraft has completely changed my morning routine. The espresso is absolutely divine — rich, smooth, and perfectly balanced. Nothing else comes close.',
    rating: 5,
    avatar: '👩‍💼',
    location: 'New York, USA',
  },
  {
    name: 'James Thornton',
    role: 'Food Blogger',
    review: 'I have reviewed hundreds of cafes worldwide, and BrewCraft stands in a league of its own. The cold brew is a revelation — silky, complex, and refreshing.',
    rating: 5,
    avatar: '👨‍💻',
    location: 'London, UK',
  },
  {
    name: 'Priya Sharma',
    role: 'Architect',
    review: 'The latte art alone is worth the visit. But it is the flavour that keeps me coming back every single day. My office runs on BrewCraft.',
    rating: 5,
    avatar: '👩‍🎨',
    location: 'Mumbai, India',
  },
  {
    name: 'Carlos Rivera',
    role: 'Chef',
    review: 'As someone obsessed with quality ingredients, I appreciate BrewCraft\'s commitment to sourcing. You can genuinely taste the difference — farm to cup.',
    rating: 5,
    avatar: '👨‍🍳',
    location: 'Barcelona, Spain',
  },
  {
    name: 'Emily Chen',
    role: 'Yoga Instructor',
    review: 'The oat milk cappuccino is my pre-class ritual. It gives me just the right energy without the jitters. Sustainably made, perfectly crafted.',
    rating: 5,
    avatar: '🧘‍♀️',
    location: 'San Francisco, USA',
  },
  {
    name: 'David Okafor',
    role: 'Musician',
    review: 'Late night studio sessions need great coffee. BrewCraft cold brew is my creative fuel. The flavour profile is complex and totally addictive.',
    rating: 5,
    avatar: '🎵',
    location: 'Lagos, Nigeria',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Duplicate for seamless loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 0',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 'clamp(40px, 7vw, 72px)',
        padding: '0 clamp(24px, 6vw, 80px)',
      }}>
        <span className="reveal" style={{
          display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 600,
          fontSize: '0.8rem', color: '#00704A', letterSpacing: '0.3em',
          textTransform: 'uppercase', marginBottom: 16,
        }}>Testimonials</span>
        <h2 className="reveal" style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#1E1E1E',
          letterSpacing: '-0.02em', lineHeight: 1.1,
        }}>
          What Our{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00704A, #CBA258)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Community Says</span>
        </h2>
        <p className="reveal" style={{
          fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: '#6B6B6B',
          lineHeight: 1.7, maxWidth: 500, margin: '20px auto 0',
        }}>
          Over 2 million cups served, and the love just keeps pouring.
        </p>
      </div>

      {/* Auto-scroll carousel */}
      <div
        style={{ overflow: 'hidden', cursor: 'none' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 24,
            width: 'max-content',
            animation: `marquee 40s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            padding: '16px 12px',
          }}
        >
          {allCards.map((t, i) => (
            <div
              key={i}
              style={{
                width: 340,
                flexShrink: 0,
                background: i % 2 === 0 ? '#F2F0EB' : 'linear-gradient(135deg, #1E3932, #2d5a45)',
                borderRadius: 24,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                border: '1px solid',
                borderColor: i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4 }}>
                {Array(t.rating).fill(null).map((_, s) => (
                  <span key={s} style={{ color: '#CBA258', fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Review */}
              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 400,
                fontSize: '0.95rem', lineHeight: 1.75,
                color: i % 2 === 0 ? '#2C1810' : 'rgba(255,255,255,0.75)',
                fontStyle: 'italic',
                flexGrow: 1,
              }}>
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Divider */}
              <div style={{
                height: 1,
                background: i % 2 === 0 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
              }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #1E3932, #00704A)'
                    : 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                    fontSize: '0.95rem',
                    color: i % 2 === 0 ? '#1E1E1E' : '#fff',
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
                    color: i % 2 === 0 ? '#6B6B6B' : 'rgba(255,255,255,0.45)',
                    marginTop: 2,
                  }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
