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
exports.restoMenuPhotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RestoMenuPhotos_1 = require("../../../entities/RestoMenuPhotos");
const typeorm_2 = require("typeorm");
let restoMenuPhotoService = class restoMenuPhotoService {
    constructor(restoMenusPhotosRepository) {
        this.restoMenusPhotosRepository = restoMenusPhotosRepository;
    }
    async findAllRestoMenuPhotos() {
        return await this.restoMenusPhotosRepository.find();
    }
    async findOneRestoMenuPhotos(remp_id) {
        const result = await this.restoMenusPhotosRepository.findOne({
            where: {
                rempId: remp_id,
            },
        });
        if (result) {
            return result;
        }
        throw new common_1.HttpException('Categori not Found', common_1.HttpStatus.NOT_FOUND);
    }
    async createRestoMenusPhotos(data) {
        const result = await this.restoMenusPhotosRepository.save({
            rempThumbnailFilename: data.rempThumbnailFilename,
            rempPhotoFilename: data.rempPhotoFilename,
            rempPrimary: data.rempPrimary,
            rempUrl: data.rempUrl,
        });
        return result;
    }
    async updateRestoMenuPhotos(id, data) {
        let result = await this.restoMenusPhotosRepository.update({
            rempId: id,
        }, {
            rempThumbnailFilename: data.rempThumbnailFilename,
            rempPhotoFilename: data.rempPhotoFilename,
            rempPrimary: data.rempPrimary,
            rempUrl: data.rempUrl,
        });
        return result + 'Sukses Mengupdate';
    }
    async deleteRestoMenuPhotos(id) {
        await this.restoMenusPhotosRepository.delete({
            rempId: id,
        });
        return 'Sukses Menghapus';
    }
};
restoMenuPhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(RestoMenuPhotos_1.RestoMenuPhotos)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], restoMenuPhotoService);
exports.restoMenuPhotoService = restoMenuPhotoService;
//# sourceMappingURL=restoMenuPhotos.service.js.map