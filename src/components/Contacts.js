import { useState } from "react";
import Contact from "./Contact";
import '../styles/contacts.css'
import { startContacts } from '../components/StartContacts'

function Contacts (){    
    const [contacts, setContacts] = useState(startContacts);

    const render = (contacts) => {
        return (
            contacts.map((contact) => {
            return <Contact key={contact.lastName+contact.firstName} {...contact}/>
            })
        );
    };
     
    const handleSearchChange = (value) => {
        const filtredContacts = startContacts.filter((contact) => contact.firstName.toLowerCase().includes(value.toLowerCase()) || contact.lastName.toLowerCase().includes(value.toLowerCase()) || contact.phone.includes(value))
        setContacts(() => {
            return filtredContacts;
        });       
    };

    return (
        <div className="contacts">
            <h2>Contacts</h2>
            <input
            type="text"
            placeholder="⌕ Пошук"          
            onChange={(e) => handleSearchChange(e.target.value)}
            />
            {render(contacts)}
        </div>        
    )
};

export default Contacts;