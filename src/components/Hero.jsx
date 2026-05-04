// src/components/Hero.jsx
import { useState, useEffect } from 'react';

const TITLES = [
  'Full-Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const [typed,     setTyped]     = useState('');
  const [titleIdx,  setTitleIdx]  = useState(0);
  const [charIdx,   setCharIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = TITLES[titleIdx];
    const delay   = deleting ? 55 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (charIdx > 0) {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setTitleIdx((i) => (i + 1) % TITLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, titleIdx]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-[length:60px_60px]"
    >
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-24 -right-24"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />
      <div className="orb w-[400px] h-[400px] bottom-24 -left-20"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Floating blob */}
      <div className="absolute top-32 right-8 sm:right-20 animate-float opacity-30 hidden sm:block">
        <div
          className="w-[220px] h-[220px]"
          style={{
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(0,212,255,0.15))',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="code-label text-blue-400 mb-6 flex items-center gap-3 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow inline-block" />
            Available for new opportunities
          </div>

          {/* Headline */}
          <h1
            className="font-sans font-extrabold leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            <span className="block text-slate-100">Hi, I'm</span>
            <span className="block grad-text">Muhammed</span>
            <span className="block text-slate-100">Suleiman.</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-3 mb-6 min-h-10">
            <span className="code-label text-slate-500">~/</span>
            <span className="font-mono text-lg font-semibold text-blue-400 cursor">{typed}</span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
            Building scalable and modern web applications — from pixel-perfect frontends
            to robust backend systems. Passionate about clean code, great UX, and shipping
            products that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary px-8 py-3.5 rounded-xl flex items-center gap-2 text-base relative z-10 border-none cursor-pointer"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline px-8 py-3.5 rounded-xl text-base cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Divider */}
          <div className="divider mb-10" />

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              ['3+',   'Years Experience'],
              ['20+',  'Projects Built'],
              ['8',    'Technologies'],
              ['100%', 'Client Focus'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-mono font-bold text-2xl grad-text">{num}</div>
                <div className="code-label text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-y opacity-40">
        <div className="code-label text-slate-500 text-[0.65rem]">scroll</div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
