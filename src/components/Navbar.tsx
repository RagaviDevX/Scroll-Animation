'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const navLinks = ['Home', 'Menu', 'About', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}
        style={{
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(30,57,50,0.7), transparent)',
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'none' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <img src="/coffee.png" alt="BrewCraft Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#fff',
                letterSpacing: '0.08em',
              }}
            >
              BREWCRAFT
            </span>
          </div>

          {/* Desktop nav */}
          <ul
            style={{
              display: 'flex',
              gap: 36,
              listStyle: 'none',
              alignItems: 'center',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.85)',
                    background: 'none',
                    border: 'none',
                    cursor: 'none',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    padding: '4px 0',
                    transition: 'color 0.3s',
                  }}
                  className="nav-link-btn"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
            onClick={() => scrollToSection('Menu')}
          >
            Order Now
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'none', padding: 8 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                width: 24,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    height: 2,
                    background: '#fff',
                    borderRadius: 2,
                    display: 'block',
                    transition: 'all 0.3s ease',
                    transform:
                      menuOpen
                        ? i === 0
                          ? 'rotate(45deg) translate(5px, 5px)'
                          : i === 1
                          ? 'scaleX(0)'
                          : 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '80vw',
          maxWidth: 320,
          height: '100vh',
          background: 'rgba(30,57,50,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 49,
          padding: '100px 40px 40px',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {navLinks.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollToSection(link)}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: '#fff',
              background: 'none',
              border: 'none',
              cursor: 'none',
              textAlign: 'left',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
            }}
          >
            {link}
          </button>
        ))}
        <button
          className="btn-primary"
          style={{ marginTop: 16 }}
          onClick={() => scrollToSection('Menu')}
        >
          Order Now
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 48,
            cursor: 'none',
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style>{`
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #CBA258;
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover { color: #fff !important; }
        .nav-link-btn:hover::after { width: 100%; }
      `}</style>
    </>
  );
}
