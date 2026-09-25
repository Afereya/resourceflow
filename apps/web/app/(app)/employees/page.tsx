import { EmployeeListLoader } from "@/components/employee-list-loader";

export default function EmployeesPage() {
  return (
    <main>
      <h1>Employees</h1>
      <p>Resource planning and team capacity management.</p>
      <EmployeeListLoader />
    </main>
  );
}
