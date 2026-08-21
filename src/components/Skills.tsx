export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & 3D Web',
      skills: ['React', 'Next.js', 'Redux Toolkit', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Three.js', 'React Three Fiber', 'HTML5 & CSS3'],
    },
    {
      title: 'Backend, APIs & Blockchain',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'Blockchain', 'Web3', 'Smart Contracts', 'Python'],
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS RDS', 'Firebase Firestore', 'Prisma ORM'],
    },
    {
      title: 'Cloud, DevOps & Tools',
      skills: ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS, IAM)', 'CI/CD Pipelines', 'Netlify', 'Git & GitHub', 'Jest', 'Postman', 'Figma', 'Linux', 'Kotlin'],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-primary/10 blur-[90px] z-0" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-primary/10 blur-[90px] z-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3">
          02 / Skills
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          Core Tech Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl">
          Technologies, frameworks, and cloud tooling I utilize to architect scalable systems and interactive web apps.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card-blur card-glow-hover rounded-2xl p-6 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5"
            >
              <h3 className="font-head font-bold text-lg text-cyan-primary dark:text-cyan-400 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full border border-cyan-primary/15 bg-cyan-primary/5 dark:bg-cyan-primary/5 hover:bg-cyan-primary/15 hover:border-cyan-primary/30 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
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

