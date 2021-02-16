import React from 'react'
import SidebarChat from './SidebarChat'

function Chatrooms() {

    // const renderRooms = rooms.map((room) => <SidebarChat key={room.id} room={room}/>))

    return (
        <div className="sidebar__chats">
            <SidebarChat />
            {/*renderRooms*/}
        </div>
    )
}

export default Chatrooms
