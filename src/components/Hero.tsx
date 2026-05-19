import { useEffect, useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const phrases = [
    'Full Stack Developer.',
    'Creative Technologist.',
    'Problem Solver.',
    'Web Artisan.',
  ]
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    const ticker = setTimeout(() => {
      handleTyping()
    }, delta)

    return () => clearTimeout(ticker)
  }, [typedText, isDeleting])

  const handleTyping = () => {
    const i = loopNum % phrases.length
    const fullText = phrases[i]
    let updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1)

    setTypedText(updatedText)

    if (isDeleting) {
      setDelta(75)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(1500) // Pause at full text
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(200)
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Grid & Decorative Orbs */}
      <div className="absolute inset-0 hero-bg-grid z-0" aria-hidden="true" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-primary/10 dark:bg-purple-primary/10 blur-[100px] animate-float z-0" aria-hidden="true" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-primary/5 dark:bg-cyan-primary/10 blur-[100px] animate-float z-0" aria-hidden="true" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-pink-primary/5 dark:bg-pink-primary/5 blur-[80px] animate-float z-0" aria-hidden="true" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-primary/30 bg-purple-primary/10 text-xs font-semibold text-purple-primary dark:text-purple-light mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
          Open to new opportunities
        </div>

        {/* Headline */}
        <h1 className="font-head text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Hi, I'm <span className="gradient-text">Muhammad</span>
          <br />
          I build{' '}
          <span className="text-purple-primary dark:text-purple-light inline-block min-h-[1.2em]">
            {typedText}
            <span className="animate-pulse text-purple-primary ml-1">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Full Stack Developer &amp; Creative Technologist — turning complex ideas into elegant,
          high‑performance digital experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-primary to-cyan-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-purple-primary/25 hover:shadow-purple-primary/45 hover:-translate-y-0.5 transition-all"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-200 dark:border-white/10 hover:border-purple-primary/50 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-semibold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-purple-primary/50 hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-purple-primary/50 hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a
            href="mailto:your@email.com"
            className="p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-purple-primary/50 hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
        <span>Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-primary to-transparent" />
      </div>
    </section>
  )
}
