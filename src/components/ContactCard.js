import React from 'react'
import '../style.css'
import { tsPropertySignature } from '@babel/types'

function ContactCard(props){
    return(
        <div className="">
            <img src={props.imgURL} />
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>E-mail: {props.email}</p>
        </div>
    )
}

export default ContactCard