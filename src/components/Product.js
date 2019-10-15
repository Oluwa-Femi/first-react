import React from 'react'
import '../style.css'

function Product(props){
    return (
        <div>
            <p>Product: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
            <hr />
        </div>
    )
}

export default Product