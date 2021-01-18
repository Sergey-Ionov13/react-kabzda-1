import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                               likesCount={p.likesCount}/>);
    let textarea = props.profilePage.textarea;

    let onAddPost = () => {
        props.addPost();
    };

    let onFillTextarea = (event) => {
        let text = event.target.value;
        props.fillTextarea(text);
    };

    return (
        <div className={m.myPosts}>
            <h3>My posts</h3>
            <div className={m.newPost}>
                <div>
                    <textarea onChange={onFillTextarea} value={textarea}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;
