import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
export declare class CategoryGroupService {
    private CategoryGroupRepository;
    constructor(CategoryGroupRepository: Repository<CategoryGroup>);
    getAll(): Promise<any>;
    getById(cagroId: number): Promise<any>;
    create(data: CategoryGroup): Promise<any>;
    edit(data: CategoryGroup, _cagroId: number): Promise<{
        message: string;
    }>;
    delete(cagroId: number): Promise<import("typeorm").DeleteResult>;
}
