const serviceItems = [
  "UI & Visual Design",
  "Prototyping & Interaction",
  "Front-End Development",
  "Creative Coding Experiments",
  "UX & Product Research",
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          SERVICES
        </h2>
        <p className="font-sans text-sm md:text-base text-black/60 mb-12 max-w-md mx-auto leading-relaxed">
          Blending design thinking with technical skill to craft thoughtful,
          user-centered digital experiences.
        </p>
      </div>

      <ul className="max-w-2xl mx-auto space-y-0">
        {serviceItems.map((service) => (
          <li
            key={service}
            className="flex items-center gap-4 py-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black/60 flex-shrink-0" />
            <span className="font-sans text-base md:text-lg text-black/90">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
