import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>New post</textarea>
                <button>Add post</button>
            </div>
            <Post likes='9'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;
