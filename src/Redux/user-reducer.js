const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';

const initialState = [];

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE: {
            return [
                ...state.map(u => {
                    if (u.id === action.userID) {
                        u.followed = !u.followed;
                        return u;
                    }
                    return u;
                })
            ]
        }
        case SET_USERS: {
            return [...state, ...action.users]
        }
        default:
            return state;
    }
}

export const followToggleAC = (userID) => ({type: FOLLOW_TOGGLE, userID: userID});
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;