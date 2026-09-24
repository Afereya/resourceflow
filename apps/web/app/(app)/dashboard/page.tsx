import { employees } from "@/data/employees";
import { projects } from "@/data/projects";
import { DashboardMetric } from "@/components/dashboard-metric";

export default function DashboardPage() {
  const totalEmployees = employees.length;

  const availableEmployees = employees.filter(
    (employee) => employee.status === "available",
  ).length;

  const activeProjects = projects.filter(
    (project) => project.status === "active",
  ).length;

  const totalAllocation = employees.reduce(
    (sum, employee) => sum + employee.allocationPercentage,
    0,
  );

  const averageAllocation =
    employees.length === 0 ? 0 : Math.round(totalAllocation / employees.length);

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Resource planning and team capacity management.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetric label="Total employees" value={totalEmployees} />
        <DashboardMetric
          label="Available employees"
          value={availableEmployees}
        />
        <DashboardMetric label="Active projects" value={activeProjects} />
        <DashboardMetric
          label="Average allocation"
          value={`${averageAllocation}%`}
        />
      </div>
    </main>
  );
}
