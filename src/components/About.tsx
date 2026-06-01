import ModelViewer from './ModelViewer'

export default function About() {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '09+', label: 'Happy Clients' },
  ]

  return (
    <section id="about" className="py-24 bg-bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          01 / About
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-16">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-[350px_1fr] gap-12 md:gap-16 items-center">
          {/* Left Side: Avatar/Decoration */}
          <div className="relative group mx-auto md:mx-0 w-64 md:w-full aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-primary to-cyan-primary rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-all duration-300" />
            <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 overflow-hidden relative">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
              <ModelViewer
                url={`${import.meta.env.BASE_URL}models/muhammad_ali_joya.glb`}
                className="absolute inset-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-slate-100/90 dark:from-bg-dark-2/90 to-transparent pointer-events-none">
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm">Muhammad Ali Joya</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Full Stack Developer</p>
              </div>
            </div>
            {/* Outer offset frame */}
            <div className="absolute inset-2 -z-10 rounded-2xl border border-purple-primary/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
          </div>

          {/* Right Side: Text & Stats */}
          <div className="flex flex-col justify-center">
            <p className="text-slate-800 dark:text-slate-200 text-lg font-medium mb-6 leading-relaxed">
              I'm a passionate <strong className="text-purple-primary dark:text-purple-light">Full Stack Developer</strong> who loves crafting clean, performant, and beautiful digital experiences for the User & Clients.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              With a strong background in computer science and a drive for continuous learning,
              I bridge the gap between design and engineering. My focus is on creating products that not only look spectacular but also run seamlessly on robust architecture.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              When I'm not writing code, I love exploring emerging technologies, contributing to open‑source communities, or debugging interesting issues over a cup of warm coffee.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="card-blur card-glow-hover rounded-2xl p-6 text-center"
                >
                  <div className="font-head text-3xl font-bold bg-gradient-to-r from-purple-primary to-cyan-primary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
