const ADD_POST = 'ADD-POST';
const FILL_TEXTAREA = 'FILL-TEXTAREA';

const initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 9},
        {id: 2, message: 'It\'s my second post', likesCount: 7}
    ],
    textarea: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
        {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            let newPost = {
                id: stateCopy.posts.length + 1,
                message: stateCopy.textarea,
                likesCount: 0
            }
            stateCopy.posts.push(newPost);
            stateCopy.textarea = '';
            return stateCopy;
        }
        case FILL_TEXTAREA:
        {
            let stateCopy = {...state};
            stateCopy.textarea = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const fillTextAreaActionCreator = (text) => ({type: FILL_TEXTAREA, text: text});

export default profileReducer;