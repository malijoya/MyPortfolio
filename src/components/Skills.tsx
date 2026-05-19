export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'Docker', 'Linux', 'Figma', 'Flutter', 'Vercel / Netlify'],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-primary/5 blur-[80px] z-0" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-purple-primary/5 blur-[80px] z-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          02 / Skills
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          My Tech Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl">
          Here are the core technologies and frameworks I use on a daily basis to build scalable applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card-blur card-glow-hover rounded-2xl p-6 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5"
            >
              <h3 className="font-head font-bold text-lg text-purple-primary dark:text-purple-light mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-full border border-purple-primary/10 bg-purple-primary/5 dark:bg-purple-primary/5 hover:bg-purple-primary/10 hover:border-purple-primary/30 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
