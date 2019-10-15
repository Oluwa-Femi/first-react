import React from 'react'
import '../style.css'

function ContactCard(props){
    return(
        <div className="">
            <img src={props.contact.imgURL} alt="" />
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>E-mail: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard