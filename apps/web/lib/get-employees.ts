import { Employee } from "@/types/employee";
import { employees } from "@/data/employees";

export async function getEmployees(shouldFail = false): Promise<Employee[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (shouldFail) throw new Error("Failed to load employees");
  return employees;
}
