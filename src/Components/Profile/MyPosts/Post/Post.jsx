import React from 'react';
import p from './Post.module.css';
import Like from "./like/Like";
import PostsText from "./PostsText/PostsText";

const Post = (props) => {
    return (
        <div className={p.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBxpj2OOGlOnaXrRmZQ0-s3nOhCBwJEFfwZQ&usqp=CAU'/>
            <PostsText message={props.message}/>
            <Like count={props.likes}/>
        </div>
    );
}

export default Post;
