import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} fillTextarea={props.fillTextarea} />
        </div>
    );
}

export default Profile;
