import { Transaction } from "@/redux/Constant/Payment/interfaces";
import {
	FETCH_TRANSACTIONS,
	FETCH_TRANSACTIONS_FAILED,
	FETCH_TRANSACTIONS_SUCCEED,
	CREATE_TRANSACTION,
	CREATE_TRANSACTION_SUCCEED,
	CREATE_TRANSACTION_FAILED,
} from "@/redux/Constant/Payment/transaction";

const initialState: { transactions: Transaction[]; error: any } = {
	transactions: [],
	error: null,
};

export default function transactionReducer(state = initialState, action: any) {
	switch (action.type) {
		// FETCH ALL
		case FETCH_TRANSACTIONS:
			return {
				...state,
			};
		case FETCH_TRANSACTIONS_FAILED:
			return {
				...state,
				error: action.error,
			};
		case FETCH_TRANSACTIONS_SUCCEED:
			return {
				...state,
				transactions: action.data,
			};

		// CREATE
		case CREATE_TRANSACTION:
			return {
				...state,
			};
		case CREATE_TRANSACTION_SUCCEED:
			return {
				...state,
				error: action.error,
			};
		case CREATE_TRANSACTION_FAILED:
			return {
				...state,
				transactions: [...state.transactions, action.data],
			};
		default:
			return state;
	}
}
