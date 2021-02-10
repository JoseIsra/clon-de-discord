import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';
export const Message = ({timestamps, message, user}) => {
    return (
        <div className="message">
            <Avatar src={ user.photo }/>
            <div className="message__info">
                    <h4>{user.displayName}
<span className="message_timestamp">{new Date(timestamps?.toDate()).toUTCString()}</span>

                    </h4>
                    <p>{ message }</p>
            </div>
        </div>
    )
}

