const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';

const initialState = [
    /*
    {
        id: 1, followed: true, firstName: 'Sergey', lastName: 'Ionov', status: 'Boss', location: {country: 'Belarus', city: 'Minsk'},
        avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
    },
    {
        id: 2, followed: true, firstName: 'Vadim', lastName: 'Gustyr', status: 'Boss', location: {country: 'Belarus', city: 'Slonim'},
        avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
    },
    {
        id: 3, followed: false, firstName: 'Anton', lastName: 'Alekseev', status: 'Blogger', location: {country: 'Belarus', city: 'Minsk'},
        avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
    },
    {
        id: 4, followed: false, firstName: 'Vitalik', lastName: 'Kovzus', status: 'Master', location: {country: 'Belarus', city: 'Minsk'},
        avaURL: 'https://www.colourbox.com/preview/32519689-black-and-white-anonymous-avatar-silhouette-set.jpg'
    }
     */
];

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