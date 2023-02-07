import { FacilityService } from 'src/service/hotel/facility.service';
import { Facilities } from 'entities/Facilities';
export declare class FacilityController {
    private readonly faciService;
    constructor(faciService: FacilityService);
    findAllFacility(): Promise<any>;
    createFacilityl(data: Facilities): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateFacility(id: string, body: any): Promise<"dont updated" | "updated">;
    findByname(Params: any): Promise<any>;
}
