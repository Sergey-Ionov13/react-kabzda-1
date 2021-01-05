import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.store.getState().sidebar} />
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={ ()=>
                        <Profile profilePage={props.store.getState().profilePage}
                                 addPost={props.store.addPost.bind(props.store)}
                                 fillTextarea={props.store.fillTextarea.bind(props.store)} />
                    } />
                    <Route path='/Dialogs' render={ ()=>
                        <Dialogs dialogPage={props.store.getState().dialogPage}
                                 addMessage={props.store.addMessage.bind(props.store)}
                                 printText={props.store.printText.bind(props.store)} /> } />
                    <Route path='/Music' render={ ()=> <Music /> }/>
                    <Route path='/News' render={ ()=> <News /> }/>
                    <Route path='/Settings' render={ ()=> <Settings /> }/>
                </div>
            </div>
    );
}

export default App;
