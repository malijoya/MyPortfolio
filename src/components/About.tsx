import { lazy, Suspense } from 'react'
const ModelViewer = lazy(() => import('./ModelViewer'))

function ModelLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 animate-pulse">
      Loading 3D model…
    </div>
  )
}

export default function About() {
  const stats = [
    { number: '3.34', label: 'BS IT CGPA (IIUI)' },
    { number: '3+', label: 'Industry Roles' },
    { number: '15+', label: 'Repositories & Builds' },
  ]

  return (
    <section id="about" className="py-24 bg-bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3">
          01 / About
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-16">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-[350px_1fr] gap-12 md:gap-16 items-center">
          {/* Left Side: Avatar/Decoration */}
          <div className="relative group mx-auto md:mx-0 w-64 md:w-full aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-primary via-emerald-primary to-purple-primary rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition-all duration-300" />
            <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 overflow-hidden relative">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
              <Suspense fallback={<ModelLoader />}>
                <ModelViewer
                  url={`${import.meta.env.BASE_URL}models/muhammad_ali_joya.glb`}
                  className="absolute inset-0"
                />
              </Suspense>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-slate-100/90 dark:from-bg-dark-2/90 to-transparent pointer-events-none">
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm">Muhammad Ali Joya</h3>
                <p className="text-xs text-cyan-primary dark:text-cyan-400 mt-0.5 font-medium">Full Stack &amp; Blockchain Developer</p>
              </div>
            </div>
            {/* Outer offset frame */}
            <div className="absolute inset-2 -z-10 rounded-2xl border border-cyan-primary/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
          </div>

          {/* Right Side: Text & Stats */}
          <div className="flex flex-col justify-center">
            <p className="text-slate-800 dark:text-slate-200 text-lg font-medium mb-6 leading-relaxed">
              I'm a <strong className="text-cyan-primary dark:text-cyan-400">BS IT Graduate</strong> from International Islamic University Islamabad, specializing in <strong className="text-emerald-primary dark:text-emerald-400">Full Stack Development, Blockchain, and Cloud Computing</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              My technical journey combines robust end-to-end web application development with blockchain integrations and cloud deployment experience, particularly deploying applications on AWS EC2.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Whether architecting decentralized applications or engineering complex web applications, I focus on delivering reliable, performant software.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="card-blur card-glow-hover rounded-2xl p-6 text-center"
                >
                  <div className="font-head text-3xl font-bold bg-gradient-to-r from-cyan-primary to-emerald-primary bg-clip-text text-transparent">
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

