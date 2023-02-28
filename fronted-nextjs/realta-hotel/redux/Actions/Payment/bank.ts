import {
	DELETE_BANK,
	FETCH_BANKS,
	INSERT_BANK,
	UPDATE_BANK,
} from "@/redux/Constant/Payment/bank";
import { Bank } from "@/redux/Constant/Payment/interfaces";

export const fetchBanks = () => {
	return {
		type: FETCH_BANKS,
	};
};

export const updateBank = (data: Bank) => {
	return {
		type: UPDATE_BANK,
		data,
	};
};

export const insertBank = (data: Bank) => {
	return {
		type: INSERT_BANK,
		data,
	};
};

export const deleteBank = (data: Bank) => {
	return {
		type: DELETE_BANK,
		data,
	};
};
