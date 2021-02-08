import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageCapacity: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [
                    ...state.users.map(u => {
                        if (u.id === action.userID) {
                            u.followed = true;
                            return u;
                        }
                        return u;
                    })
                ]
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [
                    ...state.users.map(u => {
                        if (u.id === action.userID) {
                            u.followed = false;
                            return u;
                        }
                        return u;
                    })
                ]
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_PAGES_COUNT: {
            return {
                ...state,
                pageCapacity: action.pageCapacity,
                allUsersCount: action.allUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    :state.followInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

const followAccept = (userID) => ({type: FOLLOW, userID});
const unfollowAccept = (userID) => ({type: UNFOLLOW, userID});
const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPageNumber = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageCapacity) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageCapacity).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const setCurrentPage = (pageNumber, pageCapacity) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPageNumber(pageNumber));
        usersAPI.getUsers(pageNumber, pageCapacity).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.setUnfollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAccept(userID));
                dispatch(toggleFollowingProgress(false, userID));
            }
        });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.setFollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAccept(userID));
                dispatch(toggleFollowingProgress(false, userID));
            }
        });
    }
}

export default usersReducer;