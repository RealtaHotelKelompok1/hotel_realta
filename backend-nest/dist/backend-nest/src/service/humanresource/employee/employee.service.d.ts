import { Employee } from 'entities/Employee';
import { EmployeeDto } from 'src/controller/humanresource/employee/employee.dto';
import { Repository } from 'typeorm';
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    findAllEmployee(): Promise<any>;
    findOneEmployee(empId: any): Promise<any>;
    createEmployee(data: EmployeeDto): Promise<import("typeorm").InsertResult>;
    updateEmployee(empId: number, data: EmployeeDto): Promise<import("typeorm").UpdateResult>;
    deleteEmployee(empId: number): Promise<import("typeorm").DeleteResult>;
}
