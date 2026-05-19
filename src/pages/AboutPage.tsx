import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certifications from '../components/Certifications'

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Skills />
      <Education />
      <Certifications />
    </div>
  )
}
