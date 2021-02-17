import React from 'react'
import ChatHeader from './ChatHeader.jsx';
import ChatBody from './ChatBody';
import MessageForm from './MessageForm';
import './css/Chat.css'

function Chat({newMessage, setMessage, chat, user}) {

    return (

        <div className='chat'>
            {chat? <ChatHeader user={user} chat={chat}/> : null}
            {chat? <ChatBody key={chat.id} user={user} chat={chat}/> : null}
            {chat? <MessageForm newMessage={newMessage} setMessage={setMessage}/> : null}
        </div>
    )
}

export default Chat
