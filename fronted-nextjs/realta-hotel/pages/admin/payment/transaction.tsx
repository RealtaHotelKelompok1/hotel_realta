import "@/styles/payment.module.css"
import TransactionTable from "./components/tables/transactionTable";
import LayoutAdmin from "@/components/Layout/LayoutAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactions } from "@/redux/Actions/Payment/transaction";
import InfoChart from "./components/InfoChart";
import { Col, Row } from "@nextui-org/react";
import CategoryChart from "./components/CategoryChart";

const Transaction = () => {
    const dispatch = useDispatch()
    const transactions = useSelector((state: any) => state.transactionReducer.transactions)

    useEffect(() => {
        dispatch(fetchTransactions())
    })

    return (
        <LayoutAdmin>
            {/* <Text
                    h1
                    size={60}
                    weight="bold"
                > User's transaction till the world ends... </Text> */}
            <Row>
                <TransactionTable data={transactions} />
                <Col>
                    <InfoChart data={transactions} name={"Transaction"} />
                    <CategoryChart data={transactions} name={"Transaction"} />
                </Col>
            </Row>
        </LayoutAdmin>
    )
}

export default Transaction