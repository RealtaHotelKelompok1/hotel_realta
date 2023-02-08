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
exports.FacilityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Facilities_1 = require("../../../entities/Facilities");
let FacilityService = class FacilityService {
    constructor(repositoryFac) {
        this.repositoryFac = repositoryFac;
    }
    async findAllFacility() {
        return await this.repositoryFac.find();
    }
    async createFacility(data) {
        let faci_measure_unit;
        (function (faci_measure_unit) {
            faci_measure_unit["p"] = "people";
            faci_measure_unit["b"] = "beds";
        })(faci_measure_unit || (faci_measure_unit = {}));
        let people = faci_measure_unit.p;
        let beds = faci_measure_unit.b;
        if (data.faciMeasureUnit == people || data.faciMeasureUnit == beds) {
            return await this.repositoryFac.save(this.repositoryFac.create(data));
        }
        else {
            console.log('error');
        }
    }
    async updateFacility(id, data) {
        return this.repositoryFac
            .createQueryBuilder()
            .update()
            .set({
            faciDescription: data.faciDescription,
        })
            .where('faciId = :id', { id })
            .execute();
    }
    async findByNoRoom(faciRoomNumber) {
        return await this.repositoryFac.findOneBy({
            faciRoomNumber: faciRoomNumber,
        });
    }
};
FacilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Facilities_1.Facilities)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FacilityService);
exports.FacilityService = FacilityService;
//# sourceMappingURL=facility.service.js.map