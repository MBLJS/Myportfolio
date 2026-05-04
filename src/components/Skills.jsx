// src/components/Skills.jsx
import { useState, useEffect } from 'react';
import { SKILLS } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function SkillBar({ name, icon, level, category, visible, delay }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return (
    <div className="glass rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="hex-icon">{icon}</div>
        <div>
          <div className="font-semibold text-slate-200">{name}</div>
          <div className="code-label text-slate-500">{category}</div>
        </div>
        <span className="ml-auto font-mono font-bold text-blue-400 text-sm">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(59,130,246,0.08)' }}>
        <div className="skill-fill" style={{ width: animated ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useIntersectionObserver(0.1);

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="code-label text-blue-400 mb-3 block">// skills.config.ts</span>
          <h2
            className="font-sans font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            My <span className="grad-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto font-light">
            Technologies I've mastered to build modern, performant web applications.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} {...s} visible={visible} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
