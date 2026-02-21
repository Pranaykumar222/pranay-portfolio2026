import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Education   from './components/Education'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import CursorGlow  from './components/CursorGlow'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  return (
    <div style={{ background: '#080b14', minHeight: '100vh', color: '#e2e8f0' }}>
      <CursorGlow />
      <Navbar scrollTo={scrollTo} />
      <main>
        <Hero      scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
