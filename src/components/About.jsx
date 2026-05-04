// src/components/About.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PILLARS = [
  { color: 'bg-blue-400',   label: 'Frontend Development',    desc: 'React, TypeScript, Tailwind CSS, Bootstrap' },
  { color: 'bg-cyan-400',   label: 'Backend Development',     desc: 'Node.js, MongoDB' },
  { color: 'bg-violet-400', label: 'Full Stack Architecture', desc: 'Scalable, performant, production-ready apps' },
];

export default function About() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section id="about" className="py-28 relative bg-navy-900/30">
      {/* Orb */}
      <div
        className="orb w-[300px] h-[300px] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          top: '50%', left: '40%',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal ${visible ? 'visible' : ''}`}
        >
          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-[380px]">
              {/* Avatar card */}
              <div
                className="w-full aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(7,16,40,0.9), rgba(4,13,32,0.9))',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.5), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,212,255,0.3), transparent 60%)',
                  }}
                />
                <div className="text-center relative z-10">
                  <div
                    className="font-sans font-extrabold grad-text mb-2"
                    style={{ fontSize: '5rem', lineHeight: 1 }}
                  >
                    MBLJS
                  </div>
                  <div className="code-label text-slate-500">Full-Stack Developer</div>
                </div>
                {/* Corner accents */}
                {['top-4 left-4 border-t-2 border-l-2 rounded-tl-lg',
                  'top-4 right-4 border-t-2 border-r-2 rounded-tr-lg',
                  'bottom-4 left-4 border-b-2 border-l-2 rounded-bl-lg',
                  'bottom-4 right-4 border-b-2 border-r-2 rounded-br-lg',
                ].map((cls) => (
                  <div key={cls} className={`absolute w-8 h-8 border-blue-400/50 ${cls}`} />
                ))}
              </div>

              {/* Floating badges */}
              <div className="glass absolute -bottom-4 -right-4 rounded-2xl px-5 py-3">
                <div className="font-mono font-bold text-blue-400 text-xl">3+</div>
                <div className="code-label text-slate-500">Yrs Exp.</div>
              </div>
              <div className="glass absolute -top-4 -left-4 rounded-2xl px-5 py-3">
                <div className="font-mono font-bold text-cyan-400 text-xl">20+</div>
                <div className="code-label text-slate-500">Projects</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="code-label text-blue-400 mb-3 block">// about_me.ts</span>
            <h2
              className="font-sans font-extrabold mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Crafting <span className="grad-text">Digital</span>
              <br />Experiences
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5 font-light">
              I'm a full-stack developer with a passion for turning ideas into real, functional
              products. I love working across the entire stack — from designing clean, responsive
              UIs to architecting efficient backend systems.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">
              With strong foundations in{' '}
              <span className="text-blue-400 font-medium">React</span>,{' '}
              <span className="text-blue-400 font-medium">TypeScript</span>, and{' '}
              <span className="text-blue-400 font-medium">Node.js</span>, I build scalable
              web applications that are fast, accessible, and maintainable.
            </p>
            <div className="space-y-3">
              {PILLARS.map(({ color, label, desc }) => (
                <div
                  key={label}
                  className="glass rounded-xl px-5 py-4 flex items-center gap-4 cursor-default"
                >
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${color}`} />
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{label}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
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
