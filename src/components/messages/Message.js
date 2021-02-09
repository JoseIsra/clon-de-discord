import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';
export const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                    <h4>israSayHi
<span className="message_timestamp">el timestamps</span>

                    </h4>
                    <p>el mensaje enviado</p>
            </div>
        </div>
    )
}

