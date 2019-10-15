import React from 'react'
import '../style.css'

function Joke(props){
    return(
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "red"}}>Punch Line: {props.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke