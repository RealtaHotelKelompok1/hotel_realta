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
exports.FacilityController = void 0;
const common_1 = require("@nestjs/common");
const facility_service_1 = require("../../service/hotel/facility.service");
const Facilities_1 = require("../../../entities/Facilities");
let FacilityController = class FacilityController {
    constructor(faciService) {
        this.faciService = faciService;
    }
    findAllFacility() {
        return this.faciService.findAllFacility();
    }
    async createFacilityl(data) {
        const hotel = await this.faciService.createFacility(data);
        if (!hotel) {
            return 'failed insert to hotels';
        }
        else {
            return 'success insert to hotel';
        }
    }
    async updateFacility(id, body) {
        const newData = await this.faciService.updateFacility(id, body);
        if (!newData) {
            return "dont updated";
        }
        else {
            return "updated";
        }
    }
    findByname(Params) {
        return this.faciService.findByNoRoom(Params);
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findAllFacility", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Facilities_1.Facilities]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "createFacilityl", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "updateFacility", null);
__decorate([
    (0, common_1.Get)('viewByNoRoom'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findByname", null);
FacilityController = __decorate([
    (0, common_1.Controller)('facility'),
    __metadata("design:paramtypes", [facility_service_1.FacilityService])
], FacilityController);
exports.FacilityController = FacilityController;
//# sourceMappingURL=facility.controller.js.map