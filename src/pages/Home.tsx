import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { ArrowRight, BookOpen, Briefcase, Code, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
          
          {/* About Summary */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                <BookOpen size={14} /> About Me
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Web Developer 
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I'm Muhammad Ali Joya, a passionate Full Stack Developer focused on building clean, performant, and premium digital experiences. I hold a BS in Information Technology and specialize in React, Next, Three.js and mobile technologies.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                My education includes detailed training in system architectures, software engineering, and devOps practices.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-primary dark:text-purple-light hover:gap-3 transition-all"
              >
                Read About Me <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Quick Skills Board */}
            <div className="card-blur rounded-2xl p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
              <h3 className="font-head font-bold text-lg text-slate-900 dark:text-white mb-6">
                Core Stack Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Three.js', 'Tailwind CSS', 'MongoDb', 'Firebase', 'Microsoft 365'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-purple-primary/15 bg-purple-primary/5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">3.34</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">BS IT CGPA</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10" />
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">10+</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Completed Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Summary */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Code size={14} /> Projects
                </div>
                <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-primary dark:text-purple-light hover:gap-3 transition-all"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Highlight Project 1 */}
              <div className="card-blur group rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 overflow-hidden flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🛡️</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-primary/10 border border-purple-primary/20 text-[10px] font-bold text-purple-primary dark:text-purple-light uppercase">
                      Mobile &amp; AI
                    </span>
                  </div>
                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-purple-primary dark:group-hover:text-purple-light transition-colors">
                    PhishAlert
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    A real‑time URL phishing detection mobile application powered by machine learning risk scoring and Firebase.
                  </p>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-4">
                  <span className="text-xs text-slate-500 font-medium">Flutter</span>
                  <span className="text-xs text-slate-500 font-medium">Python</span>
                  <span className="text-xs text-slate-500 font-medium">Flask</span>
                </div>
              </div>

              {/* Highlight Project 2 */}
              <div className="card-blur group rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 overflow-hidden flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">🍽️</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-primary/10 border border-purple-primary/20 text-[10px] font-bold text-purple-primary dark:text-purple-light uppercase">
                      Web App
                    </span>
                  </div>
                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-purple-primary dark:group-hover:text-purple-light transition-colors">
                    Aab‑O‑Dana
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Restaurant web platform with fully interactive online ordering, reservations, and a custom 4‑floor layout navigation.
                  </p>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-4">
                  <span className="text-xs text-slate-500 font-medium">HTML5</span>
                  <span className="text-xs text-slate-500 font-medium">CSS3</span>
                  <span className="text-xs text-slate-500 font-medium">JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                <Briefcase size={14} /> Experience
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Latest Position
              </h2>
              <div className="card-blur rounded-2xl p-6 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 mb-6">
                <span className="text-xs font-semibold text-purple-primary dark:text-purple-light tracking-wide">
                  2023 — Present
                </span>
                <h3 className="font-head font-bold text-lg text-slate-900 dark:text-white mt-1">
                  Full Stack Developer
                </h3>
                <span className="text-xs font-medium text-cyan-primary block mt-0.5">
                  Freelance / Remote
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                  Building custom web and mobile applications with React.js, Next.js, Three.js, Node.js, and Kotlin. Designing robust backends and clean frontends.
                </p>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-primary dark:text-purple-light hover:gap-3 transition-all"
              >
                View Full Timeline <ArrowRight size={16} />
              </Link>
            </div>

            {/* General CTA / Let's Connect */}
            <div className="card-blur rounded-2xl p-8 border border-slate-200 dark:border-white/5 bg-gradient-to-br from-purple-primary/10 to-cyan-primary/5 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-primary/10 text-purple-primary dark:text-purple-light flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>
                <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-3">
                  Have a Project Idea?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Let's collaborate and bring your ideas to life with high‑performance digital solutions.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-primary to-cyan-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-purple-primary/20 hover:shadow-purple-primary/45 transition-all text-center"
              >
                Get In Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
