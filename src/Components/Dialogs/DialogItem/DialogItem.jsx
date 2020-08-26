import React from 'react';
import d from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Ava from "../../Avatar/Ava";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <Ava />
            <NavLink to={'/Dialogs/' + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
