import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://wallpaperaccess.com/full/138733.jpg'/>
            </div>
            <div className={p.description}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;
