
import { Container, Text } from "@nextui-org/react";
import "@/styles/payment.module.css"
import { useState } from "react";
import TransactionTable from "./components/tables/transactionTable";
import LayoutAdmin from "@/components/Layout/LayoutAdmin";


const Transaction = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (value: any) => {
        setSearchValue(value)
    }

    return (
        <LayoutAdmin>
            {/* <Container responsive> */}
                {/* <Text
                    h1
                    size={60}
                    weight="bold"
                > User's transaction till the world ends... </Text> */}
                <TransactionTable />
            {/* </Container> */}

        </LayoutAdmin>
    )
}

export default Transaction