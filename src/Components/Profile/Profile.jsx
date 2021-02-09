import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from 'react-router';

const Profile = (props) => {

    if (!props.isAuthorized) return <Redirect to={'/Login'} />

    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
