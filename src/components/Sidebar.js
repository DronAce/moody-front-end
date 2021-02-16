import React from 'react'
import './css/Sidebar.css'
import SidebarHeader from './SidebarHeader';
import Search from './Search';
import Chatrooms from './Chatrooms';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <Search />
            <Chatrooms />
        </div>
    )
}

export default Sidebar
