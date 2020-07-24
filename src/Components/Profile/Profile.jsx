import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src='https://wallpaperaccess.com/full/138733.jpg'/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
