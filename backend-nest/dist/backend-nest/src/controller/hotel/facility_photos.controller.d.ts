import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';
import { FacilityPhotos } from 'entities/FacilityPhotos';
export declare class FacilityPhotosController {
    private readonly faphoService;
    constructor(faphoService: FacilityPhotosService);
    findAllFaciPhotos(): Promise<any>;
    createFaciPhotos(data: FacilityPhotos): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateFacilityPhotos(id: string, body: any): Promise<"dont updated" | "updated">;
    findByname(Params: any): Promise<any>;
}
