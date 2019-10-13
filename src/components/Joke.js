import React from 'react'
import '../style.css'

function Joke(props){
    return(
        <div>
            <p style={{display: props.jokes.question ? "block" : "none"}}>Question: {props.jokes.question}</p>
            <p style={{color: !props.jokes.question && "red"}}>Punch Line: {props.jokes.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke