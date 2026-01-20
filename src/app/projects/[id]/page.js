import { projects } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);

  return <ProjectDetailClient project={project} />;
}
