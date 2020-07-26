import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post likes='9'/>
            <Post/>
        </div>
    );
}

export default MyPosts;
