import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'It\'s my first post', likesCount: 9},
            {id: 2, message: 'It\'s my second post', likesCount: 7}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export default state
