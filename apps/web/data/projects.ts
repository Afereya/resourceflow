import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    status: "planned",
    startDate: "2026-10-15",
    endDate: "2027-03-31",
  },
  {
    id: 2,
    name: "Project Beta",
    status: "active",
    startDate: "2026-06-01",
    endDate: "2026-12-15",
  },
  {
    id: 3,
    name: "Project Gamma",
    status: "on-hold",
    startDate: "2026-04-01",
    endDate: "2026-11-30",
  },
  {
    id: 4,
    name: "Project Delta",
    status: "completed",
    startDate: "2026-04-01",
    endDate: "2026-07-01",
  },
];
