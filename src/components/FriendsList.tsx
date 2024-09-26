import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FriendItem from "./FriendItem.tsx";
import { primaryColor } from "../Colors.tsx";
import AddNewFriendModal from "./AddNewFriendModal.tsx";
import ChatIcon from '@mui/icons-material/Chat';

type Props = {
    friends: string[],
    addChat: Function,
    setCurrentChat: Function,
    collapsed: boolean,
    setCollapsed: Function
}

const FriendsList: React.FC<Props> = ({ friends, addChat, setCurrentChat, collapsed, setCollapsed }) => {

    const [showAddFriendModal, setShowAddFriendModal] = useState<boolean>(false)


    return (
        collapsed ?
            (
                <Stack style={{ margin: '0px', width: '30px', padding: '10px', backgroundColor: primaryColor }}>
                    <ChatIcon style={{ color: 'white' }} onClick={() => {
                        setCollapsed(false);
                    }} />
                </Stack>
            )
            :
            (
                <Stack style={{ flex: 1, padding: '10px', maxWidth: '40vw', backgroundColor: primaryColor }}>

                    <AddNewFriendModal
                        showAddFriendModal={showAddFriendModal}
                        setShowAddFriendModal={setShowAddFriendModal}
                        addChat={addChat}
                    ></AddNewFriendModal>

                    <Button
                        onClick={() => {
                            setShowAddFriendModal(true);
                        }}
                        variant='contained' style={{
                            backgroundColor: 'white',
                            color: primaryColor,
                            borderRadius: '10px',
                            border: '1px solid' + primaryColor,
                            margin: '5px'
                        }}>
                        <Typography
                            justifySelf={'center'}
                            fontWeight={"regular"}>
                            Add Chat
                        </Typography>
                    </Button>
                    <Stack>
                        {friends.map((friend, index) => (
                            <div onClick={() => {
                                setCurrentChat(index);
                                if (window.innerWidth < window.innerHeight) {
                                    setCollapsed(true);
                                }
                            }}>
                                <FriendItem
                                    name={friend}></FriendItem>
                            </div>
                        ))}
                    </Stack>

                </Stack>

            )

    );
}

export default FriendsList;