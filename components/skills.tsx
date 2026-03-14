"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "HTML", "CSS"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "UI/UX Design"],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            SKILLS
          </h2>
          <p className="font-sans text-sm md:text-base text-black/60 max-w-md mx-auto leading-relaxed">
            A diverse toolkit spanning design, development, and creative
            problem-solving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-black/10 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-black mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-black/80 font-sans text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-black/60 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
