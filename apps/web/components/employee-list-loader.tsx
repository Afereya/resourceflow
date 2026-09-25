"use client";

import { useEffect, useState } from "react";

import { EmployeeList } from "@/components/employee-list";
import { getEmployees } from "@/lib/get-employees";
import type { Employee } from "@/types/employee";

export function EmployeeListLoader() {
  const [loadedEmployees, setLoadedEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEmployees() {
      try {
        const employees = await getEmployees();
        setLoadedEmployees(employees);
      } catch (caughtError: unknown) {
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "An unexpected error occurred",
        );
      } finally {
        setIsLoading(false);
      }
    }

    void loadEmployees();
  }, []);

  if (isLoading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return <EmployeeList employees={loadedEmployees} />;
}
