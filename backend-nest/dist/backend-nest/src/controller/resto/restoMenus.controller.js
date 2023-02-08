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
exports.RestoController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const restoMenus_service_1 = require("../../service/resto/restoMenus.service");
let RestoController = class RestoController {
    constructor(restoService) {
        this.restoService = restoService;
    }
    findAllMenusResto() {
        return this.restoService.findAllMenusResto();
    }
    findOneMenusResto(params) {
        return this.restoService.findOneMenusResto(params.id);
    }
    createMenusResto(body) {
        return this.restoService.createMenusResto(body);
    }
    updateMenusResto(params, body) {
        return this.restoService.updateMenusResto(params.id, body);
    }
    deleteMenusResto(params) {
        return this.restoService.deleteMenusResto(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestoController.prototype, "findAllMenusResto", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], RestoController.prototype, "findOneMenusResto", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RestoController.prototype, "createMenusResto", null);
__decorate([
    (0, decorators_1.Put)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], RestoController.prototype, "updateMenusResto", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], RestoController.prototype, "deleteMenusResto", null);
RestoController = __decorate([
    (0, common_1.Controller)('resto'),
    __metadata("design:paramtypes", [restoMenus_service_1.RestoService])
], RestoController);
exports.RestoController = RestoController;
//# sourceMappingURL=restoMenus.controller.js.map