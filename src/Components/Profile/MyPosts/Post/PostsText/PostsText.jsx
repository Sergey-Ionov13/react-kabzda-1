import React from 'react';
import pt from './PostsText.module.css';

const PostsText = (props) => {
    return (
        <div className={pt.textArea}>{props.message}</div>
    );
}

export default PostsText;
