import { useState, useMemo, ChangeEvent } from "react"
import { useDispatch } from "react-redux";
import { Button, Col, Container, Row, Table, Tooltip, Spacer, Input, FormElement, Text } from "@nextui-org/react";
import { IconButton } from "../icon/iconbutton";
import { DeleteIcon } from "../icon/deleteIcon";
import { EditIcon } from "../icon/editIcon";
import { Bank } from "@/redux/Constant/Payment/interfaces";
import { bankColumns } from "@/redux/Constant/Payment/columns";
import { deleteBank } from "@/redux/Actions/Payment/bank";
import BankModal from "../modals/BankModal";

export default function BankTable({ data }: {
    data: Bank[]
}) {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState("")
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [modalData, setModalData] = useState<Bank>(
        {
            bankEntityId: 0,
            bankCode: "",
            bankName: "",
            bankModifiedDate: ""
        })

    const filteredData = useMemo(() => {
        if (!searchValue) return data;
        return data.filter((item: any) => {
            return Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchValue.toLowerCase())
            );
        });
    }, [data, searchValue]);

    const renderCell = (item: any, columnKey: React.Key) => {
        const cellValue = item[columnKey]
        if (columnKey == "actions") {
            return (
                <Row align="center" justify="center">
                    <Col className="flex w-auto">
                        <Tooltip
                            content="Edit">
                            <IconButton onClick={() => { setEditModalVisible(true), setModalData(item) }} >
                                <EditIcon size={20} fill="#979797" />
                            </IconButton>
                        </Tooltip>
                    </Col>
                    <Spacer />
                    <Col className="flex w-auto">
                        <Tooltip
                            content="Delete"
                            color="error">
                            <IconButton onClick={() => dispatch(deleteBank(item))}>
                                <DeleteIcon size={20} fill="#FF0080" />
                            </IconButton>
                        </Tooltip>
                    </Col>
                </Row>
            )
        }
        return (
            <Row>
                {cellValue}
            </Row>
        )
    }

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
                <Button className="bg-black" onPress={() => setAddModalVisible(true)}> Add </Button>
            </Row>
            <Spacer />
            <Table
                aria-label="All banks"
                className="table-fixed"
                shadow={false}
                animated={false}>
                <Table.Header columns={bankColumns}>
                    {
                        (column: any) => (
                            <Table.Column
                                key={column.uid}
                                isRowHeader
                                css={{
                                    bgColor: "$black",
                                    color: "$white",
                                }}>
                                {column.uid == "actions" ? "" : column.name}
                            </Table.Column>
                        )
                    }
                </Table.Header>
                <Table.Body items={filteredData}>
                    {(item: any) => (
                        <Table.Row
                            key={item.bankCode}
                            css={{
                                wordWrap: "break-word"
                            }}>
                            {
                                (columnKey: any) =>
                                    <Table.Cell css={{ whiteSpace: "normal", fontSize: "$sm" }}>
                                        {renderCell(item, columnKey)}
                                    </Table.Cell>
                            }
                        </Table.Row>
                    )}
                </Table.Body>
                <Table.Pagination
                    animated={false}
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                />
            </Table>
            {
                editModalVisible &&
                <BankModal
                    type="Edit"
                    modalOpen={editModalVisible}
                    setModalOpen={setEditModalVisible}
                    data={modalData}
                />}
            {
                addModalVisible &&
                <BankModal
                    type="Add"
                    modalOpen={addModalVisible}
                    setModalOpen={setAddModalVisible}
                />}
        </Container >
    )
}