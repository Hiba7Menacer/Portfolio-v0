import React from "react"
import type { Metadata, Viewport } from "next"
import { Abhaya_Libre, Montserrat } from "next/font/google"

import "./globals.css"

const _abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
})

const _montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Hiba Menacer | Portfolio",
  description:
    "Designer & Front-End Developer blending art and code. Portfolio showcasing web design, UI/UX, and creative development projects.",
}

export const viewport: Viewport = {
  themeColor: "#0b2c47",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_abhayaLibre.variable} ${_montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
