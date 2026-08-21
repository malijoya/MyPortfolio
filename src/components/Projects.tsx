import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  desc: string
  category: string[]
  tags: string[]
  demoUrl: string
  codeUrl: string
  image: string
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | '3d' | 'mobile' | 'ai'>('all')

  const projectsList: Project[] = [
    {
      id: 'ai-resume-analyzer',
      title: 'AI Resume Analyzer',
      desc: 'AI-driven resume parsing and ATS scoring tool giving instant candidate feedback, skill gap analysis, and keyword match metrics.',
      category: ['web', 'ai'],
      tags: ['React', 'Python', 'NLP', 'Puter.js', 'AI scoring'],
      demoUrl: 'https://puter.com/app/aj-ai-resume-analyzer-1',
      codeUrl: 'https://github.com/malijoya/',
      image: `${import.meta.env.BASE_URL}projects/ai_resume_analyzer.png`,
    },
    {
      id: '3d-portfolio',
      title: 'My Portfolio In 3D',
      desc: 'Interactive 3D web experience built with Three.js featuring custom GLTF models, spatial camera panning, and fluid lighting physics.',
      category: ['web', '3d'],
      tags: ['Three.js', 'React Three Fiber', 'React', 'Tailwind CSS'],
      demoUrl: 'https://my-portfolio-in-3d.vercel.app',
      codeUrl: 'https://github.com/malijoya/3D-Portfolio',
      image: `${import.meta.env.BASE_URL}projects/3d_portfolio.png`,
    },
    {
      id: 'gradify-forge',
      title: 'Gradify Forge',
      desc: 'Academic evaluation portal streamlining student grading, course project tracking, and performance analytics with secure REST APIs.',
      category: ['web'],
      tags: ['Node.js', 'Express.js', 'React', 'MongoDB'],
      demoUrl: 'https://github.com/malijoya/Gradify-Forge',
      codeUrl: 'https://github.com/malijoya/Gradify-Forge',
      image: `${import.meta.env.BASE_URL}projects/gradify_forge.png`,
    },
    {
      id: 'calculator-app',
      title: 'Calculator Android App',
      desc: 'Native Android calculator app built using Kotlin and Android Studio with smooth Material Design UI and calculation history tracking.',
      category: ['mobile'],
      tags: ['Kotlin', 'Android Studio', 'Material Design', 'Mobile UI'],
      demoUrl: 'https://github.com/malijoya/Calculator',
      codeUrl: 'https://github.com/malijoya/Calculator',
      image: `${import.meta.env.BASE_URL}projects/calculator_android.png`,
    },
  ]

  const filteredProjects =
    filter === 'all'
      ? projectsList
      : projectsList.filter((proj) => proj.category.includes(filter))

  const filterTabs: { label: string; value: 'all' | 'web' | '3d' | 'mobile' | 'ai' }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Applications', value: 'web' },
    { label: '3D Graphics', value: '3d' },
    { label: 'AI Tools', value: 'ai' },
    { label: 'Mobile Apps', value: 'mobile' },
  ]

  return (
    <section id="projects" className="py-24 bg-bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3">
          03 / Projects
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
          Real production builds and open-source applications showcasing AI integration, 3D web engineering, and mobile architecture.
        </p>

        {/* Filter Bar — single scrollable row, no wrapping */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`flex-shrink-0 px-5 py-2 rounded-full border text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300 ${
                filter === tab.value
                  ? 'bg-cyan-primary/10 border-cyan-primary text-cyan-primary dark:text-cyan-400 shadow-md'
                  : 'bg-transparent border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:border-cyan-primary/30 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card-blur group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 transition-all duration-300 hover:border-cyan-primary/30 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Header / Image */}
                <div className="h-56 relative overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Backdrop Mesh */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Overlay Action Buttons on Hover */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-cyan-primary hover:bg-cyan-primary/80 text-white px-4 py-2.5 rounded-lg shadow-lg transition-all"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider border border-white/20 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg transition-all"
                    >
                      Repository <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-[10px] font-bold text-cyan-primary dark:text-cyan-400 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-cyan-primary dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <a
            href="https://github.com/malijoya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-200 dark:border-white/10 hover:border-cyan-primary/50 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-semibold px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all bg-slate-100 dark:bg-white/5"
          >
            Explore All Repositories on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

