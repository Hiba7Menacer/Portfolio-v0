"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/projects"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  project: Project
}

export default function ProjectDetail({ project }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <main className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 py-12">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors font-sans text-sm mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to portfolio
      </Link>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
        {project.title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-sans bg-black/10 text-black/70 rounded-full border border-black/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Description */}
        <div className="lg:w-2/5">
          <p className="font-sans text-sm md:text-base text-black/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image slider */}
        <div className="lg:w-3/5">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
            {project.images.map((img, i) => (
              <Image
                key={img}
                src={img || "/placeholder.svg"}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Slider controls */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/60 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white/60 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {project.images.map((img, index) => (
              <button
                key={img}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-black w-6"
                    : "bg-black/30"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
