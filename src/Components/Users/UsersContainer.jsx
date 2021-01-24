import {connect} from "react-redux";
import {
    followToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../../Redux/user-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCapacity}`).then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            } )
        }
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCapacity}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        } )
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageCapacity={this.props.pageCapacity}
                      currentPage={this.props.currentPage}
                      setCurrentPage={this.setCurrentPage}
                      users={this.props.users}
                      followToggle={this.props.followToggle}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageCapacity: state.usersPage.pageCapacity,
        currentPage: state.usersPage.currentPage

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followToggle: (userID) => {
            dispatch(followToggleAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
