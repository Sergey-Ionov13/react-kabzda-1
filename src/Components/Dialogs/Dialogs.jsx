import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router';

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id} owner={m.owner}/>);
    let textarea = props.dialogPage.textarea;

    let onAddMessage = () => {
        props.addMessage();
    };

    let onPrintText = (event) => {
        let text = event.target.value;
        props.printText(text);
    };

    if (!props.isAuthorized) return <Redirect to={'/login'} />

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onPrintText} value={textarea}/>
                </div>
                <button onClick={onAddMessage}>Add post</button>
            </div>
        </div>
    );
}

export default Dialogs;
