'use client';

import { useEffect, useRef } from 'react';

export default function AppPromoSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 140);
          });
        }
      }),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: 'clamp(80px,12vw,140px) clamp(24px,6vw,80px)', background: 'var(--cream)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(48px,8vw,100px)', alignItems: 'center' }}>

          {/* Phone mockup */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 240 }}>
              <div style={{ width: 240, height: 480, background: 'linear-gradient(160deg,#1E3932,#0d2318)', borderRadius: 40, padding: 12, boxShadow: '0 60px 120px rgba(30,57,50,0.35)', animation: 'float 4s ease-in-out infinite' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: 30, background: 'linear-gradient(160deg,#0d1f1a,#1a3a2a)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: 20 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: 'linear-gradient(135deg,#00704A,#CBA258)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, boxShadow: '0 8px 24px rgba(0,112,74,0.4)' }}>☕</div>
                  <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>BREWCRAFT</p>
                  {[{ label: 'Cappuccino', price: '$5.99', e: '☕' }, { label: 'Cold Brew', price: '$6.99', e: '🧊' }, { label: 'Espresso', price: '$3.99', e: '⚡' }].map((item) => (
                    <div key={item.label} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span>{item.e}</span><span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>{item.label}</span></div>
                      <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#CBA258' }}>{item.price}</span>
                    </div>
                  ))}
                  <div style={{ width: '100%', background: 'linear-gradient(135deg,#00704A,#009060)', borderRadius: 12, padding: 12, textAlign: 'center', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>Order Now →</div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: 60, right: -30, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 10, animation: 'float 3s ease-in-out infinite 0.5s' }}>
                <span style={{ fontSize: 20 }}>✅</span>
                <div><div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.78rem' }}>Order Ready!</div><div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.68rem', color: '#6B6B6B' }}>Your latte is brewing</div></div>
              </div>
              <div style={{ position: 'absolute', bottom: 60, left: -36, background: 'linear-gradient(135deg,#CBA258,#e8c87a)', borderRadius: 14, padding: '10px 16px', boxShadow: '0 10px 30px rgba(203,162,88,0.3)', display: 'flex', alignItems: 'center', gap: 10, animation: 'float 3.5s ease-in-out infinite 1s' }}>
                <span style={{ fontSize: 20 }}>⭐</span>
                <div><div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.78rem', color: '#2C1810' }}>2,450 Stars</div><div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.68rem', color: 'rgba(44,24,16,0.7)' }}>Loyalty Reward</div></div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <span className="reveal" style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#00704A', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Mobile App</span>
            <h2 className="reveal" style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1, color: '#1E1E1E', letterSpacing: '-0.02em' }}>
              Order Coffee<br /><span style={{ background: 'linear-gradient(135deg,#00704A,#CBA258)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>On The Go</span>
            </h2>
            <p className="reveal" style={{ fontFamily: 'Inter,sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: '1.05rem', color: '#6B6B6B' }}>
              Skip the queue. Order ahead, earn rewards, and pick up your perfect brew without waiting. Our app makes your morning smoother.
            </p>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['🎯', 'Personalized drink recommendations'], ['⭐', 'Earn loyalty stars with every order'], ['🔔', 'Real-time order notifications'], ['💳', 'Secure one-tap payment']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 36, height: 36, background: 'rgba(0,112,74,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: '0.95rem', color: '#1E1E1E' }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
              {[['🍎', 'Download on the', 'App Store'], ['▶', 'Get it on', 'Google Play']].map(([icon, sub, store]) => (
                <button key={store} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#1E1E1E', color: '#fff', border: '1px solid rgba(255,255,255,0.08)', padding: '14px 24px', borderRadius: 14, cursor: 'none', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}>
                  <span style={{ fontSize: 24 }}>{icon}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.68rem', opacity: 0.6 }}>{sub}</div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '1rem' }}>{store}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
