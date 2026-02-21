import { useState } from 'react'
import { SKILLS } from '../data'
import { SectionLabel } from './About'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Languages')
  const categories = Object.keys(SKILLS)

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 2rem',
        background: 'rgba(99,102,241,0.02)',
        borderTop: '1px solid rgba(99,102,241,0.07)',
        borderBottom: '1px solid rgba(99,102,241,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02">Skills</SectionLabel>

        <h2
          className="font-display font-extrabold tracking-tight mb-10"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#e2e8f0' }}
        >
          Technical Arsenal
        </h2>

        {/* Tab bar */}
        <div
          className="flex flex-wrap gap-1 p-1 rounded-lg mb-8 w-fit"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="font-mono font-semibold rounded-md transition-all duration-200"
              style={{
                padding: '0.45rem 0.9rem',
                fontSize: '0.72rem',
                letterSpacing: '0.05em',
                background: activeTab === cat ? '#6366f1' : 'transparent',
                color: activeTab === cat ? '#fff' : '#64748b',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))' }}
        >
          {SKILLS[activeTab].map(({ name, icon }) => (
            <div
              key={name}
              className="card-hover flex items-center gap-3 p-3 rounded-lg cursor-default"
              style={{
                border: '1px solid rgba(99,102,241,0.1)',
                background: 'rgba(99,102,241,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)'
                e.currentTarget.style.background = 'rgba(99,102,241,0.04)'
              }}
            >
              <span className="text-xl shrink-0">{icon}</span>
              <span
                className="font-mono font-medium"
                style={{ fontSize: '0.8rem', color: '#cbd5e1' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
