import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/Profile'>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/Dialogs'>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/News'>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='Music'>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='Settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
