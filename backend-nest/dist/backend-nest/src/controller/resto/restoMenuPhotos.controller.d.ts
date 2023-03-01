import { restoMenuPhotoService } from 'src/service/resto/restoMenuPhotos.service';
export declare class RestoMenuPhotosContoller {
    private readonly restoMenuPhotosService;
    constructor(restoMenuPhotosService: restoMenuPhotoService);
    findAllRestoMenuPhotos(): Promise<any>;
    findOneRestoMenuPhotos(params: any): Promise<any>;
    createRestoMenuPhotos(body: any): Promise<any>;
    updateRestoMenuPhotos(params: any, body: any): any;
    deleteRestoMenuPhotos(id: any): any;
}
