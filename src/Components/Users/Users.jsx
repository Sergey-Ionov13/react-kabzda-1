import React from 'react';
import * as axios from 'axios';
import userAva from '../../assets/images/defaultAva.jpg';
import us from './Users.module.css';

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                props.setUsers(response.data.items);
            } )
        }
    }

    return <div>
        <button onClick={getUsers}>get users</button>
        {
            props.users.map(u =>
                <div key={u.id}>
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
}

export default Users;
