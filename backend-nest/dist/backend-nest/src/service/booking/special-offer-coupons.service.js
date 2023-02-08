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
exports.SpecialOfferCouponsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const SpecialOfferCoupons_1 = require("../../../entities/SpecialOfferCoupons");
let SpecialOfferCouponsService = class SpecialOfferCouponsService {
    constructor(specialoffercouponRepository) {
        this.specialoffercouponRepository = specialoffercouponRepository;
    }
    async findAllSpecialOfferCoupon() {
        return await this.specialoffercouponRepository.find();
    }
    async findOneSpecialOfferCoupon(soco_id) {
        return await this.specialoffercouponRepository.findOne({
            where: {
                socoId: soco_id
            }
        });
    }
    async createSpecialOfferCoupon(data) {
        return await this.specialoffercouponRepository.save(data);
    }
    async updateSpecialOfferCoupon(soco_id, data) {
        return await this.specialoffercouponRepository.update({ socoId: soco_id }, data);
    }
    async deleteSpecialOfferCoupon(soco_id) {
        return await this.specialoffercouponRepository.delete({
            socoId: soco_id
        });
    }
};
SpecialOfferCouponsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(SpecialOfferCoupons_1.SpecialOfferCoupons)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SpecialOfferCouponsService);
exports.SpecialOfferCouponsService = SpecialOfferCouponsService;
//# sourceMappingURL=special-offer-coupons.service.js.map