import React from 'react'
import ChatHeader from './ChatHeader.jsx';
import ChatBody from './ChatBody';
import MessageForm from './MessageForm';
import './css/Chat.css'

function Chat({newMessage, setMessage, chat, user, room, users}) {

    return (

        <div className='chat'>
            {chat? <ChatHeader room={room} user={user} chat={chat}/> : null}
            {chat? <ChatBody key={chat.id} user={user} chat={chat} room={room} users={users}/> :  
            <img className="logo" src="https://i.ibb.co/Fn43nT0/Moody2png.png" alt="Moody" />}
            {chat? <MessageForm newMessage={newMessage} setMessage={setMessage}/> : 
             <img className="logoname" src="https://i.ibb.co/rv88Wyw/Moody-Logo1.png" alt="Moody" />}
        </div>
    )
}

export default Chat
