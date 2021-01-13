import React from 'react';
import m from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, fillTextAreaActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/> );
    let newPostElement = React.createRef();
    let textarea = props.profilePage.textarea;

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    };

    let fillTextarea = () => {
        let text = newPostElement.current.value;
        props.dispatch( fillTextAreaActionCreator(text) );
    };

    return (
        <div className={m.myPosts}>
            <h3>My posts</h3>
            <div className={m.newPost}>
                <div>
                    <textarea onInput={fillTextarea} ref={ newPostElement } value={textarea}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;
