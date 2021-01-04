let rerenderEntireTree = () => {
    console.log('rerenderEntireTree is not yet available!');
}

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
}

//   for ProfilePage texarea
export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length+1,
        message: state.profilePage.textarea,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.textarea = '';

    rerenderEntireTree(state);
}

export const fillTextarea = (text) => {
    state.profilePage.textarea = text;

    rerenderEntireTree(state);
}

//   for DialogsPage texarea
export const addMessage = () => {
    let newMessage = {
        id: state.dialogPage.messages.length+1,
        message: state.dialogPage.textarea,
        owner: 'owner'
    }
    state.dialogPage.messages.push(newMessage);
    state.profilePage.textarea = '';

    rerenderEntireTree(state);
}

export const printText = (text) => {
    state.dialogPage.textarea = text;

    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
