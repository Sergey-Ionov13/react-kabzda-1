const ADD_MESSAGE = 'ADD-MESSAGE';
const PRINT_TEXT = 'PRINT-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: state.messages.length + 1,
                message: state.textarea,
                owner: 'owner'
            }
            state.messages.push(newMessage);
            state.textarea = '';
            return state;
        case 'PRINT-TEXT':
            state.textarea = action.text;
            return state;
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const printTextActionCreator = (text) => ({type: PRINT_TEXT, text: text});

export default dialogsReducer;