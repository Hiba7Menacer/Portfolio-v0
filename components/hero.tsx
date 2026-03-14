"use client"

import React from "react"

import { FourPointStar, SmallStar } from "./star"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Decorative stars - bouncing */}
      <FourPointStar
        size={60}
        className="absolute top-[15%] left-[8%] text-white/80 animate-float-1"
      />
      <FourPointStar
        size={45}
        className="absolute top-[10%] right-[30%] text-white/90 animate-float-2"
      />
      <FourPointStar
        size={70}
        className="absolute top-[8%] right-[22%] text-white animate-float-3"
      />
      <SmallStar
        size={16}
        className="absolute top-[12%] left-[25%] text-white/60 animate-twinkle"
      />
      <SmallStar
        size={14}
        className="absolute top-[6%] right-[40%] text-white/50 animate-twinkle"
        style={{ animationDelay: "1s" } as React.CSSProperties}
      />
      <SmallStar
        size={12}
        className="absolute top-[20%] right-[15%] text-white/40 animate-twinkle"
        style={{ animationDelay: "2s" } as React.CSSProperties}
      />
      <SmallStar
        size={18}
        className="absolute top-[18%] left-[45%] text-white/50 animate-twinkle"
        style={{ animationDelay: "0.5s" } as React.CSSProperties}
      />
      <FourPointStar
        size={90}
        className="absolute top-[40%] left-[-2%] text-white/70 animate-float-2"
        style={{ animationDelay: "1.5s" } as React.CSSProperties}
      />
      <SmallStar
        size={10}
        className="absolute top-[25%] right-[50%] text-white/40 animate-twinkle"
        style={{ animationDelay: "3s" } as React.CSSProperties}
      />

      {/* Content */}
      <div className="relative z-10 mt-20 md:mt-0">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-none tracking-tight">
          <span className="block">MY</span>
          <span className="block">PORTFOLIO</span>
        </h1>
        <p className="mt-6 text-sm md:text-base text-black/70 font-sans max-w-md">
          {'"Designer & Front-End Developer blending art and code."'}
        </p>
      </div>
    </section>
  )
}
