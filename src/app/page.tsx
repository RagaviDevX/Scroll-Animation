'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductShowcase from '@/components/ProductShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppPromoSection from '@/components/AppPromoSection';
import Footer from '@/components/Footer';

// Client-only components (use browser APIs)
const ScrollCanvas = dynamic(() => import('@/components/ScrollCanvas'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

// Marquee banner text
const MARQUEE_TEXT = ['Premium Coffee', '·', 'Artisan Roasted', '·', 'Sustainably Sourced', '·', 'Freshly Brewed', '·'];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Prevent scroll during load
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loaded]);

  return (
    <>
      {/* Preloader */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main site — hidden until loaded */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        {/* ─── Navigation ─── */}
        <Navbar />

        {/* ─── Hero ─── */}
        <HeroSection />

        {/* ─── Scroll Animation Section ─── */}
        <section
          id="scrollsection"
          style={{
            /* tall enough so all 200 frames have room to play */
            height: '600vh',
            position: 'relative',
          }}
        >
          <ScrollCanvas />
        </section>

        {/* ─── Marquee Banner ─── */}
        <div
          style={{
            background: '#1E3932',
            padding: '18px 0',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="marquee-track">
            {[...MARQUEE_TEXT, ...MARQUEE_TEXT].map((t, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: t === '·' ? 900 : 600,
                  fontSize: t === '·' ? '1.4rem' : '0.85rem',
                  color: t === '·' ? '#CBA258' : 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  padding: '0 28px',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ─── About ─── */}
        <AboutSection />

        {/* ─── Product Showcase ─── */}
        <ProductShowcase />

        {/* ─── Experience ─── */}
        <ExperienceSection />

        {/* ─── Testimonials ─── */}
        <TestimonialsSection />

        {/* ─── App Promo ─── */}
        <AppPromoSection />

        {/* ─── Footer ─── */}
        <Footer />
      </div>
    </>
  );
}
