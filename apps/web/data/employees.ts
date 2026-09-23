import type { Employee } from "@/types/employee";

export const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    status: "available",
    allocationPercentage: 0
  }, 
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    status: "partially-allocated",
    allocationPercentage: 50
  }, 
  {
    id: 3,
    name: "Bob Johnson",
    role: "Designer",
    status: "fully-allocated",
    allocationPercentage: 100
  }, 
];
