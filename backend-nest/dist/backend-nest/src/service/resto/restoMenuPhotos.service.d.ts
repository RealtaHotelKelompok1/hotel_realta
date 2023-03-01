import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { Repository } from 'typeorm';
export declare class restoMenuPhotoService {
    private restoMenusPhotosRepository;
    constructor(restoMenusPhotosRepository: Repository<RestoMenuPhotos>);
    findAllRestoMenuPhotos(): Promise<any>;
    findOneRestoMenuPhotos(remp_id: number): Promise<any>;
    createRestoMenusPhotos(data: RestoMenuPhotos): Promise<any>;
    updateRestoMenuPhotos(id: number, data: RestoMenuPhotos): Promise<any>;
    deleteRestoMenuPhotos(id: number): Promise<any>;
}
