import { Stack } from '@mui/material';
import './App.css';
import React, { useState } from 'react';
import FriendsList from './components/FriendsList.tsx';
import ChatWindow from './components/ChatWindow.tsx';

const App = () => {

  // Maintain a list of all the friends and their chats here

  const [friends, setFriends] = useState<string[]>([])
  const [currentChat, setCurrentChat] = useState<number>(-1)
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const addChat = (name) => {
    setFriends( (friends) => {
     const updatedFriends = Array.from(friends);
     updatedFriends.push(name)

     return updatedFriends
    } )
  }

  return (

    <Stack direction={'row'} justifyContent={"space-between"} style={{height: '100vh'}}>

      <FriendsList
        addChat = {addChat}
        friends = {friends}
        setCurrentChat = {setCurrentChat}
        collapsed = {collapsed}
        setCollapsed={setCollapsed}
      />

      <ChatWindow 
      friend = {friends[currentChat]}
      >
        
      </ChatWindow>
      

    </Stack>

  );
}

export default App;
