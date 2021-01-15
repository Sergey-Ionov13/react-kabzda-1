import React from 'react';
import {addPostActionCreator, fillTextAreaActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    };

    let fillTextarea = (text) => {
        props.store.dispatch( fillTextAreaActionCreator(text) );
    };

    return (
        <MyPosts addPost={addPost} fillTextarea={fillTextarea} state={state} />
    );
}

export default MyPostsContainer;
