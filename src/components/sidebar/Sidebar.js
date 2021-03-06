import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Channels } from './channels/Channels';
import { selectUser } from '../../features/userSlice';
import db, { auth } from '../../firebase';


export const Sidebar = () => {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([])


    useEffect(()=>{
        db.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id:doc.id,
                channel:doc.data(),
            })))
        ))
    },[]);

const addChannel =()=>{
    const channelName = prompt('Agregue nombre del canal');
    if(channelName){
        db.collection("channels").add({
            channelName
        });
    }
}


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Servidor servido</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>canales bellos</h4>
                    </div>
                    <AddIcon onClick={addChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({id, channel}) => (
                        <Channels key={id} id={id} channelName={channel.channelName} />
                    ))}
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                className="sidebar__voiceIcon"
                fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voz conectada</h3>
                    <p>en línea</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <PhoneInTalkOutlinedIcon />
                </div>
            </div>


                <div className="sidebar__profile">
                    < Avatar className="sidebar__profileAvatar" onClick={()=> auth.signOut()} src={user.photoURL} />
                    <div className="sidebar__profileInfo">
                        <h3>{user.displayName}</h3>
                        <p>#{user.uid.substring(0,5)}</p>
                        </div>
                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon/>
                        < SettingsIcon/>
                    </div>

                </div>
        </div>
    )
}
