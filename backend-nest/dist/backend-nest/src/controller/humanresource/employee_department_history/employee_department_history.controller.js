"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDepartmentHistoryController = void 0;
const common_1 = require("@nestjs/common");
let EmployeeDepartmentHistoryController = class EmployeeDepartmentHistoryController {
};
EmployeeDepartmentHistoryController = __decorate([
    (0, common_1.Controller)('employee-department-history')
], EmployeeDepartmentHistoryController);
exports.EmployeeDepartmentHistoryController = EmployeeDepartmentHistoryController;
//# sourceMappingURL=employee_department_history.controller.js.map