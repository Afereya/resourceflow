import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';

import type { Employee } from './employee.js';
import { EmployeesService } from './employees.service.js';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Employee[] {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Employee {
    return this.employeesService.findOne(id);
  }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Employee {
    return this.employeesService.create(createEmployeeDto);
  }
}
