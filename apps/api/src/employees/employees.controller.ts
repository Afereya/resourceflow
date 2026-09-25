import { Controller, Get } from '@nestjs/common';

import type { Employee } from './employee.js';
import { EmployeesService } from './employees.service.js';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Employee[] {
    return this.employeesService.findAll();
  }
}
