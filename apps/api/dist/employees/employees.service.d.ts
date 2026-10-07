import type { Employee } from './employee.js';
import type { CreateEmployeeDto } from './dto/create-employee.dto.js';
export declare class EmployeesService {
    private readonly employees;
    private nextEmployeeId;
    create(createEmployeeDto: CreateEmployeeDto): Employee;
    findAll(): Employee[];
    findOne(id: number): Employee;
}
