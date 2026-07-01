import { useState, useEffect, useRef, useCallback } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import CertificationsPage from './pages/CertificationsPage'

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const glowRef = useRef<HTMLDivElement>(null)

  // Initialize theme based on preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Default to dark
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', nextTheme)
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return nextTheme
    })
  }, [])

  // Cursor glow tracker — direct DOM mutation, zero re-renders
  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-dark text-text-primary relative transition-colors duration-300">
        {/* Dynamic Cursor Glow Shadow — positioned via ref, not state */}
        <div
          ref={glowRef}
          className="fixed pointer-events-none z-50 w-[400px] h-[400px] rounded-full bg-radial from-purple-primary/10 to-transparent hidden md:block will-change-transform"
          style={{ top: 0, left: 0, transform: 'translate(-200px, -200px)' }}
        />

        {/* Navigation */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  )
}
