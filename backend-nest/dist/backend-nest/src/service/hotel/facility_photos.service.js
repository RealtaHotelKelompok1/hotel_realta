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
exports.FacilityPhotosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const FacilityPhotos_1 = require("../../../entities/FacilityPhotos");
let FacilityPhotosService = class FacilityPhotosService {
    constructor(repositoryFacPhotos) {
        this.repositoryFacPhotos = repositoryFacPhotos;
    }
    async findAllFaciPhotos() {
        return await this.repositoryFacPhotos.find();
    }
    async createFaciPhotos(data) {
        let fapho_primary;
        (function (fapho_primary) {
            fapho_primary["notPrimary"] = "0";
            fapho_primary["primary"] = "1";
        })(fapho_primary || (fapho_primary = {}));
        let nP = fapho_primary.notPrimary;
        let p = fapho_primary.primary;
        if (data.faphoPrimary == nP || data.faphoPrimary == p) {
            return await this.repositoryFacPhotos.save(this.repositoryFacPhotos.create(data));
        }
        else {
            console.log('error');
        }
    }
    async updateFacilityPhotos(id, data) {
        return this.repositoryFacPhotos
            .createQueryBuilder()
            .update()
            .set({
            faphoPhotoFilename: data.faphoPhotoFilename,
        })
            .where('faphoId = :id', { id })
            .execute();
    }
    async findByFaphoId(faphoId) {
        return await this.repositoryFacPhotos.findOneBy({ faphoId: faphoId });
    }
};
FacilityPhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(FacilityPhotos_1.FacilityPhotos)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FacilityPhotosService);
exports.FacilityPhotosService = FacilityPhotosService;
//# sourceMappingURL=facility_photos.service.js.map