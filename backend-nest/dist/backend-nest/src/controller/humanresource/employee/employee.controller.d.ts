import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
import { EmployeeDto } from './employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findAllEmployee(): Promise<any>;
    findOneEmployee(param: any): Promise<any>;
    createEmployee(body: EmployeeDto): Promise<any>;
    updateEmployee(id: number, body: any): Promise<any>;
    deleteEmployee(id: number): Promise<void>;
}
