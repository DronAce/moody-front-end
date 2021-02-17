import React from 'react'
import { SearchOutlined } from '@material-ui/icons'


function Search({setSearch}) {


    return ( 
        <div className = "sidebar__search" >
            <div className = "sidebar__searchContainer" >
                <SearchOutlined />
                <input type = "text" placeholder = "Search or start new chat" onChange={(e) => setSearch(e.target.value)}/>
            </div> 
        </div>
    )
}

export default Search