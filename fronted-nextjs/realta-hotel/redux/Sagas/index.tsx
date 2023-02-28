import { all, takeEvery } from "redux-saga/effects";
import ActionType from "../Constant/Users/ActionType";
import { handleAddRoles, handleAddUsers, handleDelRoles, handleDelUsers, handleLoginUsers, handleRegisterUsers, handleRole, handleRoles, handleUpdatePhotoUsers, handleUpdateRoles, handleUpdateUsers, handleUser, handleUsers } from "./Users/usersSaga";
import { deleteBank, fetchBanks, insertBank, updateBank } from "./Payment/bank";
import { fetchFintech, updateFintech, insertFintech, deleteFintech } from "./Payment/fintech";
import { fetchTransactions, createTransaction } from "./Payment/transaction";
import { fetchUserAccounts, fetchUserAccountBy, createUserAccount, deleteUserAccount, updateUserAccount, checkSecuredKey } from "./Payment/userAccount";
import { FETCH_BANKS, UPDATE_BANK, INSERT_BANK, DELETE_BANK } from "../Constant/Payment/bank";
import { FETCH_FINTECH, UPDATE_FINTECH, INSERT_FINTECH, DELETE_FINTECH } from "../Constant/Payment/fintech";
import { FETCH_TRANSACTIONS, CREATE_TRANSACTION } from "../Constant/Payment/transaction";
import { FETCH_ACCOUNTS, FETCH_ACCOUNT, CREATE_ACCOUNT, DELETE_ACCOUNT, UPDATE_ACCOUNT, CHECK_SECURED_KEY } from "../Constant/Payment/userAccount";

function* watchAll(): any {
    yield all([
        //Master Reducer nya dibawah Comman masing" module

        //Users
        takeEvery(ActionType.GET_USERS, handleUsers),
        takeEvery(ActionType.GET_USER, handleUser),
        takeEvery(ActionType.ADD_USERS, handleAddUsers),
        takeEvery(ActionType.UPDATE_USERS, handleUpdateUsers),
        takeEvery(ActionType.UPDATE_PHOTO_USERS, handleUpdatePhotoUsers),
        takeEvery(ActionType.DEL_USERS, handleDelUsers),
        takeEvery(ActionType.LOGIN, handleLoginUsers),
        takeEvery(ActionType.REGISTER, handleRegisterUsers),
        takeEvery(ActionType.GET_ROLES, handleRoles),
        takeEvery(ActionType.GET_ROLE, handleRole),
        takeEvery(ActionType.ADD_ROLES, handleAddRoles),
        takeEvery(ActionType.UPDATE_ROLES, handleUpdateRoles),
        takeEvery(ActionType.DEL_ROLES, handleDelRoles),

        //HR

        //Hotels

        //Booking

        //Resto

        //Payment
        takeEvery(FETCH_BANKS, fetchBanks),
        takeEvery(UPDATE_BANK, updateBank),
        takeEvery(INSERT_BANK, insertBank),
        takeEvery(DELETE_BANK, deleteBank),
        takeEvery(FETCH_FINTECH, fetchFintech),
        takeEvery(UPDATE_FINTECH, updateFintech),
        takeEvery(INSERT_FINTECH, insertFintech),
        takeEvery(DELETE_FINTECH, deleteFintech),
        takeEvery(FETCH_TRANSACTIONS, fetchTransactions),
        takeEvery(CREATE_TRANSACTION, createTransaction),
        takeEvery(FETCH_ACCOUNTS, fetchUserAccounts),
        takeEvery(FETCH_ACCOUNT, fetchUserAccountBy),
        takeEvery(CREATE_ACCOUNT, createUserAccount),
        takeEvery(DELETE_ACCOUNT, deleteUserAccount),
        takeEvery(UPDATE_ACCOUNT, updateUserAccount),
        takeEvery(CHECK_SECURED_KEY, checkSecuredKey),

        //Purchase
    ])
}

export default watchAll