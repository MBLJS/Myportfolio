// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'py-3 bg-navy-950/95 backdrop-blur-xl border-b border-blue-500/10 shadow-lg shadow-blue-500/5'
            : 'py-5'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-mono font-bold text-lg grad-text">
            MBLJS&lt;/&gt;
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button onClick={() => scrollTo(l)} className="nav-link">{l}</button>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <a
            href="mailto:mbljstech@gmail.com"
            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5 rounded-lg relative z-10"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1 bg-transparent border-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`ham-line ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-navy-950/50 z-40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={`mobile-menu md:hidden ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl bg-transparent border-none cursor-pointer"
        >
          ✕
        </button>
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-slate-300 hover:text-white font-semibold text-lg bg-transparent border-none cursor-pointer transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:mbljstech@gmail.com"
            className="btn-primary text-sm font-semibold px-5 py-3 rounded-lg text-center mt-4 relative z-10"
          >
            Hire Me
          </a>
          {/* Social icons in drawer */}
          <div className="flex gap-3 pt-2">
            {SOCIAL.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="glass w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
