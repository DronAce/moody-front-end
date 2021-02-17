import React from 'react'
import './css/SidebarChat.css';
import {Avatar} from '@material-ui/core'

function SearchResult({user, addContact}) {

    return (
        <div className="sidebarChat" >
            <Avatar />
            <div className="sidebarChat__info" onClick={() => addContact(user)}  >
                <h2>{user.name}</h2>
            </div>
        </div>
    )
}

export default SearchResult
