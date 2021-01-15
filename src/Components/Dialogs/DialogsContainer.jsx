import React from 'react';
import {addMessageActionCreator, printTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let addMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
    };

    let printText = (text) => {
        props.store.dispatch( printTextActionCreator(text) );
    };

    return (
        <Dialogs state={state} addMessage={addMessage} printText={printText} />
    );
}

export default DialogsContainer;
