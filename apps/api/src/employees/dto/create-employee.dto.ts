import { IsIn, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

import type { EmployeeStatus } from '../employee.js';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  role!: string;

  @IsIn(['available', 'partially-allocated', 'fully-allocated'])
  status!: EmployeeStatus;

  @IsInt()
  @Min(0)
  @Max(100)
  allocationPercentage!: number;
}
