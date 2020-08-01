import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to={'/Dialogs/' + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={d.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Evgeny'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vadim'},
        {id: 6, name: 'Dima'}
    ];

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your IT?'},
        {id: 3, message: 'ok!'}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/> );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;
