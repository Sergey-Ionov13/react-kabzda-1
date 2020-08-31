import React from 'react';
import l from './Like.module.css';

const Like = (props) => {
    return (
        <div className={l.like}>
            <img src='https://img.icons8.com/cotton/2x/facebook-like--v2.png'/>
            <span> {props.likesCount}</span>
        </div>
    );
}

export default Like;
