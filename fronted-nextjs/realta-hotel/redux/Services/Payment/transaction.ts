import { TRANSACTION_URL } from '@/redux/Constant/Payment/urls'
import axios from 'axios'

const getAll = async () => {
    return await axios.get(TRANSACTION_URL)
}

const create = async (data: any) => {
    return await axios.post(`${TRANSACTION_URL}/new`, data).then(result=>console.log(result)).catch(error=>console.log(error))
}

const transactionService = {
    getAll,
    create
}

export default transactionService