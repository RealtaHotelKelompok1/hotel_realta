"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Employee_1 = require("../../../../entities/Employee");
const typeorm_2 = require("typeorm");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async findAllEmployee() {
        return await this.employeeRepository.find();
    }
    async findOneEmployee(empId) {
        return await this.employeeRepository.findOne({
            where: { empId: empId },
        });
    }
    async createEmployee(data) {
        return await this.employeeRepository.insert({
            empNationalId: data.empNationalId,
            empBirthDate: data.empBirthDate,
            empMaritalStatus: data.empMaritalStatus,
            empGender: data.empGender,
            empHireDate: data.empHireDate,
            empSalariedFlag: data.empSalariedFlag,
            empVacationHours: data.empVacationHours,
            empSickleaveHours: data.empSickleaveHours,
            empCurrentFlag: data.empCurrentFlag,
            empPhoto: data.empPhoto,
            empModifiedDate: new Date(),
        });
    }
    async updateEmployee(empId, data) {
        return await this.employeeRepository.update({
            empId: empId,
        }, {
            empNationalId: data.empNationalId,
            empBirthDate: data.empBirthDate,
            empMaritalStatus: data.empMaritalStatus,
            empGender: data.empGender,
            empHireDate: data.empHireDate,
            empSalariedFlag: data.empSalariedFlag,
            empVacationHours: data.empVacationHours,
            empSickleaveHours: data.empSickleaveHours,
            empCurrentFlag: data.empCurrentFlag,
            empPhoto: data.empPhoto,
            empModifiedDate: new Date(),
        });
    }
    async deleteEmployee(empId) {
        return await this.employeeRepository.delete({
            empId: empId,
        });
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Employee_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map