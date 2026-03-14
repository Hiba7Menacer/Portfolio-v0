export interface Project {
  id: string
  title: string
  shortTitle: string
  thumbnail: string
  description: string
  images: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    shortTitle: "Portfolio",
    thumbnail: "/images/project1-thumb.jpg",
    description:
      "A beautifully designed portfolio website for me as a frontend web developer and designer, showcasing my skills and projects in a visually appealing way. The design incorporates elegant typography, a clean layout, and a cohesive color scheme to create a professional and engaging online presence.",
    images: [
      "/images/project1-thumb.jpg",
      "/images/Desktop-3.jpg",
      "/images/Desktop-4.jpg",
    ],
    tags: ["Graphic Design", "Branding","Web Design"],
  },
  {
    id: "project-2",
    title: "Public Library Website",
    shortTitle: "Library",
    thumbnail: "/images/project2-thumb.jpg",
    description:
      "A comprehensive web design project for a public reading library. The website features a warm, inviting design with Arabic content support, intuitive navigation, and responsive layouts. The goal was to make library resources accessible to the community through a modern, user-friendly digital experience.",
    images: [
      "/images/project2-thumb.jpg",
      "/images/Desktop-1.jpg",
      "/images/Desktop-2.jpg",
    ],
    tags: ["Web Design", "UI/UX", "Arabic Content"],
  },
  {
    id: "project-3",
    title: "Aero App",
    shortTitle: "Aero",
    thumbnail: "/images/project3-thumb.jpg",
    description:
      "A clean and modern mobile application design for Aero, a location-based service app. The design focuses on simplicity, intuitive user flows, and a fresh color palette. The branding combines minimalism with functional design elements to create a memorable user experience.",
    images: [
      "/images/project3-thumb.jpg",
      "/images/FirstPage.jpg",
      "/images/SecondPage.jpg",
    ],
    tags: ["App Design", "Branding", "Mobile UI"],
  },
   {
    id: "project-4",
    title: "Planning app",
    shortTitle: "Planning",
    thumbnail: "/images/project4-thumb.jpg",
    description:
      "A clean and modern mobile application design for a planning app. The design focuses on simplicity, intuitive user flows, and a fresh color palette. The branding combines minimalism with functional design elements to create a memorable user experience.",
    images: [
      "/images/Phone-1.jpg",
      "/images/Phone-2.jpg",
      "/images/Phone-3.jpg",
    ],
    tags: ["App Design", "planning", "Mobile UI"],
  },
]
