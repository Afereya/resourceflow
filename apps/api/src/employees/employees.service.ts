import { Injectable } from '@nestjs/common';
import type { Employee } from './employee.js';

@Injectable()
export class EmployeesService {
  private readonly employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe1',
      role: 'Software Engineer',
      status: 'available',
      allocationPercentage: 0,
    },
    {
      id: 2,
      name: 'Jane Smith1',
      role: 'Product Manager',
      status: 'partially-allocated',
      allocationPercentage: 50,
    },
    {
      id: 3,
      name: 'Bob Johnson1',
      role: 'Designer',
      status: 'fully-allocated',
      allocationPercentage: 100,
    },
  ];

  findAll(): Employee[] {
    return this.employees;
  }
}
