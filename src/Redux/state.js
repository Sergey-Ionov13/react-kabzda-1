const ADD_POST = 'ADD-POST';
const FILL_TEXTAREA = 'FILL-TEXTAREA';
const ADD_MESSAGE = 'ADD-MESSAGE';
const PRINT_TEXT = 'PRINT-TEXT';

let store = {

    _rerenderEntireTree() {
        console.log('rerenderEntireTree is not yet available!');
    },

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likesCount: 9},
                {id: 2, message: 'It\'s my second post', likesCount: 7}
            ],
            textarea: ''
        },

        dialogPage: {
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
        },

        sidebar: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Evgeny'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Dima'},
            {id: 5, name: 'Vadim'},
            {id: 6, name: 'Dima'}
        ]
    },



    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },



    dispatch(action) {
        if (action.type==='ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length+1,
                message: this._state.profilePage.textarea,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textarea = '';
            this._rerenderEntireTree(this);

        } else if (action.type==='FILL-TEXTAREA') {
            this._state.profilePage.textarea = action.text;
            this._rerenderEntireTree(this);
        } else if (action.type==='ADD-MESSAGE') {
            let newMessage = {
                id: this._state.dialogPage.messages.length+1,
                message: this._state.dialogPage.textarea,
                owner: 'owner'
            }
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.textarea = '';
            this._rerenderEntireTree(this);
        } else if (action.type==='PRINT-TEXT') {
            this._state.dialogPage.textarea = action.text;
            this._rerenderEntireTree(this);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const fillTextAreaActionCreator = (text) => ({type: FILL_TEXTAREA, text: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const printTextActionCreator = (text) => ({type: PRINT_TEXT, text: text});

export default store;
