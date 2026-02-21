import { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL } from '../data'

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    scrollTo(link.toLowerCase())
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        padding: '0 2rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,11,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.12)' : 'none',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="font-display gradient-text font-bold text-lg tracking-wide"
      >
        pk.dev
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: '#64748b' }}
            onMouseEnter={(e) => (e.target.style.color = '#a78bfa')}
            onMouseLeave={(e) => (e.target.style.color = '#64748b')}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-2xl"
        style={{ color: '#a78bfa' }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="absolute left-0 right-0 md:hidden"
          style={{
            top: 64,
            background: 'rgba(8,11,20,0.98)',
            borderBottom: '1px solid rgba(99,102,241,0.15)',
            padding: '0.5rem 2rem 1rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="block w-full text-left py-3 font-mono text-xs uppercase tracking-widest"
              style={{
                color: '#64748b',
                borderBottom: '1px solid rgba(99,102,241,0.06)',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
