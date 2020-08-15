import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let posts = [
    {id: 1, message: 'It\'s my first post', likes: 9},
    {id: 2, message: 'It\'s my first post', likes: 7}
];

ReactDOM.render(
  <React.StrictMode>
    <App d={dialogs} m={messages} p={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
