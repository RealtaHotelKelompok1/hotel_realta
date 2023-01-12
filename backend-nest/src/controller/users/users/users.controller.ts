import { Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import { UsersService } from 'src/service/users/users/users.service'; 

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    findAllUsers(@Req() req, @Res() res) {
        return this.usersService.findAllUsers(req, res);
    }

    @Get('/join-all-users')
    findAllJoinUsers(@Req() req, @Res() res) {
        return this.usersService.findAllJoinUsers(req, res);
    }

    @Get('/join-all-users-master')
    findAllJoinUsersMaster(@Req() req, @Res() res) {
        return this.usersService.findAllJoinUsersMaster(req, res);
    }

    @Get('/:id')
    findOneUser(@Param() params, @Req() req, @Res() res) {
        return this.usersService.findOneUser(params.id, req, res)
    }

}
