'use client';

import { useState } from 'react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
  Menu: ['Espresso', 'Cappuccino', 'Latte', 'Cold Brew'],
  Support: ['FAQ', 'Contact Us', 'Store Locator', 'Gift Cards'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

const socials = [
  { label: 'Twitter', icon: '𝕏' },
  { label: 'Instagram', icon: '◻' },
  { label: 'Facebook', icon: 'f' },
  { label: 'YouTube', icon: '▶' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <footer
      id="contact"
      style={{
        background: 'linear-gradient(160deg, #0d1f1a 0%, #1E3932 100%)',
        color: '#fff',
        padding: 'clamp(60px,10vw,120px) clamp(24px,6vw,80px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(203,162,88,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(40px,6vw,60px)', marginBottom: 'clamp(60px,8vw,80px)' }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#00704A,#CBA258)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>☕</div>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.08em' }}>BREWCRAFT</span>
            </div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
              Premium coffee crafted with passion, sourced sustainably, and delivered to your door.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map((s) => (
                <button key={s.label} aria-label={s.label} style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: '0.85rem', cursor: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,112,74,0.25)'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#00704A44'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'; }}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#CBA258', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>{category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <li key={link}>
                    <button style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'none', padding: 0, transition: 'color 0.3s ease' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = '#fff'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)'}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#CBA258', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Newsletter</h4>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>Get exclusive offers and coffee tips delivered weekly.</p>
            {submitted ? (
              <div style={{ background: 'rgba(0,112,74,0.2)', border: '1px solid rgba(0,112,74,0.4)', borderRadius: 12, padding: '14px 18px', fontFamily: 'Inter,sans-serif', fontSize: '0.88rem', color: '#4ade80' }}>✓ You're subscribed!</div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" required
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 16px', fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: '#fff', outline: 'none', cursor: 'none' }}
                />
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px 24px' }}>Subscribe</button>
              </form>
            )}
            {/* Contact info */}
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['📍', '123 Coffee Lane, Seattle WA'], ['📧', 'hello@brewcraft.com'], ['📞', '+1 (800) BREW-NOW']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, padding: 'clamp(20px,3vw,32px) 0' }}>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 BrewCraft. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)' }}>
            Crafted with ☕ and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
