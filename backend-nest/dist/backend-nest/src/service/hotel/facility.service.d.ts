import { Repository } from 'typeorm';
import { Facilities } from 'entities/Facilities';
export declare class FacilityService {
    private repositoryFac;
    constructor(repositoryFac: Repository<Facilities>);
    findAllFacility(): Promise<any>;
    createFacility(data: Facilities): Promise<Facilities>;
    updateFacility(id: string, data: Facilities): Promise<any>;
    findByNoRoom(faciRoomNumber: any): Promise<any>;
}
