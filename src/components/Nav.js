import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav () {
        return(
            <div>
                <ul className="nav">
                    <li><NavLink exact to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/publications'}>Publications</NavLink></li>
                    <li><NavLink to={'/photos'}>Photos</NavLink></li>
                    <li><NavLink to={'/contacts'}>Contacts</NavLink></li>
                </ul>
            </div>
        )
}