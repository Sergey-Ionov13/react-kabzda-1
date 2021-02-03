import React from 'react';
import userAva from '../../assets/images/defaultAva.jpg';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCapacity);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.paginationWrapper}>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p ? styles.selected : ''}
                          onClick={() => {
                              props.setCurrentPage(p)
                          }}
                    >{p}</span>
                )}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img alt={''} src={u.photos.small !== null ? u.photos.small : userAva}
                                     className={styles.ava}/>
                            </NavLink>
                            {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '68603415-4ccf-488a-9cd5-25d6e21a86b4'
                                    }

                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                            }}>Unfollow</button> : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '68603415-4ccf-488a-9cd5-25d6e21a86b4'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });
                            }}>Follow</button>}
                        </div>
                        <div>
                            <div>
                                <span>{u.name}</span>
                                <span>{u.status}</span>
                            </div>
                            <div>
                                <span>{`${'u.location.country'},`}</span>
                                <span>{`${'u.location.city'},`}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
