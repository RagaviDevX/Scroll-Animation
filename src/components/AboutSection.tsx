'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
        }
      }),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: '#fff',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 8vw, 100px)',
            alignItems: 'center',
          }}
        >
          {/* Image side */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: 'linear-gradient(135deg, #1E3932, #2d5a45)',
                boxShadow: '0 40px 80px rgba(30,57,50,0.3)',
              }}
            >
              {/* Coffee shop illustration via CSS */}
              <div style={{
                position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16,
              }}>
                <div style={{ fontSize: 80 }}>☕</div>
                <div style={{
                  width: 80, height: 3,
                  background: 'linear-gradient(90deg, transparent, #CBA258, transparent)',
                }} />
                <div style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.4)', letterSpacing: '0.3em', textTransform: 'uppercase',
                }}>Est. 2010</div>
              </div>
              {/* Overlay accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
              }} />
              {/* Badge */}
              <div style={{
                position: 'absolute', top: 24, right: 24,
                background: 'rgba(203,162,88,0.15)',
                border: '1px solid rgba(203,162,88,0.4)',
                borderRadius: 50, padding: '8px 18px',
                fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                color: '#CBA258', letterSpacing: '0.1em', backdropFilter: 'blur(10px)',
              }}>
                Award Winning
              </div>
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: -24, left: -24,
              background: '#fff', borderRadius: 18, padding: '20px 28px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}>
              <div style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                fontSize: '2rem', color: '#1E3932',
              }}>15+</div>
              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                color: '#6B6B6B', marginTop: 2,
              }}>Years of Excellence</div>
            </div>
          </div>

          {/* Text side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="reveal">
              <span style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem',
                color: '#00704A', letterSpacing: '0.3em', textTransform: 'uppercase',
              }}>Our Story</span>
            </div>

            <h2 className="reveal" style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1,
              color: '#1E1E1E', letterSpacing: '-0.02em',
            }}>
              More Than Just<br />
              <span style={{
                background: 'linear-gradient(135deg, #00704A, #CBA258)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>a Cup of Coffee</span>
            </h2>

            <p className="reveal" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.8,
              fontSize: '1.05rem', color: '#6B6B6B',
            }}>
              Founded in 2010, BrewCraft began as a small corner café with a single espresso machine and an
              obsession with quality. Today, we source our beans directly from over 30 sustainable farms
              across Colombia, Ethiopia, and Sumatra.
            </p>

            <p className="reveal" style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: 1.8,
              fontSize: '1.05rem', color: '#6B6B6B',
            }}>
              Every blend is carefully crafted by our master roasters, who bring decades of expertise to
              each and every cup. We believe coffee is an art form — and we treat it as such.
            </p>

            {/* Features */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
              {[
                { icon: '🌱', title: 'Sustainably Sourced', desc: '100% ethically traded beans' },
                { icon: '🏆', title: 'Award-Winning Roasts', desc: 'Recognized globally for quality' },
                { icon: '♻️', title: 'Zero Waste Packaging', desc: 'Planet-friendly from farm to cup' },
              ].map((f) => (
                <div key={f.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(0,112,74,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 600,
                      fontSize: '0.95rem', color: '#1E1E1E', marginBottom: 2,
                    }}>{f.title}</div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#6B6B6B',
                    }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
