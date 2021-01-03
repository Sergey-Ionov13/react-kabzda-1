import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, printText, fillTextarea} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state} addPost = {addPost} fillTextarea = {fillTextarea} addMessage = {addMessage} printText = {printText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
