import React from 'react';
import h from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img alt={''} src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png'/>
            <div className={h.loginBlock}>
                {props.isAuthorized
                    ? <div>
                        <span>{props.login} </span>
                        <button onClick={props.logOut}>Log out</button>
                    </div>
                    : <NavLink to='/login'>Log In</NavLink>}
            </div>
        </header>
    );
}

export default Header;
