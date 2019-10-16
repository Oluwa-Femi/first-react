import React from 'react'

function TodoItem(props){
    return (
    <div>
        <input type="checkbox" checked={props.done} onChange={()=>console.log("I have been checked")} />
        <p>Item: {props.item}</p>
    </div>
    )
}

export default TodoItem