import React from 'react';
import userAva from '../../assets/images/defaultAva.jpg';
import styles from './Users.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCapacity);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.paginationWrapper}>
            <div>
                {pages.map( p =>
                    <span className={props.currentPage === p ? styles.selected : ''}
                          onClick={ () => {props.setCurrentPage(p)}}
                    >{p}</span>
                )}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img alt={''} src={u.photos.small !== null ? u.photos.small : userAva} className={styles.ava}/>
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
