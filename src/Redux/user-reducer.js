const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageCapacity: 10,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE: {
            return {...state,
                users: [
                ...state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = !u.followed;
                        return u;
                    }
                    return u;
                })
        ]
            }
        }
        case SET_USERS: {
            return {...state,
                users: [...action.users]
            }
        }
        case SET_PAGES_COUNT: {
            return {...state,
                pageCapacity: action.pageCapacity,
                allUsersCount: action.allUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state,
                currentPage: action.currentPage
            }
        }case TOTAL_USERS_COUNT: {
            return {...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
}

export const followToggleAC = (userID) => ({type: FOLLOW_TOGGLE, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount});

export default usersReducer;