import {connect} from "react-redux";
import {
    follow, unfollow,
    setCurrentPage, getUsers
} from "../../Redux/user-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageCapacity);
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber, this.props.pageCapacity);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageCapacity={this.props.pageCapacity}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followInProgress={this.props.followInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageCapacity: state.usersPage.pageCapacity,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress

    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers}),
    withAuthRedirect
)(UsersContainer);
