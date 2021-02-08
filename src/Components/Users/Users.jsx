import React from 'react';
import userAva from '../../assets/images/defaultAva.jpg';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";

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
                            {u.followed
                                ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
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
