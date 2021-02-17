import React, {useState} from 'react'
import './css/Sidebar.css'
import SidebarHeader from './SidebarHeader';
import Search from './Search';
import Chatrooms from './Chatrooms';
import SearchResult from './SearchResult'

function Sidebar({ user, chatrooms, showChat, users, addContact }) {
    const [search, setSearch] = useState("")
    const searchUsers = users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))
    const searched = searchUsers.map((user) => <SearchResult user={user} addContact={addContact}/>)

    const userChatrooms = chatrooms.filter((chatroom) => user.id === chatroom.user_id || user.id === chatroom.contact_id)
    const renderChatroom = userChatrooms.map((chatroom) => <Chatrooms key={chatroom.id} chatroom={chatroom} showChat={showChat}/>)

    return (
        <div className="sidebar">
            <SidebarHeader key={user.id} user={user}/>
            <Search setSearch={setSearch}  />
            {search === "" ? renderChatroom : searched }
        </div>
    )
}

export default Sidebar
