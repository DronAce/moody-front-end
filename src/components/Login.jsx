import React,{useState} from 'react'
import { Button } from "@material-ui/core";
import './css/Login.css'


function Login({users, setUser}) {

    const [loginUser, setLoginUser] = useState()

    function signIn(e) {
        e.preventDefault()
        const login = users.filter((user) => user.username.toLowerCase() === loginUser.toLowerCase())
        login.map((user) => setUser(user))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img className="logo" src="https://i.ibb.co/Fn43nT0/Moody2png.png" alt="Moody" />
                
                <div>
                    <img className="signin avatar" src="https://i.ibb.co/5WsJ9SC/Moody-Logo2.png" alt="Moody" />
                </div>
                <form>
                    <p><input type = "text" placeholder = "username" onChange={(e) => setLoginUser(e.target.value)}/></p>
                    <Button type="submit" onClick={signIn}> Sign In </Button>
                </form>

                
            </div>
        </div>
    )
}

export default Login