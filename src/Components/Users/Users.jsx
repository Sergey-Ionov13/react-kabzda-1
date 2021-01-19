import React from 'react';
import * as axios from 'axios';
import userAva from '../../assets/images/defaultAva.jpg';
import us from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {

        /*
        props.setUsers([
            {
                id: 1,
                followed: true,
                firstName: 'Sergey',
                lastName: 'Ionov',
                status: 'Boss',
                location: {country: 'Belarus', city: 'Minsk'},
                avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
            },
            {
                id: 2,
                followed: true,
                firstName: 'Vadim',
                lastName: 'Gustyr',
                status: 'Boss',
                location: {country: 'Belarus', city: 'Slonim'},
                avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
            },
            {
                id: 3,
                followed: false,
                firstName: 'Anton',
                lastName: 'Alekseev',
                status: 'Blogger',
                location: {country: 'Belarus', city: 'Minsk'},
                avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
            },
            {
                id: 4,
                followed: false,
                firstName: 'Vitalik',
                lastName: 'Kovzus',
                status: 'Master',
                location: {country: 'Belarus', city: 'Minsk'},
                avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
            }
        ]);
        */
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items);
        } )
    }

    return <div>
        {
            props.users.map(u =>
                <div key={props.id}>
                    <div>
                        <img alt={''} src={u.photos.small !== null ? u.photos.small : userAva} className={us.ava}/>
                        <button onClick={() => {
                            props.followToggle(u.id)
                        }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <div>
                        <div>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                        <div>
                            <span>{`${'u.location.country'},`}</span>
                            <span>{'u.location.city'}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    /*(
        props.users.map( u =>
            <div>
                <div>
                    <img alt={''} src={u.avaURL}/>
                    <button onClick={props.followToggle}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
                <div>
                    <div>
                        <span>{`${u.firstName} ${u.lastName}`}</span>
                        <span>{u.status}</span>
                    </div>
                    <div>
                        <span>{`${u.location.country},`}</span>
                        <span>{u.location.city}</span>
                    </div>
                </div>
            </div>
        )
    );*/
}

export default Users;
