import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat'

function SidebarHeader({ user }) {
    const { name } = user

    return (
        <div className="sidebar__header">
            <Avatar />
            <h1> {name} </h1>
            <div className="sidebar__headerRight">
                
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                    
            </div>
        </div>
    )
}

export default SidebarHeader
