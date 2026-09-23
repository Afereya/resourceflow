"use client";

import { useState } from "react";

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
  const [selectedStatus, setSelectedStatus] =
    useState<EmployeeFilter>("all");

    const filteredEmployees =
        selectedStatus === "all"
            ? employees
            : employees.filter((employee) => employee.status === selectedStatus);


  return (
    <div>
        <div className="flex items-center gap-3">
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
                    <option key={status} value={status}>{getStatusLabel(status)}</option>
                ))}
            </select>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredEmployees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    </div>
  );
}

