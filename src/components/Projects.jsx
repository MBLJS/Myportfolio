// src/components/Projects.jsx
import { PROJECTS } from '../data';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function ProjectCard({ project, index }) {
  const [ref, visible] = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={`project-card glass rounded-2xl overflow-hidden reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div
        className="relative flex items-center justify-center py-10"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          borderBottom: '1px solid rgba(59,130,246,0.1)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.highlight}, transparent 65%)`,
          }}
        />
        <div className="text-6xl relative z-10 animate-float">{project.emoji}</div>
        <div className="code-label text-slate-600 absolute top-3 right-3">
          0{index + 1}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-sans font-bold text-lg text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            className="btn-outline flex-1 flex items-center justify-center gap-2 text-slate-300 text-sm font-medium py-2.5 rounded-lg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            className="btn-primary flex-1 flex items-center justify-center gap-2 text-white text-sm font-medium py-2.5 rounded-lg relative z-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="code-label text-blue-400 mb-3 block">// my_projects[]</span>
          <h2
            className="font-sans font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto font-light">
            A selection of projects spanning full-stack apps, dashboards, and developer tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
