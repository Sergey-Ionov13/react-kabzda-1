import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
