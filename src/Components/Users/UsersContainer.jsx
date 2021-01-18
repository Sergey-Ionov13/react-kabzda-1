import {connect} from "react-redux";
import Users from "./Users";
import {followToggleAC, setUsersAC} from "../../Redux/user-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followToggle: (userID) => {
            dispatch(followToggleAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default MyPostsContainer;
