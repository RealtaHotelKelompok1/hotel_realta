import { useDispatch, useSelector } from "react-redux"
import BankTable from "./components/tables/bankTable"
import LayoutAdmin from "@/components/Layout/LayoutAdmin"
import { fetchBanks } from "@/redux/Actions/Payment/bank"
import { useEffect } from "react"
import InfoChart from "./components/InfoChart"
import { Row } from "@nextui-org/react"

const Bank = () => {
    const dispatch = useDispatch()
    const banks = useSelector((state: any) => state.bankReducer.banks)

    useEffect(() => {
        dispatch(fetchBanks())
    }, [banks])

    return (
        <LayoutAdmin>
            <Row>
                <BankTable data={banks} />
                <InfoChart data={banks} name="Bank" />
            </Row>
        </LayoutAdmin>
    )
}

export default Bank