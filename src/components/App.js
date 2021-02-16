import React, {useState, useEffect} from 'react';
import './css/App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'





function App() {

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
      let login = data.filter((user) => user.id === 1)
        login = login.map((user) => <Sidebar user={user}/>)
    
      
    }) 
  },[])

  console.log(user)


  return (
    <div className="app">
       {user ? (
         <div className="app__body">  
         {login}
        <Chat /> 
      </div> )
        : null 
       }
    </div>
  );
}

export default App;
