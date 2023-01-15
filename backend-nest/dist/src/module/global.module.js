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
const SpecialOffers_1 = require("../../entities/SpecialOffers");
const special_offers_controller_1 = require("../controller/booking/special_offers.controller");
const department_controller_1 = require("../controller/humanresource/department/department.controller");
const special_offers_service_1 = require("../service/booking/special_offers.service");
const department_service_1 = require("../service/humanresource/department/department.service");
let GlobalModule = class GlobalModule {
};
GlobalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Department_1.Department, SpecialOffers_1.SpecialOffers])],
        controllers: [department_controller_1.DepartmentController, special_offers_controller_1.SpecialOffersController],
        providers: [department_service_1.DepartmentService, special_offers_service_1.SpecialOffersService],
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map