import { useState } from 'react'
import { PERSONAL } from '../data'
import { SectionLabel } from './About'

const SOCIAL_LINKS = [
  {
    icon: '📧',
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: '#6366f1',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/pranaykaranam',
    href: PERSONAL.linkedin,
    color: '#0ea5e9',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/pranaykaranam',
    href: PERSONAL.github,
    color: '#a78bfa',
  },
]

const inputBase = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  borderRadius: 6,
  border: '1px solid rgba(99,102,241,0.2)',
  background: 'rgba(8,11,20,0.7)',
  color: '#e2e8f0',
  fontSize: '0.85rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'var(--font-mono)',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up your form service (Formspree, EmailJS, etc.) here
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" style={{ padding: '6rem 2rem' }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel number="05">Connect</SectionLabel>

        <h2
          className="font-display font-extrabold tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#e2e8f0' }}
        >
          Get In Touch
        </h2>
        <p
          className="font-mono leading-relaxed mb-12 max-w-md"
          style={{ fontSize: '0.875rem', color: '#64748b' }}
        >
          Open to full-time roles, internships, and freelance opportunities. Let's build something great together.
        </p>

        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {/* Social links */}
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg no-underline transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}50`
                  e.currentTarget.style.background = `${color}08`
                  e.currentTarget.style.transform = 'translateX(5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <div
                    className="font-mono uppercase tracking-widest"
                    style={{ fontSize: '0.65rem', color: '#475569' }}
                  >
                    {label}
                  </div>
                  <div
                    className="font-mono font-medium mt-0.5"
                    style={{ fontSize: '0.82rem', color }}
                  >
                    {value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="p-4 rounded-lg mt-2"
              style={{
                border: '1px solid rgba(34,197,94,0.2)',
                background: 'rgba(34,197,94,0.05)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-block rounded-full animate-pulse-dot"
                  style={{ width: 7, height: 7, background: '#22c55e' }}
                />
                <span
                  className="font-mono font-semibold uppercase tracking-widest"
                  style={{ fontSize: '0.65rem', color: '#22c55e' }}
                >
                  Currently Available
                </span>
              </div>
              <p
                className="font-mono"
                style={{ fontSize: '0.75rem', color: '#64748b' }}
              >
                Typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl flex flex-col gap-4"
            style={{
              border: '1px solid rgba(99,102,241,0.15)',
              background: 'rgba(99,102,241,0.04)',
            }}
          >
            <div>
              <label
                className="block font-mono uppercase tracking-widest font-semibold mb-1.5"
                style={{ fontSize: '0.65rem', color: '#475569' }}
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="input-field"
                style={inputBase}
              />
            </div>

            <div>
              <label
                className="block font-mono uppercase tracking-widest font-semibold mb-1.5"
                style={{ fontSize: '0.65rem', color: '#475569' }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="input-field"
                style={inputBase}
              />
            </div>

            <div>
              <label
                className="block font-mono uppercase tracking-widest font-semibold mb-1.5"
                style={{ fontSize: '0.65rem', color: '#475569' }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="input-field"
                style={{ ...inputBase, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="w-full font-mono font-semibold tracking-wide rounded-md transition-all duration-200"
              style={{
                padding: '0.85rem',
                background: sent
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'linear-gradient(135deg, #6366f1, #a78bfa)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.83rem',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
