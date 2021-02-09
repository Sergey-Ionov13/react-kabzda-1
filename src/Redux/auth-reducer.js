import {profileAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
        {
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        }
        default:
            return state;
    }
}

const setUserAuthDataAC = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}});

export const setUserAuthData = () => {
    return (dispatch) => {
        profileAPI.getAuthorizationStatus().then(data => {
            if (!data.resultCode) {
                let {id, login, email} = data.data;
                dispatch(setUserAuthDataAC(id, email, login));
            }
        });
    }
}

export default authReducer;