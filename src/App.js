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
                                 dispatch={props.store.dispatch.bind(props.store)} />
                    } />
                    <Route path='/Dialogs' render={ ()=>
                        <Dialogs dialogPage={props.store.getState().dialogPage}
                                 dispatch={props.store.dispatch.bind(props.store)} /> } />
                    <Route path='/Music' render={ ()=> <Music /> }/>
                    <Route path='/News' render={ ()=> <News /> }/>
                    <Route path='/Settings' render={ ()=> <Settings /> }/>
                </div>
            </div>
    );
}

export default App;
