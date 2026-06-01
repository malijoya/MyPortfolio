import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-bg-dark/85 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-head font-bold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1 group"
        >
          <span className="text-purple-primary group-hover:translate-x-[-2px] transition-transform">&lt;</span>
          <span>MAJ</span>
          <span className="text-purple-primary group-hover:translate-x-[2px] transition-transform">/&gt;</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 ${
                  isActive
                    ? 'text-purple-primary dark:text-purple-light bg-slate-100 dark:bg-white/5'
                    : 'text-slate-600 dark:text-slate-400'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Call to Actions + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-purple-primary/50 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href="#resume"
            className="inline-flex items-center gap-1 text-sm font-semibold border border-purple-primary text-purple-primary dark:text-purple-light hover:bg-purple-primary/10 px-4 py-2 rounded-lg transition-all"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu and theme toggle buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-white/98 dark:bg-bg-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-2xl font-bold transition-all ${
                isActive
                  ? 'text-purple-primary dark:text-purple-light'
                  : 'text-slate-800 dark:text-slate-300 hover:text-purple-primary dark:hover:text-purple-light'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
        <a
          href="#resume"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 rounded-lg border border-purple-primary text-purple-primary dark:text-purple-light text-lg font-semibold hover:bg-purple-primary/10 transition-all"
        >
          Download Resume
        </a>
      </div>
    </nav>
  )
}
