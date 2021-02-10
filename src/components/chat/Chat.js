import React, { useState, useEffect } from 'react'
import { ChatHeader, Message } from '../../components';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import GifIcon from '@material-ui/icons/Gif';
import './Chat.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId } from '../../features/appSlice';
import db from '../../firebase';
import firebase from 'firebase';

export const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamps', 'desc')
                .onSnapshot((snapshot => setMessages(snapshot.docs.map((doc) => doc.data()))));
        }

    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamps: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user
            })
            setInput('');

    }

    
    return (
        <div className="chat">
            <ChatHeader  />

            <div className="chat__messages">
                {messages.map(message=>(
                <Message 
                timestamps={message.timestamps}
                message ={message.message}
                user={message.user}
                />
            ))}
            </div>

            <div className="chat__input">
                <AddCircleRoundedIcon />
                <form>
                    <input type="text" value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ingrese mensaje" />
                    <button
                        onClick={sendMessage}
                        type="submit">Enviar mensaje</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardSharpIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsSharpIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}
