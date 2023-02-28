import { transactionColumns } from "@/redux/Constant/Payment/columns";
import { fetchTransactions } from "@/redux/Actions/Payment/transaction";
import { Container, FormElement, Table, Text, Input, Spacer, Dropdown, Row } from "@nextui-org/react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Transaction } from "@/redux/Constant/Payment/interfaces";

export default function TransactionTable() {
    const dispatch = useDispatch()

    const transactions = useSelector((state: any) => state.transactionReducer.transactions)
    const [searchValue, setSearchValue] = useState("")
    const [selectedTransactionType, setSelectedTransactionType] = useState("transaction type")

    useEffect(() => {
        dispatch(fetchTransactions())
    })

    const filteredData = useMemo(() => {
        if (searchValue) {
            return transactions.filter((item: any) => {
                return Object.values(item).some((value) =>
                    String(value).toLowerCase().includes(searchValue.toLowerCase())
                );
            });
        }

        if (selectedTransactionType !== "transaction type") {
            return transactions.filter((item: Transaction) => item.transactionType == selectedTransactionType)
        }

        return transactions
    }, [transactions, searchValue, selectedTransactionType]);

    return (
        <Container>
            <Row justify="space-between">
                <Input
                    bordered
                    className="h-10"
                    color="default"
                    shadow={false}
                    type="search"
                    onChange={(e: ChangeEvent<FormElement>) => setSearchValue(e.target.value)}
                    labelPlaceholder="Search" />
                <Dropdown disableAnimation>
                    <Dropdown.Button flat color="primary" className="h-10 w-[200px] capitalize bg-black text-white">
                        {selectedTransactionType}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        variant="solid"
                        aria-label="Single selection actions"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedTransactionType}
                        onSelectionChange={(value: any) => setSelectedTransactionType(value.currentKey)}>
                        <Dropdown.Item key="TP "> Top Up </Dropdown.Item>
                        <Dropdown.Item key="ORM"> Order Menu </Dropdown.Item>
                        <Dropdown.Item key="TRB"> Booking Order </Dropdown.Item>
                        <Dropdown.Item key="RPY"> Repayment </Dropdown.Item>
                        <Dropdown.Item key="RF "> Refund </Dropdown.Item>
                        <Dropdown.Item key="transaction type" color="error" withDivider> Reset selection </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Spacer />
            <Table
                className="table-fixed"
                shadow={false}
                animated={false}
                aria-label="All user's transactions">
                <Table.Header columns={transactionColumns}>
                    {
                        (column: any) => (
                            <Table.Column
                                key={column.uid}
                                isRowHeader
                                css={{
                                    bgColor: "$black",
                                    color: "$white",
                                }}>
                                {column.name} </Table.Column>
                        )
                    }
                </Table.Header>
                <Table.Body items={filteredData}>
                    {(item: any) => (
                        <Table.Row
                            key={item.transactionId}
                            css={{
                                wordWrap: "break-word"
                            }}>
                            {
                                (columnKey: any) =>
                                    <Table.Cell css={{ whiteSpace: "normal", fontSize: "$sm" }}>
                                        {item[columnKey]}
                                    </Table.Cell>
                            }
                        </Table.Row>
                    )}
                </Table.Body>
                <Table.Pagination
                    align="center"
                    rowsPerPage={5}
                />
            </Table>
            <Spacer />
        </Container>
    );
}
