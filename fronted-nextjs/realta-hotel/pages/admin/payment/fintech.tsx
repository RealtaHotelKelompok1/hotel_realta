import LayoutAdmin from "@/components/Layout/LayoutAdmin"
import FintechTable from "./components/tables/fintechTable"
import InfoChart from "./components/InfoChart"
import { Row } from "@nextui-org/react"
import { fetchFintech } from "@/redux/Actions/Payment/fintech"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Fintech = () => {
    const dispatch = useDispatch()
    const fintech = useSelector((state: any) => state.fintechReducer.fintech)

    useEffect(() => {
		dispatch(fetchFintech());
    }, [fintech]);
    
    return (
        <LayoutAdmin>
            <Row>
                <FintechTable data={fintech} />
                <InfoChart data={fintech} name="Fintech" />
            </Row>
        </LayoutAdmin>
    )
}

export default Fintech