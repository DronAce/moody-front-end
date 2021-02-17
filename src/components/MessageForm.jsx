import React, {useState} from 'react'


function MessageForm({newMessage, setMessage}) {

    const [emotion, setEmotion] = useState("None")

    
    return (
        <div className='chat__footer'>
            <form onSubmit={(e) => newMessage(e, emotion)}>
                <select onChange={(e) => setEmotion(e.target.value)}>
                    <option value='Mood'>Mood</option>
                    <option value='happy'>Happy</option>
                    <option value= "sad">Sad</option>
                    <option value= "suprise">Sarcastic</option>
                    <option value= "fear">Flirty</option>
                    <option value= "angry">Angry</option>
                    <option value= "joking">Joking</option>
                    <option value= "disgust">Confused</option>
                    <option value= "serious">Serious</option>
                    <option value= "playful">Playful</option>
                </select>
                <input type="text" placeholder="Type a message" onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit"> Send</button>
            </form>
        </div>
    )
}

export default MessageForm