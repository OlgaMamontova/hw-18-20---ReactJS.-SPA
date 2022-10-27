import React from "react";
import {Link} from "react-router-dom";
function Contact ({firstName, lastName, phone, gender, id}){
    if(gender){
        if (gender.toLowerCase() == 'male'){
        gender = '♂';
        } if (gender.toLowerCase() == 'female') {
            gender = '♀';
        };
    };
    
    return (
        <div className="contact">
            <Link to={`/contacts/${id}`}>
            <p><span>{gender} </span> {lastName} {firstName}</p>
            <p className="number">{phone}</p>
            </Link>
        </div>        
        );
};

export default Contact;