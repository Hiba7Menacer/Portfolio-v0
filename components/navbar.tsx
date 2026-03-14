"use client"

import { useState, useEffect, useCallback } from "react"

const navItems = [
  { id: "about", label: "About Me" },
  { id: "work", label: "My work" },
  { id: "services", label: "Services" },
  { label: "Skills", id: "skills" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const sections = ["hero", "about", "work", "services", "contact"]
    const scrollPosition = window.scrollY + 120

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle navigation"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-sans tracking-wide transition-all duration-300 hover:text-white ${
                activeSection === item.id
                  ? "text-black"
                  : "text-black/50"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="md:hidden absolute top-14 right-4 flex flex-col gap-4 p-6 rounded-lg bg-[#3a8fd4]/90 backdrop-blur-sm border border-black/10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-sans tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-black/50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
