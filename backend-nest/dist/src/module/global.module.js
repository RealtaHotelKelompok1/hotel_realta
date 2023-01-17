"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Department_1 = require("../../entities/Department");
const Shift_1 = require("../../entities/Shift");
const department_controller_1 = require("../controller/humanresource/department/department.controller");
const shift_controller_1 = require("../controller/humanresource/shift/shift.controller");
const department_service_1 = require("../service/humanresource/department/department.service");
const shift_service_1 = require("../service/humanresource/shift/shift.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Department_1.Department, Shift_1.Shift])],
        controllers: [department_controller_1.DepartmentController, shift_controller_1.ShiftController],
        providers: [department_service_1.DepartmentService, shift_service_1.ShiftService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map