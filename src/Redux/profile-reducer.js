import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const FILL_TEXTAREA = 'FILL-TEXTAREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 9},
        {id: 2, message: 'It\'s my second post', likesCount: 7}
    ],
    textarea: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
        {
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: state.textarea, likesCount: 0}],
                textarea: ''
            }
        }
        case FILL_TEXTAREA:
        {
            return  {...state, textarea: action.text};
        }
        case SET_USER_PROFILE:
        {
            return {...state, profile: action.profile};
        }
        case SET_STATUS:
        {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const fillTextAreaActionCreator = (text) => ({type: FILL_TEXTAREA, text: text});
const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const setUserProfile = (userID) => {
    return (dispatch) => {
        let userId = userID;
        if (!userId) {
            userId = 14557;
        }
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfileAC(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.changeProfileStatus(status).then(data => {
            if (!data.resultCode) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;