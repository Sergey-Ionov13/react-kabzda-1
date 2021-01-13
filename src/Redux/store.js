import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTree(this);
    }
}

export default store;
