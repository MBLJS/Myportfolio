// src/components/Footer.jsx
import { NAV_LINKS, SOCIAL } from '../data';

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="border-t py-10"
      style={{
        borderColor: 'rgba(59,130,246,0.1)',
        background: 'rgba(4,13,32,0.8)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-xl grad-text mb-1">MBLJS&lt;/&gt;</div>
            <div className="code-label text-slate-600">Full-Stack Developer</div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="code-label text-slate-500 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                {l}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider my-6" />

        <div className="text-center code-label text-slate-600">
          © {new Date().getFullYear()} Muhammed Suleiman.
        </div>
      </div>
    </footer>
  );
}
