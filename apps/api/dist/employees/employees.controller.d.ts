import type { Employee } from './employee.js';
import { EmployeesService } from './employees.service.js';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Employee[];
}
