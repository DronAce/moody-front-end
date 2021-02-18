import React from 'react'

function ChatBody({chat, user, users}) {
    const renderMessages = chat.map((message) => 
        <p className={`chat__message ${message.emotion} ${message.user_id == user.id &&  'chat__receiver'}`}>
        <span className="chat__name">:{message.emotion}:</span>
            {message.text}
        </p> )
    return (
        <div className='chat__body'>
            {renderMessages}
        </div>
    )
}

export default ChatBody
