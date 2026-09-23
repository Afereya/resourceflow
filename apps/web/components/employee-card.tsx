import type { Employee } from "@/types/employee";

type EmployeeCardProps = {
  employee: Employee;
};

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">{employee.name}</h2>
        <p className="text-sm text-slate-600"><strong>Role:</strong> {employee.role}</p>
        <p className="text-sm text-slate-600"><strong>Status:</strong> {employee.status}</p>
        <p className="text-sm text-slate-600"><strong>Allocation:</strong> {employee.allocationPercentage}%</p>
    </article>
  );
}