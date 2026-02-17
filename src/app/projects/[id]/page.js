import { projects } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const project = projects.find((p) => p.id === id);

  return <ProjectDetailClient project={project} />;
}
