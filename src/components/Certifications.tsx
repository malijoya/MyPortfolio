import { Award, Download } from 'lucide-react'

interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  credentialFile?: string
}

export default function Certifications() {
  const certificationsList: CertificationItem[] = [
    {
      id: 'cert-1',
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy',
      date: '2024',
      credentialFile: 'MuhammadAliJoya-1085049 Scrum Fundamental Course.pdf',
    },
    {
      id: 'cert-2',
      title: 'Cisco Networking Certificate',
      issuer: 'Cisco',
      date: '2024',
      credentialFile: 'Cisco Certificate.pdf',
    },
  ]

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-purple-primary/5 blur-[90px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          06 / Certifications
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          Certificates &amp; Badges
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl">
          A showcase of industry-recognized certifications and professional credentials.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="card-blur card-glow-hover rounded-2xl p-6 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Icon header */}
                <div className="w-12 h-12 rounded-xl bg-purple-primary/10 text-purple-primary dark:text-purple-light flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>

                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                  {cert.date}
                </span>

                <h3 className="font-head font-bold text-lg text-slate-900 dark:text-white mt-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              {cert.credentialFile && (
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5">
                  <a
                    href={`${import.meta.env.BASE_URL}certificates/${encodeURIComponent(cert.credentialFile)}`}
                    download={cert.credentialFile}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-primary dark:text-purple-light hover:underline uppercase tracking-wider"
                  >
                    View Credential <Download size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
