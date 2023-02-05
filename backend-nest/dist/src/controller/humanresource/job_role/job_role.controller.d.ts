import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';
import { JobRoleDto } from './job_role.dto';
export declare class JobRoleController {
    private readonly jobRoleService;
    constructor(jobRoleService: JobRoleService);
    findAllJobRole(): Promise<any>;
    findOneJobRole(param: any): Promise<any>;
    createJobRole(body: JobRoleDto): Promise<any>;
    updateJobRole(id: number, body: any): Promise<any>;
    deleteJobRole(id: number): Promise<import("typeorm").DeleteResult>;
}
