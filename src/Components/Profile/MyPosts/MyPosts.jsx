import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likes={p.likes}/> );
    let newPostElement = React.createRef();

    let addPost = () => {
        alert(newPostElement.current.value)
    }

    return (
        <div className={m.myPosts}>
            <h3>My posts</h3>
            <div className={m.newPost}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;
