interface ExperienceItem {
  id: string
  date: string
  title: string
  organization: string
  desc: string
}

export default function Experience() {
  const items: ExperienceItem[] = [
    {
      id: 'exp-1',
      date: '2023 — Present',
      title: 'Full Stack Developer',
      organization: 'Freelance / Remote',
      desc: 'Building responsive web and mobile solutions for clients globally. Designing robust Python/Node backends and highly interactive React/Flutter user interfaces.',
    },
    {
      id: 'exp-2',
      date: '2021 — 2025',
      title: 'BSc Computer Science',
      organization: 'University of Science & Tech',
      desc: 'Studied software engineering principles, core data structures, algorithm design, cloud computing, and database management architectures.',
    },
    {
      id: 'exp-3',
      date: '2022 — 2023',
      title: 'Open Source Contributor',
      organization: 'GitHub Communities',
      desc: 'Participated in fixing repository bugs, optimizing codebase loads, and contributing to tools in the JavaScript and Python ecosystem.',
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-purple-primary/5 blur-[90px]" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          04 / Experience
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-16">
          My Journey
        </h2>

        {/* Timeline container */}
        <div className="relative pl-8 sm:pl-12 border-l border-slate-200 dark:border-white/10 ml-4 sm:ml-6 flex flex-col gap-12">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Node dot marker */}
              <span className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-purple-primary border-4 border-bg-dark shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

              {/* Timeline Card */}
              <div className="card-blur card-glow-hover rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
                <span className="text-xs font-semibold text-purple-primary dark:text-purple-light tracking-wide">
                  {item.date}
                </span>
                <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mt-2">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-cyan-primary tracking-wide block mt-1">
                  {item.organization}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
