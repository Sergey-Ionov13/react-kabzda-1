import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.f} />
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={ ()=> <Profile posts={props.p} /> } />
                    <Route path='/Dialogs' render={ ()=> <Dialogs dialogs={props.m.dialogs} messages={props.m.messages} /> } />
                    <Route path='/Music' render={ ()=> <Music /> }/>
                    <Route path='/News' render={ ()=> <News /> }/>
                    <Route path='/Settings' render={ ()=> <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
