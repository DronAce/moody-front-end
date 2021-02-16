import React from 'react'
import './css/SidebarChat.css';
import {Avatar} from '@material-ui/core'


function SidebarChat({room}) {

    // const lastMessage = room.messages.last()

    return (
        <div className="sidebarChat">
            <Avatar /* src={user.image} */ />
            <div className="sidebarChat__info">
                <h2>{/*room.name*/}</h2>
                <p>{/* lastMessage */}</p>
            </div>
        </div>
    )
}

export default SidebarChat
