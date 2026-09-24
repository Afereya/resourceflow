import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <p>Resource planning and team capacity management.</p>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
}
