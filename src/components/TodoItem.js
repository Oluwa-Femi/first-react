import React from 'react'

function TodoItem(props){
    return (
    <div>
        <input type="checkbox" checked={props.done} />
        <p>Item: {props.item}</p>
    </div>
    )
}

export default TodoItem