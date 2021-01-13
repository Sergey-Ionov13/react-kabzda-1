import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, printTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} owner={m.owner}/> );
    let textarea = state.textarea;

    let addMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
    };

    let printText = (event) => {
        let text = event.target.value;
        props.store.dispatch( printTextActionCreator(text) );
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
                <div>
                    <textarea onInput={printText} value={textarea}></textarea>
                </div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}

export default Dialogs;
