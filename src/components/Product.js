import React from 'react'
import '../style.css'

function Product(props){
    return (
        <div>
            <p>Product: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Product