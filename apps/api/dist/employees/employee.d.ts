export type EmployeeStatus = 'available' | 'partially-allocated' | 'fully-allocated';
export type Employee = {
    id: number;
    name: string;
    role: string;
    status: EmployeeStatus;
    allocationPercentage: number;
};
