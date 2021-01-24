import React from 'react';
import * as axios from 'axios';
import userAva from '../../assets/images/defaultAva.jpg';
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCapacity}`).then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            } )
        }
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCapacity);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const setCurrentPage = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCapacity}`).then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            } )
        }

        return <div className={styles.paginationWrapper}>
            <div>
                {pages.map( p =>
                <span className={this.props.currentPage === p ? styles.selected : ''}
                      onClick={ () => {setCurrentPage(p)}}
                >{p}</span>
                )}
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img alt={''} src={u.photos.small !== null ? u.photos.small : userAva} className={styles.ava}/>
                            <button onClick={() => {
                                this.props.followToggle(u.id)
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
    }
}

export default Users;
