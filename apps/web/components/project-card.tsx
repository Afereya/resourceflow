import type { Project, ProjectStatus } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};
export function getProjectStatusLabel(status: ProjectStatus): string {
  switch (status) {
    case "planned":
      return "Planned";
    case "active":
      return "Active";
    case "on-hold":
      return "On hold";
    case "completed":
      return "Completed";
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{project.name}</h2>
      <p className="text-sm text-slate-600">
        <strong>Status:</strong> {getProjectStatusLabel(project.status)}
      </p>
      <p className="text-sm text-slate-600">
        <strong>Date:</strong> {project.startDate} - {project.endDate}
      </p>
    </article>
  );
}
