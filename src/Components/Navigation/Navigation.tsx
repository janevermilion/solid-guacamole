import React from "react";

import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <ul className={'navigation'}>
            <li className={'navigation__item'}>
                <NavLink   to='/chats' >Chat</NavLink>
            </li>
            <li className={'navigation__item'}>
                <NavLink  to='/settings'>Settings</NavLink>
            </li>
            <li className={'navigation__item'}>
                <NavLink  to='/profiles'>Profiles</NavLink>
            </li>
            <li className={'navigation__item'}>
                <NavLink  to='/login'>Login</NavLink>
            </li>
            <li className={'navigation__item'}>
                <NavLink  to='/forgotpass'>Forgot pass</NavLink>
            </li>
        </ul>)
}

export default Navigation;
