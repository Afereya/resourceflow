import type { Employee } from './employee.js';
import { EmployeesService } from './employees.service.js';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Employee[];
    findOne(id: number): Employee;
    create(createEmployeeDto: CreateEmployeeDto): Employee;
}
