import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'It\'s my first post', likes: 9},
        {id: 2, message: 'It\'s my first post', likes: 7}
    ];
    let postsElements = posts.map( p => <Post id={p.id} message={p.message} likes={p.likes}/> );

    return (
        <div className={m.myPosts}>
            <h3>My posts</h3>
            <div className={m.newPost}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;
