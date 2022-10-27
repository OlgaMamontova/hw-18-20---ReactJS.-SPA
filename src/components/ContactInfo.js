import React from "react";
import { startContacts } from '../components/StartContacts'
function ContactInfo(props){
    
    const index = props.match.params.id;
    const contact = startContacts[index];
    if(contact.gender){
        if (contact.gender.toLowerCase() == 'male'){
            contact.gender = '♂';
        } if (contact.gender.toLowerCase() == 'female') {
            contact.gender = '♀';
        };
    };
    console.log(index);
    return (
        <div className="contactInfo">
            <button onClick={() => props.history.goBack()}>Back</button>
            <div>
                <h3><span>{contact.gender} </span>{contact.firstName} {contact.lastName}</h3>
                <p className="number">{contact.phone}</p>
                <p>{contact.description}</p>
            </div>
        </div>
    )    
}

export default ContactInfo;