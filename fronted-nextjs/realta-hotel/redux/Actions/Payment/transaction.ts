import { FETCH_TRANSACTIONS, CREATE_TRANSACTION } from "@/redux/Constant/Payment/transaction"


export const fetchTransactions = () => {
    return {
        type: FETCH_TRANSACTIONS
    }
}

export const createTransaction = (data: any) => {
    return {
        type: CREATE_TRANSACTION,
        data
    }
}