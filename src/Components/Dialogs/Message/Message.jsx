import React from 'react';
import d from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={d.message + ' ' + props.owner}>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Message;
