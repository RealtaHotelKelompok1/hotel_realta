import { Repository } from 'typeorm';
import { RestoMenus } from 'entities/RestoMenus';
export declare class RestoService {
    private restoMenusRepository;
    constructor(restoMenusRepository: Repository<RestoMenus>);
    findAllMenusResto(): Promise<any>;
    findOneMenusResto(reme_Id: number): Promise<any>;
    createMenusResto(data: RestoMenus): Promise<any>;
    updateMenusResto(id: number, data: RestoMenus): Promise<any>;
    deleteMenusResto(id: number): Promise<any>;
}
