import type { EmployeeStatus } from '../employee.js';
export declare class CreateEmployeeDto {
    name: string;
    role: string;
    status: EmployeeStatus;
    allocationPercentage: number;
}
