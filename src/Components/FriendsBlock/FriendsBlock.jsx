import React from 'react';
import f from './FriendsBlock.module.css'
/*import {NavLink} from "react-router-dom";*/
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsBlock = (props) => {

    let friendsElements = props.friends.map( (f, i) => {
        if (i < 3) {
            return (<FriendsItem name={f.name} id={f.id}/>)
        }
    } );

    return (
        <div className={f.friendsBlock}>
                <h2>Friends</h2>
                <div className={f.friendsList}>
                    {friendsElements}
                </div>
            </div>
    );
}

export default FriendsBlock;
