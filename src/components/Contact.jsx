// src/components/Contact.jsx
import { useState } from "react";
import { SOCIAL } from "../data";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const INFO_ITEMS = [
  {
    icon: "✉️",
    label: "Email",
    value: "mbljstech@gmail.com",
    href: "mailto:mbljstech@gmail.com",
  },
  { icon: "📍", label: "Location", value: "Available Worldwide", href: null },
  { icon: "🕐", label: "Response Time", value: "Within 24 hours", href: null },
];

export default function Contact() {
  const [ref, visible] = useIntersectionObserver();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mvzlaggp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email, // 👈 rename email to _replyto
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.log("ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="orb w-[500px] h-[500px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          top: "auto",
          bottom: -100,
          right: "10%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="code-label text-blue-400 mb-3 block">
            // get_in_touch()
          </span>
          <h2
            className="font-sans font-extrabold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's <span className="grad-text">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-light">
            Have a project in mind? I'd love to hear about it. Let's build
            something great together.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-10 reveal ${visible ? "visible" : ""}`}
        >
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            {INFO_ITEMS.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="glass rounded-xl p-5 flex items-center gap-4"
              >
                <div className="hex-icon text-2xl">{icon}</div>
                <div>
                  <div className="code-label text-slate-500 mb-1">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-slate-200 font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass rounded-xl p-5">
              <div className="code-label text-slate-500 mb-4">
                Connect with me
              </div>
              <div className="flex gap-3">
                {SOCIAL.map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    title={label}
                    className="glass w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:border-blue-400/40"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="code-label text-slate-400 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Muhammed Suleiman"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                </div>
                <div>
                  <label className="code-label text-slate-400 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="code-label text-slate-400 block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={update("subject")}
                  required
                />
              </div>
              <div>
                <label className="code-label text-slate-400 block mb-2">
                  Message
                </label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={update("message")}
                  required
                  style={{ resize: "none" }}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm font-mono text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 text-base relative z-10 border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <span>✓</span> Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
