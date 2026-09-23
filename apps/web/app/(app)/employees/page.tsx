// import { EmployeeCard } from "@/components/employee-card";
import { EmployeeList } from "@/components/employee-list";
import { employees } from "@/data/employees";

export default function EmployeesPage() {
  return (
    <main>
      <h1>Employees</h1>
      <p>Resource planning and team capacity management.</p>
      <EmployeeList employees={employees} />

    </main>
  );
}