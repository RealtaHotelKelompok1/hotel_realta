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
exports.FacilityPriceHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const FacilityPriceHistory_1 = require("../../../entities/FacilityPriceHistory");
let FacilityPriceHistoryService = class FacilityPriceHistoryService {
    constructor(fph) {
        this.fph = fph;
    }
    async findAllFacilitiPriceHistory() {
        return await this.fph.find();
    }
    async createFacilitiPriceHisty(data) {
        return await this.fph.save(this.fph.create(data));
    }
    async updateFaph(id, data) {
        return this.fph
            .createQueryBuilder()
            .update()
            .set({
            faphLowPrice: data.faphLowPrice
        })
            .where('faphId = :id', { id })
            .execute();
    }
    async findByUser(faphId) {
        return await this.fph.findOneBy({ faphId: faphId });
    }
};
FacilityPriceHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(FacilityPriceHistory_1.FacilityPriceHistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FacilityPriceHistoryService);
exports.FacilityPriceHistoryService = FacilityPriceHistoryService;
//# sourceMappingURL=facility_price_history.service.js.map