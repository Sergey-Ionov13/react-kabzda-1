import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, printTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.dialogPage.messages.map( m => <Message message={m.message} id={m.id} owner={m.owner}/> );
    let newPostElement = React.createRef();
    let textarea = props.dialogPage.textarea;

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    };

    let printText = () => {
        let text = newPostElement.current.value;
        props.dispatch( printTextActionCreator(text) );
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
                <div>
                    <textarea onInput={printText} ref={newPostElement} value={textarea}></textarea>
                </div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}

export default Dialogs;
