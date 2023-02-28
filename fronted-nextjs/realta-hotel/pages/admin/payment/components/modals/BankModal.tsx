import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text, FormElement } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { updateBank, insertBank } from "@/redux/Actions/Payment/bank";
import { Bank } from "@/redux/Constant/Payment/interfaces";

export default function BankModal({ type, modalOpen, setModalOpen, data }: {
    type: string,
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    data?: Bank | any
}) {
    /** For improvements..
     * TODO: Show alert after saving data => user checks inputted data
    */
    const dispatch = useDispatch()
    const [bankData, setBankData] = useState({
        bankEntityId: 0,
        bankName: "",
        bankCode: "",
        bankModifiedDate: ""
    })

    useEffect(() => {
        setBankData({
            ...bankData,
            bankEntityId: data?.bankEntityId,
            bankModifiedDate: new Date().toISOString()
        })
    }, [])

    const updateData = (data: Bank) => {
        setModalOpen(!modalOpen)
        dispatch(updateBank(data))
    }

    const addData = (data: Bank) => {
        setModalOpen(!modalOpen)
        dispatch(insertBank(data))
    }

    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        {type} <span />
                        <Text b size={18}>
                            Bank
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="default"
                        size="lg"
                        label="Bank code"
                        placeholder={data ? data?.bankCode : "Bank code"}
                        onChange={(e: ChangeEvent<FormElement>) => setBankData({
                            ...bankData,
                            bankCode: e.target.value
                        })}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="default"
                        size="lg"
                        label="Bank name"
                        placeholder={data ? data?.bankName : "Bank name"}
                        onChange={(e: ChangeEvent<FormElement>) => setBankData({
                            ...bankData,
                            bankName: e.target.value
                        })}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        auto
                        flat
                        color="gradient"
                        className="text-black"
                        onPress={() => data ? updateData(bankData): addData(bankData)}>
                        {data ? "Save" : "Add"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
