import React from 'react'
import { ChatHeader , Message } from '../../components';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import GifIcon from '@material-ui/icons/Gif';
import './Chat.css';

export const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
            <Message />
            <Message />
            <Message />
            </div>

            <div className="chat__input">
            <AddCircleRoundedIcon />
            <form>
            <input type="text" placeholder="Ingrese mensaje" />
            <button type="submit">Enviar mensaje</button>
            </form>

            <div className="chat__inputIcons">
            <CardGiftcardSharpIcon fontSize="large"  />
            <GifIcon  fontSize="large" />
            <EmojiEmotionsSharpIcon  fontSize="large" />
            </div>
            </div>
        </div>
    )
}
