import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import ProjectDetail from "@/components/project-detail"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Hiba Menacer`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <div className="noise-overlay" />
      <ProjectDetail project={project} />
    </>
  )
}
