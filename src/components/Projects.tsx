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
  emoji: string
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai'>('all')

  const projectsList: Project[] = [
    {
      id: 'phishalert',
      title: 'PhishAlert',
      desc: 'A real‑time URL phishing detection mobile application powered by machine learning risk scoring and Firebase community sharing.',
      category: ['mobile', 'ai'],
      tags: ['Flutter', 'Python', 'Flask', 'Machine Learning'],
      demoUrl: '#',
      codeUrl: 'https://github.com',
      emoji: '🛡️',
    },
    {
      id: 'aabodana',
      title: 'Aab‑O‑Dana',
      desc: 'Restaurant web platform with fully interactive online ordering, reservations, and a custom 4‑floor layout navigation.',
      category: ['web'],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Interactive UI'],
      demoUrl: '#',
      codeUrl: 'https://github.com',
      emoji: '🍽️',
    },
    {
      id: 'nft-audit',
      title: 'CryptoMarket Audit',
      desc: 'Comprehensive dashboard analyzing NFT API and blockchain data flows, with performance metrics and transaction auditing.',
      category: ['web'],
      tags: ['React', 'Node.js', 'Web3', 'Tailwind CSS'],
      demoUrl: '#',
      codeUrl: 'https://github.com',
      emoji: '📊',
    },
  ]

  const filteredProjects =
    filter === 'all'
      ? projectsList
      : projectsList.filter((proj) => proj.category.includes(filter))

  const filterTabs: { label: string; value: 'all' | 'web' | 'mobile' | 'ai' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web Apps', value: 'web' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'AI / ML', value: 'ai' },
  ]

  return (
    <section id="projects" className="py-24 bg-bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          03 / Projects
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          Featured Work
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
          A hand-picked selection of projects showcasing web development, mobile applications, and AI integrations.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-6 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300 ${
                filter === tab.value
                  ? 'bg-purple-primary/10 border-purple-primary text-purple-primary dark:text-purple-light shadow-md'
                  : 'bg-transparent border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:border-purple-primary/30 dark:hover:border-white/10 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card-blur group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 transition-all duration-300 hover:border-purple-primary/30 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-200 to-purple-primary/10 dark:from-bg-dark-2 dark:to-purple-primary/10 flex items-center justify-center text-5xl">
                  {project.emoji}
                  {/* Subtle backdrop mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent)] opacity-60" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/90 dark:bg-bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-purple-primary hover:bg-purple-primary/80 text-white px-4 py-2.5 rounded-lg transition-all"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider border border-white/20 hover:bg-white/5 text-white px-4 py-2.5 rounded-lg transition-all"
                    >
                      Code <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
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
                        className="px-2.5 py-0.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-[10px] font-bold text-cyan-primary uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-purple-primary dark:group-hover:text-purple-light transition-colors">
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-200 dark:border-white/10 hover:border-purple-primary/50 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-semibold px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all bg-slate-100 dark:bg-white/5"
          >
            See All Projects on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
