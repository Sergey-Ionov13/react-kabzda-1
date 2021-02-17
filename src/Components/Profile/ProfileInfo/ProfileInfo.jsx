import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img alt='' src='https://wallpaperaccess.com/full/138733.jpg'/>
            </div>
            <div className={p.description}>
                <img alt='' src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={'I am free!!!'} />
            </div>
        </div>
    )
}

export default ProfileInfo;
