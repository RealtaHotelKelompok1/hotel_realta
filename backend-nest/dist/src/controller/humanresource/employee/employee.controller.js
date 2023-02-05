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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("../../../service/humanresource/employee/employee.service");
const employee_dto_1 = require("./employee.dto");
const exceptions_1 = require("@nestjs/common/exceptions");
const enums_1 = require("@nestjs/common/enums");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    findAllEmployee() {
        return this.employeeService.findAllEmployee();
    }
    async findOneEmployee(param) {
        const result = await this.employeeService.findOneEmployee(param.id);
        if (result) {
            return result;
        }
        else {
            throw new exceptions_1.HttpException('Employee not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async createEmployee(body) {
        const result = await this.employeeService.createEmployee(body);
        if (result) {
            return { message: 'Employee created successfully' };
        }
        else {
            throw new exceptions_1.HttpException('Employee created failed', enums_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateEmployee(id, body) {
        const getOneData = await this.employeeService.findOneEmployee(id);
        if (getOneData) {
            const result = await this.employeeService.updateEmployee(id, body);
            if (result) {
                throw new exceptions_1.HttpException('Employee updated successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Employee updated failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Employee not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteEmployee(id) {
        const getOneData = await this.employeeService.findOneEmployee(id);
        if (getOneData) {
            const result = this.employeeService.deleteEmployee(id);
            if (result) {
                throw new exceptions_1.HttpException('Employee deleted successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Employee deleted failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Employee not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findAllEmployee", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findOneEmployee", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.EmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "deleteEmployee", null);
EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map