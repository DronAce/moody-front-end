import React from 'react'
import './css/SidebarChat.css';
import {Avatar} from '@material-ui/core'


function SidebarChat({ chatroom, showChat }) {

    const last = chatroom.messages[chatroom.messages.length-1]

    return (
        <div className="sidebarChat" onClick={() => showChat(chatroom.id)}>
            <Avatar /* src={user.image} */ />
            <div className="sidebarChat__info">
                <h2>{chatroom.name}</h2>
                <p>{last? last.text : ""}</p>
            </div>
        </div>
    )
}

export default SidebarChat
