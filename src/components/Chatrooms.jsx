import React from 'react'
import SidebarChat from './SidebarChat'

function Chatrooms({chatroom, showChat}) {

    return (
        <div className="sidebar__chats">
            <SidebarChat chatroom={chatroom} showChat={showChat}/>
        </div>
    )
}

export default Chatrooms
