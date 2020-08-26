let state = {

    profile: {
        posts: [
            {id: 1, message: 'It\'s my first post', likes: 9},
            {id: 2, message: 'It\'s my first post', likes: 7}
        ]
    },

    messages: {
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

    friends: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Evgeny'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vadim'},
        {id: 6, name: 'Dima'}
    ]
}

export default state
