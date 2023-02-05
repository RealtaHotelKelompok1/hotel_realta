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
exports.JobRoleController = void 0;
const common_1 = require("@nestjs/common");
const job_role_service_1 = require("../../../service/humanresource/job_role/job_role.service");
const job_role_dto_1 = require("./job_role.dto");
let JobRoleController = class JobRoleController {
    constructor(jobRoleService) {
        this.jobRoleService = jobRoleService;
    }
    findAllJobRole() {
        return this.jobRoleService.findAllJobRole();
    }
    async findOneJobRole(param) {
        return await this.jobRoleService.findOneJobRole(param.id);
    }
    async createJobRole(body) {
        return await this.jobRoleService.createJobRole(body);
    }
    async updateJobRole(id, body) {
        return await this.jobRoleService.updateJobRole(id, body);
    }
    deleteJobRole(id) {
        return this.jobRoleService.deleteJobRole(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "findAllJobRole", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "findOneJobRole", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [job_role_dto_1.JobRoleDto]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "createJobRole", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "updateJobRole", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], JobRoleController.prototype, "deleteJobRole", null);
JobRoleController = __decorate([
    (0, common_1.Controller)('jobrole'),
    __metadata("design:paramtypes", [job_role_service_1.JobRoleService])
], JobRoleController);
exports.JobRoleController = JobRoleController;
//# sourceMappingURL=job_role.controller.js.map