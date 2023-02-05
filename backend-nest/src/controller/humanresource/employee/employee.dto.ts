import { IsNotEmpty } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  empNationalId : string;
  empBirthDate : string;
  empMaritalStatus : string;
  empGender : string;
  empHireDate : string;
  empSalariedFlag : number;
  empVacationHours : number;
  empSickleaveHours : number;
  empCurrentFlag : number;
  empPhoto : string;
  empEmpId : number;
  EmpJoroId : number;  
}


