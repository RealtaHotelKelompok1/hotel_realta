import { RestoService } from 'src/service/resto/restoMenus.service';
export declare class RestoController {
    private readonly restoService;
    constructor(restoService: RestoService);
    findAllMenusResto(): Promise<any>;
    findOneMenusResto(params: any): any;
    createMenusResto(body: any): Promise<any>;
    updateMenusResto(params: any, body: any): any;
    deleteMenusResto(params: any): any;
}
