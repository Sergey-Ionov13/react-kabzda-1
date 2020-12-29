import {rerenderEntireTree} from "../render";

let state = {

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
            {id: 1, message: 'Hi!', my: ''},
            {id: 2, message: 'How is your IT?', my: ''},
            {id: 3, message: 'ok!', my: 'my'}
        ]
    },

    sidebar: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Evgeny'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vadim'},
        {id: 6, name: 'Dima'}
    ]
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length+1,
        message: state.profilePage.textarea,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.textarea = '';

    rerenderEntireTree(state);
}

export let fillTextarea = (text) => {
    state.profilePage.textarea = text;

    rerenderEntireTree(state);
}

export default state
