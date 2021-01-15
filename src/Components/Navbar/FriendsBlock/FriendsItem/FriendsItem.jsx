import React from 'react';
import f from '../FriendsBlock.module.css'
import Ava from "../../../Avatar/Ava";

const FriendsItem = (props) => {

    return (
        <div className={f.friendsItem}>
            <Ava/>
            <div className={f.friendsName}>{props.name}</div>
        </div>
    );
}

export default FriendsItem;
