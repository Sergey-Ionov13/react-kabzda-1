import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img alt='' src='https://wallpaperaccess.com/full/138733.jpg'/>
            </div>
            <div className={p.description}>
                <img alt='' src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                ava + description</div>
        </div>
    )
}

export default ProfileInfo;
