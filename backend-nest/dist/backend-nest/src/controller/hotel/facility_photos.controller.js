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
exports.FacilityPhotosController = void 0;
const common_1 = require("@nestjs/common");
const facility_photos_service_1 = require("../../service/hotel/facility_photos.service");
const FacilityPhotos_1 = require("../../../entities/FacilityPhotos");
let FacilityPhotosController = class FacilityPhotosController {
    constructor(faphoService) {
        this.faphoService = faphoService;
    }
    findAllFaciPhotos() {
        return this.faphoService.findAllFaciPhotos();
    }
    async createFaciPhotos(data) {
        const hotel = await this.faphoService.createFaciPhotos(data);
        if (!hotel) {
            return 'failed insert to hotels';
        }
        else {
            return 'success insert to hotel';
        }
    }
    async updateFacilityPhotos(id, body) {
        const newData = await this.faphoService.updateFacilityPhotos(id, body);
        if (!newData) {
            return "dont updated";
        }
        else {
            return "updated";
        }
    }
    findByname(Params) {
        return this.faphoService.findByFaphoId(Params);
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityPhotosController.prototype, "findAllFaciPhotos", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FacilityPhotos_1.FacilityPhotos]),
    __metadata("design:returntype", Promise)
], FacilityPhotosController.prototype, "createFaciPhotos", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FacilityPhotosController.prototype, "updateFacilityPhotos", null);
__decorate([
    (0, common_1.Get)('viewByFaphoId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FacilityPhotosController.prototype, "findByname", null);
FacilityPhotosController = __decorate([
    (0, common_1.Controller)('facility-photos'),
    __metadata("design:paramtypes", [facility_photos_service_1.FacilityPhotosService])
], FacilityPhotosController);
exports.FacilityPhotosController = FacilityPhotosController;
//# sourceMappingURL=facility_photos.controller.js.map