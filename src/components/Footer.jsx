import { PERSONAL } from '../data'

export default function Footer() {
  return (
    <footer
  className="text-center font-mono"
  style={{
    padding: '2rem',
    borderTop: '1px solid rgba(99,102,241,0.1)',
    fontSize: '0.72rem',
    color: '#334155',
    letterSpacing: '0.05em',
  }}
>
  © {new Date().getFullYear()} {PERSONAL.name} · Built with React + Tailwind CSS
</footer>
  )
}
