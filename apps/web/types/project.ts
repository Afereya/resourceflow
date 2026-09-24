export type ProjectStatus = "planned" | "active" | "on-hold" | "completed";

export type Project = {
  id: number;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
};
