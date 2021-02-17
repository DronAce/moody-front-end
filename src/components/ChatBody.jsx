import React from 'react'

function ChatBody({chat, user}) {
    const renderMessages = chat.messages.map((message) => 
        <p className={`chat__message ${message.emotion} ${message.user_id == user.id &&  'chat__receiver'}`}>
            {message.text}
        </p> )
    return (
        <div className='chat__body'>
            {renderMessages}
        </div>
    )
}

export default ChatBody
