import React, { useState, useEffect } from 'react';
import './css/App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import './css/Login.css'
import Login from './Login'

function App() {
    let login

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [chatrooms, setChatrooms] = useState([])
    const [message, setMessage] = useState()
    const [chat, setChat] = useState()
    const [room, setRoom] = useState(null)
    const [roomId, setRoomId] = useState()
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])

    useEffect(() => {
            fetch("http://localhost:4000/chatrooms")
            .then((res) => res.json())
            .then((data) => {
                setChatrooms(data)
            })    
    }, [roomId])
    
    function showChat(roomId) {
        fetch(`http://localhost:4000/chatrooms/${roomId}`)
        .then((res) => res.json())
        .then((data) => {
            setRoom(data)
            console.log("roomapp", data)
            let messageArray = data.messages
            setChat(messageArray)
            console.log("showChat", data.messages)
        })
    }

    
    function newMessage(e, emotion) {
        e.preventDefault()
        const form = {
            user_id: user.id,
            text: message,
            emotion: emotion,
            chatroom_id: room.id
        }

        fetch(`http://localhost:4000/messages`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {'Content-type':'application/json'}
        })  
        .then((res) => res.json())
        .then(data =>{
           console.log("newMessage", data)
           const updatedchat = [...chat, data]
           setChat(updatedchat)
        })
        e.target.reset()
    }

    function addContact(contact) {
        const newChatroom = {
            name: contact.name,
            user_id: user.id,
            contact_id: contact.id,
            name2: user.name
        }

        fetch(`http://localhost:4000/chatrooms`, {
            method: 'POST',
            body: JSON.stringify(newChatroom),
            headers: {'Content-type':'application/json'}
        })  
        .then((res) => res.json())
        .then(data =>{
           setRoom(data)
            console.log("roomapp", data)
           showChat(data.id)
        //     const updatedchatrooms = [...chatrooms, data]
        //    setChatrooms(updatedchatrooms)
           setSearch("")
        })
        
    }

    return ( 
        <div className = "app" > 
            {!user ? (
                <Login users={users} setUser={setUser}/>
            ) : ( 
            < div className = "app__body" > 
                <Sidebar setSearch={setSearch} search={search} key={user.id} user={user} chatrooms={chatrooms} showChat={showChat} users={users} addContact={addContact} />
                <Chat chat={chat} newMessage={newMessage} setMessage={setMessage} user={user} room={room} users={users}/> 
            </div> )}   
        </div>
    );
}

export default App;