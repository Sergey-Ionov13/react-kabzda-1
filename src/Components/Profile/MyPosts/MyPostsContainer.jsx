import React from 'react';
import {addPostActionCreator, fillTextAreaActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Redux/StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch( addPostActionCreator() );
                };

                let fillTextarea = (text) => {
                    store.dispatch( fillTextAreaActionCreator(text) );
                };

                return (
                    <MyPosts addPost={addPost} fillTextarea={fillTextarea} state={state} />
                );
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;
