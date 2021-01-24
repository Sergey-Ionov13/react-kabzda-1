import {connect} from "react-redux";
import Users from "./Users";
import {
    followToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../../Redux/user-reducer";

const mapStateToProps = (state) => {
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default MyPostsContainer;
