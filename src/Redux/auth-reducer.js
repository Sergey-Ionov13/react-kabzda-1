import {loginAPI, profileAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false,
    password: null,
    rememberMe: false
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
        case SET_USER_LOGIN_DATA:
        {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

const setUserAuthDataAC = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}});
const setUserLoginData = (email, password, rememberMe) => ({type: SET_USER_LOGIN_DATA, data: {email, password, rememberMe}});

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

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        loginAPI.login(email, password, rememberMe).then(data => {
            if (!data.resultCode) {
                dispatch(setUserLoginData(email, password, rememberMe));
                alert('Congratulation!!! You logged in!');
            } else {
                alert('Sorry! you entered wrong email or password. Please try again!');
            }
        });
    }
}

export const logOut = () => {
    return (dispatch) => {
        loginAPI.logOut().then(data => {
            if (!data.resultCode) {
                dispatch(setUserLoginData(null, null, false));
                dispatch(setUserAuthDataAC(null, null, null));
                alert('You logged out!');
            } else {
                alert('Something wrong!');
            }
        })
        alert('You logged out!');
    }
}

export default authReducer;