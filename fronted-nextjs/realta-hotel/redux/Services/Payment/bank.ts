import { Bank } from "@/redux/Constant/Payment/interfaces";
import { BANK_URL } from "@/redux/Constant/Payment/urls";
import axios from "axios";

const getAll = async (): Promise<any> => {
	return await axios.get(BANK_URL);
};

const insert = async (data: Bank): Promise<any> => {
	return await axios.post(BANK_URL, data);
};

const update = async (data: Bank): Promise<any> => {
	return await axios.put(`${BANK_URL}/${data.bankEntityId}`, data);
};

const remove = async (data: Bank): Promise<any> => {
	return await axios.delete(`${BANK_URL}/${data.bankEntityId}`);
};

const bankService = {
	getAll,
	insert,
	update,
	remove,
};

export default bankService;
