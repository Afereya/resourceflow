var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let EmployeesService = class EmployeesService {
    employees = [
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
    findAll() {
        return this.employees;
    }
};
EmployeesService = __decorate([
    Injectable()
], EmployeesService);
export { EmployeesService };
//# sourceMappingURL=employees.service.js.map