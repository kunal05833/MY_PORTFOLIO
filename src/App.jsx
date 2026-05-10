import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Encryption from './sections/Encryption'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#050a14] min-h-screen text-slate-200 font-body">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Encryption />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
