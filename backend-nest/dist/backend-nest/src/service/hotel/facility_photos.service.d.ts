import { Repository } from 'typeorm';
import { FacilityPhotos } from 'entities/FacilityPhotos';
export declare class FacilityPhotosService {
    private repositoryFacPhotos;
    constructor(repositoryFacPhotos: Repository<FacilityPhotos>);
    findAllFaciPhotos(): Promise<any>;
    createFaciPhotos(data: FacilityPhotos): Promise<FacilityPhotos>;
    updateFacilityPhotos(id: string, data: FacilityPhotos): Promise<any>;
    findByFaphoId(faphoId: any): Promise<any>;
}
