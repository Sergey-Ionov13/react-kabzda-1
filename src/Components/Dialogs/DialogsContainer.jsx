import React from 'react';
import {addMessageActionCreator, printTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Redux/StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().dialogPage;

                let addMessage = () => {
                    store.dispatch( addMessageActionCreator() );
                };

                let printText = (text) => {
                    store.dispatch( printTextActionCreator(text) );
                };

                return (
                    <Dialogs state={state} addMessage={addMessage} printText={printText} />
                );
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
