import { Fab, InputBase, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { primaryColor } from "../Colors.tsx";
import { Message } from "../CommonTypes.tsx";
import SendIcon from '@mui/icons-material/Send';

type ChatWindowProps = {
    friend: string
}

const FriendsList: React.FC<ChatWindowProps> = ({ friend }) => {

    const [messages, setMessages] = useState<Message[]>([])
    const [currentMessage, setCurrentMessage] = useState<string>("")

    const bottomRef = useRef<HTMLDivElement>();

    const sendMockMessage = () => {
        setMessages((messages) => {
            const updatedMessages = Array.from(messages);
            updatedMessages.push({
                message: "Hi, I will reply every few messages",
                sentByYou: false
            });
            return updatedMessages
        });
    }

    useEffect(() => {

        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
        if (messages.length > 0 && messages.length % 5 == 0) {
            setTimeout(() => {
                sendMockMessage();
            }, 1000);
        }
    }, [messages])

    useEffect(() => {
        setMessages([])
    }
        , [friend]);

    return (
        friend ?
            <Stack style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '10px', flex: 5 }} direction={'column'}>

                <div style={{ margin: '10px', padding: '10px', backgroundColor: primaryColor, color: 'white', borderRadius: '10px' }}>
                    Chatting with {friend}
                </div>

                <Stack style={{ height: '90vh', overflowY: 'auto' }}>
                    {
                        messages.map((message) => (
                            <div style={{
                                maxWidth: '40%',
                                alignSelf: message.sentByYou ? 'flex-end' : 'flex-start',
                                margin: '2px',

                                padding: '10px',
                                borderRadius: '10px',
                                backgroundColor: message.sentByYou ? primaryColor : 'white',
                                color: message.sentByYou ? 'white' : 'black',
                                border: '1px solid' + primaryColor
                            }}>
                                {message.message}
                            </div>
                        ))

                    }
                    <div ref={bottomRef} />
                </Stack>

                <Stack direction={'row'}>
                    <InputBase
                        style={{
                            alignSelf: "flex-end",
                            width: '90%',
                            margin: '5px',
                            padding: '10px',
                            border: '1px solid ' + primaryColor,
                            borderRadius: '15px',
                        }}
                        value={currentMessage}
                        placeholder="Type your message"
                        onChange={event => setCurrentMessage(event.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                if (currentMessage.length) {
                                    setMessages((messages) => {
                                        const updatedMessages = Array.from(messages);
                                        updatedMessages.push({
                                            message: currentMessage,
                                            sentByYou: true
                                        });
                                        return updatedMessages
                                    });
                                    setCurrentMessage("")
                                }
                            }
                        }}
                    />
                    <Fab
                        style={{ padding: '2px', margin: '5px', backgroundColor: primaryColor, color: 'white' }}
                        onClick={() => {
                            if (currentMessage.length) {
                                setMessages((messages) => {
                                    const updatedMessages = Array.from(messages);
                                    updatedMessages.push({
                                        message: currentMessage,
                                        sentByYou: true
                                    });
                                    return updatedMessages
                                });
                                setCurrentMessage("")
                            }
                        }}
                    >
                        <SendIcon />
                    </Fab>
                </Stack>
            </Stack>
            :

            <></>

    );
}

export default FriendsList;