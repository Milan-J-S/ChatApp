import { Modal, Stack, InputBase, Button } from "@mui/material";
import { primaryColor } from "../Colors.tsx";
import React, { useEffect, useState } from "react";

type AddNewFriendModalProps = {
    showAddFriendModal: boolean,
    setShowAddFriendModal: Function,
    addChat: Function
}

const AddNewFriendModal: React.FC<AddNewFriendModalProps> = ({ addChat, showAddFriendModal, setShowAddFriendModal }) => {

    const [friendName, setFriendName] = useState<string>("")

    useEffect((() => {
        setFriendName("")

    }), [showAddFriendModal])

    return (
        <Modal
            style={{
                display: 'absolute',
                margin: 'auto',
                maxWidth: '60vw',
                padding: '10px'

            }}
            open={showAddFriendModal} onClose={() => {
                setShowAddFriendModal(false);
            }}>
            <Stack style={{ padding: '10px', backgroundColor: 'white', borderRadius: '10px' }}>
                <InputBase
                    placeholder="Friend's Name"
                    onChange={(e) => {
                        setFriendName(e.target.value);
                    }}
                    value={friendName}
                    style={{
                        padding: '10px',
                        border: '1px solid ' + primaryColor,
                        margin: '5px',
                        borderRadius: '10px'
                    }}></InputBase>
                <Button
                    onClick={() => {
                        if (friendName.length) {
                            addChat(friendName);
                            setShowAddFriendModal(false);
                        }
                    }}
                    style={{
                        margin: '5px',
                        backgroundColor: primaryColor,
                        color: 'white',
                        borderRadius: '10px'
                    }}
                    variant="contained">Add Chat</Button>

            </Stack>
        </Modal>
    )

}

export default AddNewFriendModal;
