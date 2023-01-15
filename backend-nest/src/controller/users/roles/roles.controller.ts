import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { RolesService } from 'src/service/users/roles/roles.service';
import { bodyRolesDto } from './roles.dto';

@UsePipes(new ValidationPipe())
@Controller('roles')
export class RolesController {
    constructor(
        private rolesService : RolesService
    ) { }
    
    @Get()
    findAllRoles() {
        return this.rolesService.findAllRoles();
    }

    @Get('join-all-roles')
    findAllJoinRoles() {
        return this.rolesService.findAllJoinRoles();
    }

    @Get(':id')
    findOneRoles(@Param() params) {
        return this.rolesService.findOneRoles(params.id);
    }

    @Post()
    createRoles(@Body() body: bodyRolesDto) {
        return this.rolesService.createRoles(body)
    }

}
