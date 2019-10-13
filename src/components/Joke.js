import React from 'react'
import '../style.css'

function Joke(props){
    return(
        <div>
            <p>Question: {props.jokes.question}</p>
            <p>Punch Line: {props.jokes.punchline}</p>
        </div>
    )
}

export default Joke