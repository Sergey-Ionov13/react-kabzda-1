const ADD_POST = 'ADD-POST';
const FILL_TEXTAREA = 'FILL-TEXTAREA';

const profileReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.length + 1,
                message: state.textarea,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.textarea = '';
            return state;
        case 'FILL-TEXTAREA':
            state.textarea = action.text;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const fillTextAreaActionCreator = (text) => ({type: FILL_TEXTAREA, text: text});

export default profileReducer;