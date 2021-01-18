const ADD_MESSAGE = 'ADD-MESSAGE';
const PRINT_TEXT = 'PRINT-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Evgeny'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vadim'},
        {id: 6, name: 'Dima'}
    ],

    messages: [
        {id: 1, message: 'Hi!', owner: ''},
        {id: 2, message: 'How is your IT?', owner: ''},
        {id: 3, message: 'ok!', owner: 'owner'}
    ],
    textarea: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
        {
            return  {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: state.textarea, owner: 'owner'}],
                textarea: ''
            };
        }
        case PRINT_TEXT:
        {
            return  {...state, textarea: action.text};
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const printTextActionCreator = (text) => ({type: PRINT_TEXT, text: text});

export default dialogsReducer;