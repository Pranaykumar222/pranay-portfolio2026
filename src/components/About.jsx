import { ABOUT_PARAGRAPHS, FOCUS_AREAS, PERSONAL } from '../data'

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className="font-mono text-xs tracking-widest uppercase font-semibold"
        style={{ color: '#6366f1' }}
      >
        {number} /
      </span>
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: '#475569' }}
      >
        {children}
      </span>
    </div>
  )
}

export { SectionLabel }

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '6rem 2rem' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="01">About</SectionLabel>

        <h2
          className="font-display font-extrabold tracking-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#e2e8f0' }}
        >
          Who I Am
        </h2>

        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

          {/* Bio */}
          <div className="space-y-4">
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="font-mono leading-relaxed"
                style={{ fontSize: '0.875rem', color: '#64748b' }}
              >
                {i === 0 ? (
                  <>
                    I'm{' '}
                    <span className="font-semibold" style={{ color: '#a78bfa' }}>
                      {PERSONAL.name}
                    </span>
                    {para.slice(para.indexOf(','))}
                  </>
                ) : i === 1 ? (
                  <>
                    I specialize in the{' '}
                    <span style={{ color: '#6366f1' }}>MERN stack</span>
                    {para.slice(para.indexOf(' and'))}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          {/* Focus areas */}
          <div className="flex flex-col gap-3">
            {FOCUS_AREAS.map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="card-hover flex gap-4 p-4 rounded-lg cursor-default"
                style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}45`
                  e.currentTarget.style.background = `${color}07`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <span className="text-2xl mt-0.5 shrink-0">{icon}</span>
                <div>
                  <div
                    className="font-display font-semibold text-sm mb-1"
                    style={{ color }}
                  >
                    {title}
                  </div>
                  <div
                    className="font-mono leading-relaxed"
                    style={{ fontSize: '0.78rem', color: '#64748b' }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
