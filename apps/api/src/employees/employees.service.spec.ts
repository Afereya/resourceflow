import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { EmployeesService } from './employees.service.js';
import type { CreateEmployeeDto } from './dto/create-employee.dto.js';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesService],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an employee by id', () => {
    const result = service.findOne(1);

    expect(result.id).toBe(1);
    expect(result.status).toBe('available');
  });

  it('should throw NotFoundException when employee does not exist', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });

  it('should create an employee', () => {
    const createEmployeeDto: CreateEmployeeDto = {
      name: 'Alice Brown',
      role: 'QA Engineer',
      status: 'available',
      allocationPercentage: 50,
    };

    const result = service.create(createEmployeeDto);

    expect(result).toEqual({
      id: 4,
      ...createEmployeeDto,
    });

    expect(service.findAll()).toContainEqual(result);
  });
});
