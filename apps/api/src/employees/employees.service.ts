import type { Employee } from './employee.js';
import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateEmployeeDto } from './dto/create-employee.dto.js';
import type { UpdateEmployeeDto } from './dto/update-employee.dto.js';
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

  private nextEmployeeId =
    Math.max(0, ...this.employees.map((employee) => employee.id)) + 1;

  create(createEmployeeDto: CreateEmployeeDto): Employee {
    const employee: Employee = {
      id: this.nextEmployeeId,
      name: createEmployeeDto.name,
      role: createEmployeeDto.role,
      status: createEmployeeDto.status,
      allocationPercentage: createEmployeeDto.allocationPercentage,
    };

    this.nextEmployeeId += 1;
    this.employees.push(employee);

    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto): Employee {
    const employee = this.findOne(id);
    Object.assign(employee, updateEmployeeDto);

    return employee;
  }

  remove(id: number): Employee {
    const employee = this.findOne(id);
    const employeeIndex = this.employees.indexOf(employee);
    this.employees.splice(employeeIndex, 1);

    return employee;
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee {
    const employee = this.employees.find((employee) => employee.id === id);

    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }

    return employee;
  }
}
