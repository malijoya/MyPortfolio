import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Cursor glow tracker
  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePos)
    return () => window.removeEventListener('mousemove', updateMousePos)
  }, [])

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-dark text-text-primary relative transition-colors duration-300">
        {/* Dynamic Cursor Glow Shadow */}
        <div
          className="fixed pointer-events-none z-50 w-[400px] h-[400px] rounded-full bg-radial from-purple-primary/10 to-transparent -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  )
}
