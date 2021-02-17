import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';


function ChatHeader({user, chat}) {

    const last = chat.messages[chat.messages.length -1]


    return (
        <div className='chat__header'>
            <Avatar />
            <div className='chat__headerInfo'>
                <h3 className='chat-room-name'>{chat.name}</h3>
                <p className='chat-room-last-seen'>
                    {last? last.text : ""}
                </p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
                
            </div>
        </div>
    )
}

export default ChatHeader