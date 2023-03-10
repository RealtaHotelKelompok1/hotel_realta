import ActionType from "@/redux/Constant/Users/ActionType"

export const doUsersRequest:any = ():any => {
    return {
        type: ActionType.GET_USERS
    }
}

export const doUsersRequestSucceed:any = (payload:any):any => {
    return {
        type: ActionType.GET_USERS_SUCCEED,
        payload
    }
}

export const doUsersRequestFailed:any = (payload:any):any => {
    return {
        type: ActionType.GET_USERS_SUCCEED,
        payload
    }
}

export const doUserRequest:any = (payload:any):any => {
    return {
        type: ActionType.GET_USER,
        payload
    }
}

export const doUserRequestSucceed:any = (userId:number):any => {
    return {
        type: ActionType.GET_USER_SUCCEED,
        payload: userId
    }
}

export const doUserRequestFailed:any = (payload:any):any => {
    return {
        type: ActionType.GET_USER_SUCCEED,
        payload
    }
}

export const doUsersCreate:any = (payload:any):any => {
    return {
        type: ActionType.ADD_USERS,
        payload
    }
}

export const doAddUsersSucceed:any = (payload:any):any => {
    return {
        type: ActionType.ADD_USERS_SUCCEED,
        payload
    }

}

export const doAddUsersFailed:any = (payload:any):any => {
    return {
        type: ActionType.ADD_USERS_FAILED,
        payload
    }
}

export const doUpdateUsers:any = (id:number, payload:any):any => {
    return {
        type: ActionType.UPDATE_USERS,
        id,
        payload
    }
}

export const doUpdateUsersSucceed:any = (payload:any):any => {
    return {
        type: ActionType.UPDATE_USERS_SUCCEED,
        payload
    }
}


export const doUpdateUsersFailed:any = (payload:any):any => {
    return {
        type: ActionType.UPDATE_USERS_FAILED,
        payload
    }
}

export const doUpdatePhotoUsers:any = (id:number, payload:any) => {
    return {
        type: ActionType.UPDATE_PHOTO_USERS,
        id,
        payload
    }
}

export const doUpdatePhotoUsersSucceed:any = (payload:any):any => { // undefined
    return {
        type: ActionType.UPDATE_PHOTO_USERS_SUCCEED,
        payload
    }
}


export const doUpdatePhotoUsersFailed:any = (payload:any):any => {
    return {
        type: ActionType.UPDATE_PHOTO_USERS_FAILED,
        payload
    }
}

export const doDeleteUsers:any = (payload:any):any => {
    return {
        type: ActionType.DEL_USERS,
        payload
    }
}

export const doDeleteUsersSucceed:any = (payload:any):any => {
    return {
        type: ActionType.DEL_USERS_SUCCEED,
        payload
    }
}

export const doDeleteUsersFailed:any = (payload:any):any => {
    return {
        type: ActionType.DEL_USERS_FAILED,
        payload
    }
}

export const doLogin:any = (payload:any):any=> {
    return {
        type: ActionType.LOGIN,
        payload
    }
}

export const doLoginSucceed:any = (payload:any):any => {
    return {
        type: ActionType.LOGIN_SUCCEED,
        payload
    }
}

export const doLoginFailed:any = (payload:any):any => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload
    }
}

export const doRegister:any = (payload:any):any => {
    return {
        type: ActionType.REGISTER,
        payload
    }
}

export const doRegisterSucceed:any = (payload:any):any => {
    return {
        type: ActionType.REGISTER_SUCCEED,
        payload
    }
}

export const doRegisterFailed:any = (payload:any):any => {
    return {
        type: ActionType.REGISTER_FAILED,
        payload
    }
}

export const doRolesRequest:any = ():any => {
    return {
        type: ActionType.GET_ROLES
    }
}

export const doRolesRequestSucceed:any = (payload:any):any => {
    return {
        type: ActionType.GET_ROLES_SUCCEED,
        payload
    }
}

export const doRolesRequestFailed:any = (payload:any):any => {
    return {
        type: ActionType.GET_ROLES_SUCCEED,
        payload
    }
}

export const doRoleRequest:any = (payload:any):any => {
    return {
        type: ActionType.GET_ROLE,
        payload
    }
}

export const doRoleRequestSucceed:any = (roleId:number):any => {
    return {
        type: ActionType.GET_ROLE_SUCCEED,
        payload: roleId
    }
}

export const doRoleRequestFailed:any = (payload:any):any => {
    return {
        type: ActionType.GET_ROLE_SUCCEED,
        payload
    }
}

export const doRolesCreate:any = (payload:any):any => {
    return {
        type: ActionType.ADD_ROLES,
        payload
    }
}

export const doAddRolesSucceed:any = (payload:any):any => {
    return {
        type: ActionType.ADD_ROLES_SUCCEED,
        payload
    }

}

export const doAddRolesFailed:any = (payload:any):any => {
    return {
        type: ActionType.ADD_ROLES_FAILED,
        payload
    }
}

export const doUpdateRoles:any = (id:number, payload:any):any => {
    return {
        type: ActionType.UPDATE_ROLES,
        id,
        payload
    }
}

export const doUpdateRolesSucceed:any = (payload:any):any => {
    return {
        type: ActionType.UPDATE_ROLES_SUCCEED,
        payload
    }
}


export const doUpdateRolesFailed:any = (payload:any):any => {
    return {
        type: ActionType.UPDATE_ROLES_FAILED,
        payload
    }
}

export const doDeleteRoles:any = (payload:any):any => {
    return {
        type: ActionType.DEL_ROLES,
        payload
    }
}

export const doDeleteRolesSucceed:any = (payload:any):any => {
    return {
        type: ActionType.DEL_ROLES_SUCCEED,
        payload
    }
}

export const doDeleteRolesFailed:any = (payload:any):any => {
    return {
        type: ActionType.DEL_ROLES_FAILED,
        payload
    }
}