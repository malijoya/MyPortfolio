interface ExperienceItem {
  id: string
  date: string
  title: string
  organization: string
  desc: string
  tags?: string[]
}

export default function Experience() {
  const items: ExperienceItem[] = [
    {
      id: 'exp-zedro-labs',
      date: 'Jun 2026 — Present',
      title: 'Full Stack & Blockchain Developer',
      organization: 'Zedro Labs',
      desc: 'Working as a Full Stack Developer, handling end-to-end web development. Additionally, contributing as a Blockchain Developer, working on multiple confidential enterprise blockchain projects and decentralized solutions.',
      tags: ['Full Stack', 'Blockchain', 'Web3', 'Smart Contracts'],
    },
    {
      id: 'exp-cybill-nerd',
      date: 'Jan 2026',
      title: 'Full Stack Development Intern',
      organization: 'Cybill Nerd',
      desc: 'Completed an intensive full-stack development internship, gaining hands-on experience in building robust web applications and contributing to various development tasks.',
      tags: ['Full Stack', 'Web Development'],
    },
    {
      id: 'exp-3tech',
      date: 'Sep 2025 — Dec 2025',
      title: 'Android Development Intern',
      organization: '3Tech',
      desc: 'Developed multiple Android applications from scratch using Kotlin. Gained practical experience in mobile app architecture, UI design, and integrating modern Android components.',
      tags: ['Android', 'Kotlin', 'Mobile App Development'],
    },
    {
      id: 'exp-techspire',
      date: 'Jan 2024 — Present',
      title: 'Full Stack Developer',
      organization: 'TechSpire Solutions',
      desc: 'Developing and maintaining responsive web applications using React.js, Next.js, and Node.js. Integrated RESTful APIs and optimized PostgreSQL/MongoDB queries. Designed real-time data dashboards with Chart.js, improving frontend load time by 30% through lazy loading and code splitting. Writing unit/integration tests with Jest in collaboration with QA.',
      tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Chart.js', 'Jest'],
    },
    {
      id: 'exp-devslogix',
      date: 'Jun 2022 — Dec 2023',
      title: 'Frontend Developer',
      organization: 'DevsLogix',
      desc: 'Built reusable UI components with Tailwind CSS and Material UI, translating Figma designs into pixel-perfect code. Managed application state with Redux Toolkit and React Context API. Integrated Stripe payment gateway and Firebase Auth/JWT authentication. Worked in Agile/Scrum team with daily standups and sprint planning.',
      tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Stripe', 'Firebase Auth', 'Figma', 'Agile'],
    },
    {
      id: 'exp-hazza',
      date: '2025 (3 Months)',
      title: 'Cloud Computing & DevOps Trainee',
      organization: 'HAZZA Institute of Technology',
      desc: 'Gained hands-on experience in containerization with Docker and Kubernetes orchestration. Built and automated CI/CD pipelines to deploy cloud-native applications. Leveraged core AWS services—EC2, S3, RDS, IAM—to design and manage scalable infrastructure.',
      tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'Linux'],
    },
    {
      id: 'exp-tech-harbor',
      date: '10/2024 — 04/2025',
      title: 'Web Developer',
      organization: 'Tech Harbor',
      desc: 'Built responsive, mobile-first landing pages with HTML5, CSS3, and vanilla JS. Improved layout structure and visual components. Deployed static sites to Netlify CI/CD, reducing client update cycle from 2 days to 30 minutes.',
      tags: ['HTML5/CSS3', 'JavaScript', 'Netlify CI/CD', 'Responsive Design'],
    },
    {
      id: 'exp-cw-resources',
      date: '07/2024 — 09/2024',
      title: 'Web Developer Intern',
      organization: 'C & W Resources',
      desc: 'Created landing pages and enhanced UI components using modern HTML, CSS, and JavaScript. Implemented responsive-design techniques ensuring cross-device and browser compatibility.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Engineering'],
    },
  ]


  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-primary/10 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-primary/10 blur-[100px]" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs font-bold text-cyan-primary tracking-wider uppercase mb-3">
          04 / Experience
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Professional Journey
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl">
          Real-world industry experience spanning Full Stack Development, Frontend Engineering, Cloud Infrastructure, and DevOps pipelines.
        </p>

        {/* Timeline container */}
        <div className="relative pl-8 sm:pl-12 border-l border-slate-200 dark:border-white/10 ml-4 sm:ml-6 flex flex-col gap-12">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Node dot marker */}
              <span className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-cyan-primary border-4 border-bg-dark shadow-[0_0_14px_rgba(6,182,212,0.7)]" />

              {/* Timeline Card */}
              <div className="card-blur card-glow-hover rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-semibold text-cyan-primary dark:text-cyan-400 tracking-wide">
                    {item.date}
                  </span>
                  <span className="text-xs font-bold text-emerald-primary dark:text-emerald-400 tracking-wide">
                    {item.organization}
                  </span>
                </div>

                <h3 className="font-head font-bold text-xl text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 leading-relaxed">
                  {item.desc}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-[10px] font-bold text-cyan-primary dark:text-cyan-400 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

