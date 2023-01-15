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
exports.SpecialOffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const SpecialOffers_1 = require("../../../entities/SpecialOffers");
var special_offers;
(function (special_offers) {
    special_offers["Travel Agent"] = "T";
    special_offers["Corporate"] = "C";
    special_offers["Individual"] = "I";
})(special_offers || (special_offers = {}));
let SpecialOffersService = class SpecialOffersService {
    constructor(specialOffersRepository) {
        this.specialOffersRepository = specialOffersRepository;
    }
    async findAllSpecialOffers() {
        return await this.specialOffersRepository.find();
    }
    async findOneSpecialOffers(spofId) {
        return await this.specialOffersRepository.findOne({
            where: {
                spofId: spofId,
            },
        });
    }
    async createSpecialOffers(data) {
        special_offers[data.spofType];
        return await this.specialOffersRepository.save(data)
            .then(() => {
            return 'Data berhasil Di Buat';
        }).catch(error => {
            return error;
        });
    }
    async updateSpecialOffers(spof_id, data) {
        if (data.spofType === special_offers[data.spofType]) {
            return await this.specialOffersRepository.update({ spofId: spof_id }, data).then(result => {
                return 'Data berhasil Di Update';
            }).catch(error => {
                return error;
            });
        }
        else {
            return "spof type tidak ditemukan ";
        }
    }
    async deleteSpecialOffers(spofId) {
        return await this.specialOffersRepository.delete({
            spofId: spofId,
        }).then(result => {
            return 'Berhasil dihapus';
        }).catch(error => {
            return error;
        });
    }
};
SpecialOffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(SpecialOffers_1.SpecialOffers)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SpecialOffersService);
exports.SpecialOffersService = SpecialOffersService;
//# sourceMappingURL=special_offers.service.js.map