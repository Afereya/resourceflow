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
      name: 'Alice Brown',
      role: 'QA Engineer',
      status: 'available',
      allocationPercentage: 50,
    });

    expect(service.findAll()).toContainEqual(result);
  });

  it('should update an employee', () => {
    const result = service.update(1, {
      role: 'Senior Software Engineer',
      allocationPercentage: 75,
    });

    expect(result.role).toBe('Senior Software Engineer');
    expect(result.allocationPercentage).toBe(75);

    // Непереданное поле должно сохраниться
    expect(result.name).toBe('John Doe1');

    // Изменение должно сохраниться в массиве
    expect(service.findOne(1)).toEqual(result);
  });

  it('should throw NotFoundException when updating a missing employee', () => {
    expect(() =>
      service.update(999, {
        role: 'Senior Software Engineer',
      }),
    ).toThrow(NotFoundException);
  });

  it('should remove an employee', () => {
    const removedEmployee = service.remove(1);

    expect(removedEmployee.id).toBe(1);
    expect(() => service.findOne(1)).toThrow(NotFoundException);
    expect(service.findAll()).toHaveLength(2);
  });

  it('should throw NotFoundException when removing a missing employee', () => {
    expect(() => service.remove(999)).toThrow(NotFoundException);
  });
});
