import { ShiftDto } from './shift.dto';
import { ShiftService } from 'src/service/humanresource/shift/shift.service';
export declare class ShiftController {
    private readonly departmentService;
    constructor(departmentService: ShiftService);
    findAllShift(): Promise<any>;
    findOneShift(param: any): Promise<any>;
    createShift(body: ShiftDto): Promise<void>;
    updateShift(id: number, body: ShiftDto): Promise<import("typeorm").UpdateResult>;
    deleteShift(id: number): Promise<import("typeorm").DeleteResult>;
}
