interface EducationItem {
  id: string
  date: string
  degree: string
  institution: string
  details: string
  score?: string
}

export default function Education() {
  const educationList: EducationItem[] = [
    {
      id: 'edu-1',
      date: 'Sep 2021 — Sep 2025',
      degree: 'BS in Information Technology',
      institution: 'International Islamic University, Islamabad',
      details: 'Focused on software development, network administration, database management, and cybersecurity fundamentals.',
      score: 'CGPA: 3.34 / 4.00',
    },
    {
      id: 'edu-2',
      date: '2019 — 2021',
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Concepts College of Sciences, Harley Street, Rawalpindi',
      details: 'Studied mathematics, physics, and basic computer science/programming principles.',
      score: 'Marks: 678 / 1100 (63%)',
    },
    {
      id: 'edu-3',
      date: '2017 — 2019',
      degree: 'Matriculation (Computer Science)',
      institution: 'Fauji Foundation College for Boys, New Lalazar, Rawalpindi',
      details: 'High school education with major subjects in Science and Biology.',
      score: 'Marks: 880 / 1100 (80%)',
    },
  ]

  return (
    <section id="education" className="py-24 bg-bg-dark-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-primary/5 blur-[90px]" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          05 / Education
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-16">
          Education
        </h2>

        <div className="relative pl-8 sm:pl-12 border-l border-slate-200 dark:border-white/10 ml-4 sm:ml-6 flex flex-col gap-12">
          {educationList.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot marker */}
              <span className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-cyan-primary border-4 border-bg-dark shadow-[0_0_12px_rgba(8,145,178,0.6)]" />

              {/* Card container */}
              <div className="card-blur card-glow-hover rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-cyan-primary tracking-wide">
                    {item.date}
                  </span>
                  {item.score && (
                    <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full bg-purple-primary/10 text-purple-primary dark:text-purple-light border border-purple-primary/20 w-fit">
                      {item.score}
                    </span>
                  )}
                </div>
                <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white mt-3">
                  {item.degree}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 block mt-1">
                  {item.institution}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
