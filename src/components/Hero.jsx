import { useEffect, useRef, useState } from 'react'
import { PERSONAL, STATS } from '../data'

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = Date.now()
        const tick = () => {
          const progress = Math.min((Date.now() - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ padding: '6rem 2rem 4rem' }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '15%', right: '8%',
          width: 520, height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '10%', left: '3%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Spinning ring (decorative) */}
      <div
        className="pointer-events-none absolute hidden lg:block animate-spin-slow"
        style={{
          top: '20%', right: '12%',
          width: 300, height: 300,
          borderRadius: '50%',
          border: '1px solid rgba(99,102,241,0.07)',
        }}
      />
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          top: '23%', right: '15%',
          width: 240, height: 240,
          borderRadius: '50%',
          border: '1px dashed rgba(167,139,250,0.06)',
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto">

        {/* Status badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{
            border: '1px solid rgba(99,102,241,0.3)',
            background: 'rgba(99,102,241,0.08)',
            width: 'fit-content',
          }}
        >
          <span
            className="animate-pulse-dot inline-block rounded-full"
            style={{ width: 6, height: 6, background: '#22c55e' }}
          />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#a78bfa' }}>
            {PERSONAL.available ? 'Available for Opportunities' : 'Currently Unavailable'}
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up-1 font-display font-extrabold leading-none tracking-tight mb-3"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          {PERSONAL.nameShort}
          <br />
          <span className="gradient-text">{PERSONAL.nameLast}</span>
        </h1>

        {/* Role line */}
        <div
          className="animate-fade-up-2 font-mono mb-5"
          style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)', color: '#64748b' }}
        >
          <span style={{ color: '#6366f1' }}>{'<'}</span>
          {PERSONAL.role}
          <span style={{ color: '#6366f1' }}>{' />'}</span>
          {' · '}
          <span style={{ color: '#a78bfa' }}>{PERSONAL.stack}</span>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up-3 font-mono leading-relaxed max-w-lg mb-10"
          style={{ fontSize: '0.9rem', color: '#64748b' }}
        >
          {PERSONAL.tagline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => scrollTo('projects')}
            className="font-mono font-semibold tracking-wide rounded-md transition-all duration-200"
            style={{
              padding: '0.8rem 1.8rem',
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.83rem',
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
              letterSpacing: '0.04em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 45px rgba(99,102,241,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.3)'
            }}
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="font-mono font-semibold tracking-wide rounded-md transition-all duration-200"
            style={{
              padding: '0.8rem 1.8rem',
              background: 'transparent',
              color: '#a78bfa',
              border: '1px solid rgba(99,102,241,0.4)',
              cursor: 'pointer',
              fontSize: '0.83rem',
              letterSpacing: '0.04em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.08)'
              e.currentTarget.style.borderColor = '#6366f1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-5 flex flex-wrap gap-10">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label}>
              <div
                className="font-display font-extrabold gradient-text"
                style={{ fontSize: '2.2rem', lineHeight: 1 }}
              >
                <Counter end={value} />{suffix}
              </div>
              <div
                className="font-mono uppercase tracking-widest mt-1"
                style={{ fontSize: '0.65rem', color: '#475569' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-scroll-bounce absolute"
        style={{ bottom: '2rem', left: '50%' }}
      >
        <div className="flex flex-col items-center gap-2">
          <div
            style={{
              width: 1, height: 40,
              background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)',
            }}
          />
          <span
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: '0.6rem', color: '#475569' }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  )
}
