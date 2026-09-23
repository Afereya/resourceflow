import { EmployeeCard } from "@/components/employee-card";
import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <main>
      <h1>Employees</h1>
      <p>Resource planning and team capacity management.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
      </div>
    </main>
  );
}