import React from 'react';
import p from './Post.module.css';
import Like from "./like/Like";
import PostsText from "./PostsText/PostsText";
import Ava from "../../../Avatar/Ava";

const Post = (props) => {
    return (
        <div className={p.item}>
            <Ava/>
            <PostsText message={props.message}/>
            <Like count={props.likes}/>
        </div>
    );
}

export default Post;
