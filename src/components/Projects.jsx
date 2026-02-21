import { useState } from 'react'
import { PROJECTS } from '../data'
import { SectionLabel } from './About'

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const { title, emoji, description, tech, github, live, accent } = project

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${hovered ? accent + '50' : 'rgba(255,255,255,0.06)'}`,
        background: hovered ? `${accent}08` : 'rgba(255,255,255,0.02)',
        padding: '1.5rem',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Top glow bar */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s',
        }}
      />

      {/* Header row */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-3xl">{emoji}</span>
          <h3
            className="font-display font-bold mt-2"
            style={{ fontSize: '1rem', color: '#e2e8f0' }}
          >
            {title}
          </h3>
        </div>

        <div className="flex gap-2 shrink-0">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-medium rounded transition-all duration-200"
            style={{
              padding: '0.28rem 0.6rem',
              fontSize: '0.68rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
              color: '#94a3b8',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            GitHub ↗
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-medium rounded transition-all duration-200"
            style={{
              padding: '0.28rem 0.6rem',
              fontSize: '0.68rem',
              border: `1px solid ${accent}45`,
              background: `${accent}18`,
              color: accent,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${accent}28`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${accent}18`
            }}
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        className="font-mono leading-relaxed flex-1 mb-4"
        style={{ fontSize: '0.8rem', color: '#64748b' }}
      >
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono rounded"
            style={{
              fontSize: '0.67rem',
              padding: '0.18rem 0.55rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#94a3b8',
              letterSpacing: '0.04em',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2rem' }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="03">Work</SectionLabel>

        <h2
          className="font-display font-extrabold tracking-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#e2e8f0' }}
        >
          Featured Projects
        </h2>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
