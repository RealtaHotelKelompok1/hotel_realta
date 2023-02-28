import {
	FETCH_TRANSACTIONS_SUCCEED,
	FETCH_TRANSACTIONS_FAILED,
	CREATE_TRANSACTION_SUCCEED,
	CREATE_TRANSACTION_FAILED,
} from "@/redux/Constant/Payment/transaction";
import transactionService from "@/redux/Services/Payment/transaction";
import { call, put } from "redux-saga/effects";

export function* fetchTransactions(): any {
	try {
		const result = yield call(transactionService.getAll);
		yield put({
			type: FETCH_TRANSACTIONS_SUCCEED,
			data: result.data,
		});
	} catch (error) {
		yield put({
			type: FETCH_TRANSACTIONS_FAILED,
			error: error,
		});
	}
}

export function* createTransaction(action: any): any {
	try {
		const result = yield call(transactionService.create, action.data);
		yield put({
			type: CREATE_TRANSACTION_SUCCEED,
			data: result.data,
		});
	} catch (error) {
		yield put({
			type: CREATE_TRANSACTION_FAILED,
			error: error,
		});
	}
}
