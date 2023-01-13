import { BadRequestException, HttpStatus, Injectable, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getConnection } from 'typeorm';  
import { Users } from 'entities/Users';
import { UserRoles } from 'entities/UserRoles';
import { UserPassword } from 'entities/UserPassword';
import * as bcrypt from 'bcrypt';
import { UserBonusPoints } from 'entities/UserBonusPoints';
import { UserMembers } from 'entities/UserMembers';
import { UserProfiles } from 'entities/UserProfiles';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private userRolesRepository: Repository<UserRoles>,
        private userPasswordRepository: Repository<UserPassword>,
        private userBonusPointsRepository: Repository<UserBonusPoints>,
        private userMembersRepository: Repository<UserMembers>,
        private userProfilesRepository: Repository<UserProfiles>
    ) { }
        
    async findAllUsers(req:any, res:any): Promise<any>{
        return await this.userRepository.find({ order: { userId: -1 } })
        .then((result:any) => {
            if (result) {
                res.status(HttpStatus.OK).send({
                    message: "SUCCESS! Data displayed successfully",
                    results: result
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    message: "FAILED! Data not found"
                })
            }
        }).catch((err:any) => {
            res.status(HttpStatus.BAD_REQUEST).send({
                message: err.message,
                error: err.error
            });
        });
    }

    async findAllJoinUsers(req: any, res: any): Promise<any>{
        return await this.userRepository.query(`
            SELECT * FROM users.users uuu
            LEFT JOIN users.user_roles uur ON uur.usro_user_id = uuu.user_id 
            LEFT JOIN users.roles ur ON ur.role_id = uur.usro_role_id
            LEFT JOIN users.user_bonus_points uubp ON uubp.ubpo_user_id = uuu.user_id
            LEFT JOIN users.user_password uup ON uup.uspa_user_id = uuu.user_id
            LEFT JOIN users.user_members uum ON uum.usme_user_id = uuu.user_id
            LEFT JOIN users.user_profiles uups ON uups.uspro_user_id = uuu.user_id
            ORDER BY user_id DESC
        `).then((result: any) => {
            if (result) {
                res.status(HttpStatus.OK).send({
                    message: "Data displayed successfully",
                    results: result
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    message: "Data not found"
                });
            }
        }).catch((err: any) => {
            res.status(HttpStatus.BAD_REQUEST).send({
                message: err.message,
                error: err.error
            })
        })
    }

    async findAllJoinUsersMaster(req: any, res: any): Promise<any> {
        return await this.userRepository.query(`
            SELECT * FROM users.users uuu
            LEFT JOIN users.user_roles uur ON uur.usro_user_id = uuu.user_id 
            LEFT JOIN users.roles ur ON ur.role_id = uur.usro_role_id
            LEFT JOIN users.user_bonus_points uubp ON uubp.ubpo_user_id = uuu.user_id
            LEFT JOIN users.user_password uup ON uup.uspa_user_id = uuu.user_id
            LEFT JOIN users.user_members uum ON uum.usme_user_id = uuu.user_id
            LEFT JOIN master.members mm ON mm.memb_name = uum.usme_memb_name
            LEFT JOIN users.user_profiles uups ON uups.uspro_user_id = uuu.user_id
            LEFT JOIN master.address ma ON ma.addr_id = uups.uspro_addr_id
            LEFT JOIN master.provinces mp ON mp.prov_id = ma.addr_prov_id
            LEFT JOIN master.country mc ON mc.country_id = mp.prov_country_id
            LEFT JOIN master.regions mr ON mr.region_code = mc.country_region_id
            ORDER BY user_id DESC
        `).then((result: any) => {
            if (result) {
                res.status(HttpStatus.OK).send({
                    message: "Data displayed successfully",
                    results: result
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    message: "Data not found"
                });
            }
        }).catch((err) => {
            res.status(HttpStatus.BAD_REQUEST).send({
                message: err.message,
                error: err.error
            });
        });
    }

    async findOneUser(id: number, req: any, res: any): Promise<any>{
        return await this.userRepository.findOne({ where: { userId: id } })
            .then((result:any) => {
                if (result) {
                    res.status(HttpStatus.OK).send({
                        message: "SUCCESS! Data displayed successfully",
                        result: result
                    });
                } else {
                    res.status(HttpStatus.NOT_FOUND).send({
                        message: "FAILED! Data not found"
                    });
                }
            }).catch((err:any) => {
                res.status(HttpStatus.BAD_REQUEST).send({
                    message: err.message,
                    error: err.error
                });
            });
    }

    async createUser(
        dataUsers: Users,
        dataUserRoles: UserRoles,
        dataUserPassword: UserPassword,
        dataUserBonusPoints: UserBonusPoints,
        dataUserMembers: UserMembers,
        dataUserProfiles: UserProfiles,
        req: any, res: any
    ): Promise<any> {

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();

        let now = Date();
        let idUser: number;

        // save data users.users
        const saveUsers = await this.userRepository.save({
            userFullName: dataUsers.userFullName,
            userType: dataUsers.userType,
            userCompanyName: dataUsers.userCompanyName,
            userEmail: dataUsers.userEmail,
            userPhoneNumber: dataUsers.userPhoneNumber,
            userModifiedDate: now // create date default : now
        }).then((result: any) => {
            if (result) {
                idUser = result.id;
            } else {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err;
        });

        // save data users.user_roles
        const saveUserRoles = await this.userRolesRepository.save({
            usroUserId: idUser, // idUser : get by resultSaveUsers
            usroRoleId: dataUserRoles.usroRole
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err;
        });

        // save data users.user_password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(dataUserPassword.uspaPasswordhash, salt);
        const saveUserPassword = await this.userPasswordRepository.save({
            uspaUserId: idUser, // idUser : get by resultSaveUsers
            uspaPasswordhash: hashedPassword,
            uspaPasswordsalt: 'bcrypt'
        }).then((result:any) => {
            if (!result) {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err;
        });

        // save data users.user_bonus_points
        const saveUserBonusPoints = await this.userBonusPointsRepository.save({
            ubpoUserId: idUser, // idUser : get by resultSaveUsers
            ubpoTotalPoints: dataUserBonusPoints.ubpoTotalPoints,
            ubpoBonusType: dataUserBonusPoints.ubpoBonusType,
            ubpoCreateOn: now // create date default : now
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err;
        });

        // save data users.user_members
        const saveUserMembers = await this.userMembersRepository.save({
            usmeUserId: idUser, // idUser : get by resultSaveUsers
            usmeMembName: dataUserMembers.usmeMembName,
            usmePromoteDate: now, // create date default : now
            usmePoints: dataUserMembers.usmePoints,
            usmeType: 'default', // create default
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err;
        });

        // save data users.user_profiles
        const saveUserProfiles = await this.userProfilesRepository.save({
            usproUserId: idUser, // idUser : get by resultSaveUsers
            usproNationalId: dataUserProfiles.usproNationalId,
            usproBirth: dataUserProfiles.usproBirth,
            usproJobTitle: dataUserProfiles.usproJobTitle,
            usproMaritalStatus: dataUserProfiles.usproMaritalStatus,
            usproGender: dataUserProfiles.usproGender,
            usproAddr: dataUserProfiles.usproAddr
        }).then((result: any) => {
            if (!result) {
                throw new BadRequestException("Data insert failed");
            }
        }).catch((err: any) => {
            return err; 
        });

        
    }

}