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
              <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                <BookOpen size={14} /> Profile Overview
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Cloud &amp; DevOps Specialist
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I'm Muhammad Ali Joya, a BS IT graduate from International Islamic University Islamabad. I specialize in cloud containerization, CI/CD automated deployment, and high-performance Web/Mobile UI engineering.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                With real-world experience across Hazza Institute, Tech Harbor, and C&amp;W Resources, I bridge system architecture with elegant user interfaces.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-primary dark:text-cyan-400 hover:gap-3 transition-all"
              >
                Read Full Bio <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Quick Skills Board */}
            <div className="card-blur rounded-2xl p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
              <h3 className="font-head font-bold text-lg text-slate-900 dark:text-white mb-6">
                Core Stack Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'Netlify CI/CD', 'React', 'Three.js', 'TypeScript', 'Node.js', 'Python', 'Kotlin', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-cyan-primary/20 bg-cyan-primary/5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center justify-around text-center">
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">3.34</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">BS IT CGPA</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10" />
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">3+</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Industry Roles</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10" />
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Verified Certs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Summary */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Code size={14} /> Projects
                </div>
                <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-primary dark:text-cyan-400 hover:gap-3 transition-all"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Highlight Project 1 */}
              <div className="card-blur group rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 overflow-hidden flex flex-col justify-between">
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img
                    src={`${import.meta.env.BASE_URL}projects/ai_resume_analyzer.png`}
                    alt="AI Resume Analyzer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-primary/30 text-[10px] font-bold text-cyan-400 uppercase">
                    AI &amp; Web
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-cyan-primary dark:group-hover:text-cyan-400 transition-colors">
                    AI Resume Analyzer
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    AI-powered ATS resume evaluator providing instant scoring, skill gap diagnostics, and formatting recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-white/5">
                    <span className="text-xs text-slate-500 font-medium">React</span>
                    <span className="text-xs text-slate-500 font-medium">Python</span>
                    <span className="text-xs text-slate-500 font-medium">Puter.js</span>
                  </div>
                </div>
              </div>

              {/* Highlight Project 2 */}
              <div className="card-blur group rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 overflow-hidden flex flex-col justify-between">
                <div className="h-48 relative overflow-hidden bg-slate-900">
                  <img
                    src={`${import.meta.env.BASE_URL}projects/3d_portfolio.png`}
                    alt="My Portfolio In 3D"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-primary/30 text-[10px] font-bold text-emerald-400 uppercase">
                    3D &amp; Spatial Web
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-cyan-primary dark:group-hover:text-cyan-400 transition-colors">
                    My Portfolio In 3D
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    Interactive 3D spatial web application engineered with Three.js, custom GLTF models, and fluid camera controls.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-white/5">
                    <span className="text-xs text-slate-500 font-medium">Three.js</span>
                    <span className="text-xs text-slate-500 font-medium">React Fiber</span>
                    <span className="text-xs text-slate-500 font-medium">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                <Briefcase size={14} /> Experience
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Recent Role
              </h2>
              <div className="card-blur rounded-2xl p-6 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 mb-6">
                <span className="text-xs font-semibold text-cyan-primary dark:text-cyan-400 tracking-wide">
                  Jun 2026 — Present
                </span>
                <h3 className="font-head font-bold text-lg text-slate-900 dark:text-white mt-1">
                  Full Stack &amp; Blockchain Developer
                </h3>
                <span className="text-xs font-bold text-emerald-primary dark:text-emerald-400 block mt-0.5">
                  Zedro Labs
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                  Working as a Full Stack Developer, handling end-to-end web development. Additionally, contributing as a Blockchain Developer, working on multiple confidential enterprise blockchain projects and decentralized solutions.
                </p>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-primary dark:text-cyan-400 hover:gap-3 transition-all"
              >
                View Complete Work History <ArrowRight size={16} />
              </Link>
            </div>

            {/* General CTA / Let's Connect */}
            <div className="card-blur rounded-2xl p-8 border border-slate-200 dark:border-white/5 bg-gradient-to-br from-cyan-primary/10 via-emerald-primary/5 to-purple-primary/10 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 text-cyan-primary dark:text-cyan-400 flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>
                <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-3">
                  Let's Build Together
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Looking for a Cloud/DevOps Engineer or Full Stack Developer? Let's connect and discuss how I can contribute to your engineering team.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-primary to-emerald-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-primary/20 hover:shadow-cyan-primary/45 transition-all text-center"
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

