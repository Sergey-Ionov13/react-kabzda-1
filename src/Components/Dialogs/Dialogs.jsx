import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} owner={m.owner}/> );
    let textarea = props.state.textarea;

    let onAddMessage = () => {
        props.addMessage();
    };

    let onPrintText = (event) => {
        let text = event.target.value;
        props.printText(text);
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
                <div>
                    <textarea onInput={onPrintText} value={textarea}/>
                </div>
                <button onClick={onAddMessage}>Add post</button>
            </div>
        </div>
    );
}

export default Dialogs;
