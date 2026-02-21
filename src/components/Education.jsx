import { EDUCATION } from '../data'
import { SectionLabel } from './About'

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: '6rem 2rem',
        background: 'rgba(99,102,241,0.02)',
        borderTop: '1px solid rgba(99,102,241,0.07)',
        borderBottom: '1px solid rgba(99,102,241,0.07)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel number="04">Background</SectionLabel>

        <h2
          className="font-display font-extrabold tracking-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#e2e8f0' }}
        >
          Education
        </h2>

        <div
          className="relative pl-8"
          style={{ borderLeft: '2px solid rgba(99,102,241,0.18)' }}
        >
          {EDUCATION.map((edu, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div
                className="absolute rounded-full"
                style={{
                  left: -33, top: 22,
                  width: 16, height: 16,
                  background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                  boxShadow: '0 0 20px rgba(99,102,241,0.5)',
                }}
              />

              <div
                className="p-6 rounded-xl"
                style={{
                  border: '1px solid rgba(99,102,241,0.15)',
                  background: 'rgba(99,102,241,0.05)',
                }}
              >
                {/* Period + status */}
                <div className="flex flex-wrap justify-between gap-2 mb-4">
                  <span
                    className="font-mono font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded"
                    style={{
                      color: '#a78bfa',
                      background: 'rgba(99,102,241,0.15)',
                    }}
                  >
                    {edu.period}
                  </span>
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: '#475569' }}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Degree */}
                <h3
                  className="font-display font-bold mb-1"
                  style={{ fontSize: '1.15rem', color: '#e2e8f0' }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="font-mono mb-5"
                  style={{ fontSize: '0.83rem', color: '#64748b' }}
                >
                  {edu.institution}
                </p>

                {/* Courses */}
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="font-mono rounded"
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: '#94a3b8',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
