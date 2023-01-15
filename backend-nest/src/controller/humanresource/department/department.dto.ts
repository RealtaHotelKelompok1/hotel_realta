import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class DepartmentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  deptName: string;


}
