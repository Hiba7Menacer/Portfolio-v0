import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkCarousel from "@/components/work-carousel"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Skills from "@/components/skills"

export default function Page() {
  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <WorkCarousel />
        <Services />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
