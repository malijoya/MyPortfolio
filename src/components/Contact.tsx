import React, { useState } from 'react'
import { Mail, MapPin, CheckCircle, Send, Globe } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'I want to hire you',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "baa804ec-e524-4aee-9cc2-fb0270977752",
          name: formData.name,
          email: formData.email,
          purpose: formData.purpose,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.name} - Portfolio Contact`
        })
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', purpose: 'I want to hire you', subject: '', message: '' })
        // Reset success state after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        console.error("Web3Forms Submission Error:", data)
        alert("Failed to send message: " + (data.message || "Unknown error"))
      }
    } catch (error) {
      console.error("Network error submitting form:", error)
      alert("Failed to send message: Network error. Please check your internet connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 bg-bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-bold text-purple-primary tracking-wider uppercase mb-3">
          07 / Contact
        </div>
        <h2 className="font-head text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
          Let's Talk
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-16 max-w-xl">
          Have an idea, project, or opportunity you'd like to discuss? Reach out and let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-[380px_1fr] gap-12 items-start">
          {/* Info Column */}
          <div className="flex flex-col gap-4">
            <div className="card-blur rounded-2xl p-4 sm:p-5 flex items-center gap-3 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
              <div className="p-2.5 rounded-xl bg-purple-primary/10 text-purple-primary dark:text-purple-light shrink-0">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Email</span>
                <a href="mailto:muhammadalijoya655@gmail.com" className="block text-[11px] xs:text-xs sm:text-[13px] md:text-xs lg:text-[13px] xl:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 hover:text-purple-primary dark:hover:text-purple-light transition-colors whitespace-nowrap" title="muhammadalijoya655@gmail.com">
                  muhammadalijoya655@gmail.com
                </a>
              </div>
            </div>

            <div className="card-blur rounded-2xl p-4 sm:p-5 flex items-center gap-3 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
              <div className="p-2.5 rounded-xl bg-cyan-primary/10 text-cyan-primary shrink-0">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Location</span>
                <p className="text-[11px] xs:text-xs sm:text-[13px] md:text-xs lg:text-[13px] xl:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap" title="DHA Phase 1, Islamabad">
                  DHA Phase 1, Islamabad
                </p>
              </div>
            </div>

            <div className="card-blur rounded-2xl p-4 sm:p-5 flex items-center gap-3 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5">
              <div className="p-2.5 rounded-xl bg-green-500/10 text-green-500 shrink-0">
                <Globe size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Availability</span>
                <p className="text-[11px] xs:text-xs sm:text-[13px] md:text-xs lg:text-[13px] xl:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 whitespace-nowrap">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="card-blur rounded-2xl p-8 border border-slate-200 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="purpose" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                How can I help you?
              </label>
              <div className="relative">
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 pr-10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="I'd like to hire you" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">I'd like to hire you</option>
                  <option value="I'd like to discuss a project" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">I'd like to discuss a project</option>
                  <option value="I'd like to collaborate with you" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">I'd like to collaborate with you</option>
                  <option value="I need a website or application" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">I need a website or application</option>
                  <option value="Job opportunity" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">Job opportunity</option>    
                  <option value="General inquiry" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">General inquiry</option>
                  <option value="Other" className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 dark:text-slate-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration"
                className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and goals..."
                className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-primary to-cyan-primary text-white font-semibold py-4 rounded-xl shadow-lg shadow-purple-primary/20 hover:shadow-purple-primary/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
            >
              {isSubmitting ? (
                'Sending Message...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {success && (
              <div className="flex items-center gap-2 justify-center text-green-500 text-sm font-semibold mt-2 animate-bounce">
                <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
