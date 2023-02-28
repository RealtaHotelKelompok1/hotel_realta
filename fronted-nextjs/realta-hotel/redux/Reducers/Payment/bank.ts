import {
	FETCH_BANKS,
	FETCH_BANKS_SUCCEED,
	FETCH_BANKS_FAILED,
	UPDATE_BANK,
	UPDATE_BANK_SUCCEED,
	UPDATE_BANK_FAILED,
	INSERT_BANK,
	INSERT_BANK_SUCCEED,
	INSERT_BANK_FAILED,
	DELETE_BANK,
	DELETE_BANK_SUCCEED,
	DELETE_BANK_FAILED,
} from "@/redux/Constant/Payment/bank";
import { Bank } from "@/redux/Constant/Payment/interfaces";

const initialState: { banks: Bank[]; error: any } = {
	banks: [],
	error: null,
};

export default function bankReducer(state = initialState, action: any) {
	switch (action.type) {
		case FETCH_BANKS:
			return {
				...state,
			};
		case FETCH_BANKS_SUCCEED:
			return {
				...state,
				banks: action.data,
			};
		case FETCH_BANKS_FAILED:
			return {
				...state,
				error: action.error,
			};

		case UPDATE_BANK:
			return {
				...state,
			};
		case UPDATE_BANK_SUCCEED:
			const newBankData: Bank = {
				bankEntityId: action.data.bankEntityId,
				bankCode: action.data.bankCode,
				bankName: action.data.bankName,
				bankModifiedDate: action.data.bankModifiedDate,
			};
			state.banks.splice(
				state.banks.findIndex(
					(item: any) => item.bankEntityId == action.data.bankEntityId
				),
				1,
				newBankData
			);
		case UPDATE_BANK_FAILED:
			return {
				...state,
				error: action.error,
			};

		case INSERT_BANK:
			return {
				...state,
			};
		case INSERT_BANK_SUCCEED:
			return {
				...state,
				banks: [...state.banks, action.data],
			};
		case INSERT_BANK_FAILED:
			return {
				...state,
				error: action.error,
			};

		case DELETE_BANK:
			return {
				...state,
			};
		case DELETE_BANK_SUCCEED:
			return {
				...state,
				banks: state.banks.filter(
					(bank) => bank.bankEntityId != action.bankEntityId
				),
			};
		case DELETE_BANK_FAILED:
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
}
