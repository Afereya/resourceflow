"use client";

import { useEffect, useState } from "react";

import { EmployeeCard, getStatusLabel } from "@/components/employee-card";
import type { Employee, EmployeeStatus } from "@/types/employee";

type EmployeeFilter = "all" | EmployeeStatus;
const employeeStatuses: EmployeeStatus[] = [
  "available",
  "partially-allocated",
  "fully-allocated",
];

type EmployeeListProps = {
  employees: Employee[];
};

export function EmployeeList({ employees }: EmployeeListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<EmployeeFilter>("all");

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredEmployees = employees.filter((employee) => {
    const matchesStatus =
      selectedStatus === "all" || employee.status === selectedStatus;

    const matchesSearch = employee.name
      .toLowerCase()
      .includes(normalizedSearchTerm);

    return matchesStatus && matchesSearch;
  });

  const employeeCount = filteredEmployees.length;
  useEffect(() => {
    document.title = `${employeeCount} employees | ResourceFlow`;
    return () => {
      document.title = "ResourceFlow";
    };
  }, [employeeCount]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="employee-search" className="text-sm font-medium">
            Search employees
          </label>
          <input
            id="employee-search"
            type="search"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status-filter" className="text-sm font-medium">
            Filter by status
          </label>

          <select
            id="status-filter"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            value={selectedStatus}
            onChange={(event) =>
              setSelectedStatus(event.target.value as EmployeeFilter)
            }
          >
            <option value="all">All statuses</option>

            {employeeStatuses.map((status) => (
              <option key={status} value={status}>
                {getStatusLabel(status)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredEmployees.length === 0 ? (
        <p className="mt-6 rounded-lg border border-dashed border-slate-300 p-6 text-slate-600">
          No employees match the selected filters.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
}
