import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import TabletMacRoundedIcon from '@material-ui/icons/TabletMacRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { selectChannelName } from '../../features/appSlice';
import { useSelector } from 'react-redux';


export const ChatHeader = () => {

    const channelName = useSelector(selectChannelName);

    return (
        <div className="chatheader">
            <div className="chatheader__left">
            <h3><span className="chatheader__hash">#</span>
            {channelName}
            </h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                < PeopleAltIcon />
        <div className="chatheader__search">
            <input placeholder="Buscar" />
            <SearchRoundedIcon />
        </div>
        <TabletMacRoundedIcon />
        <HelpRoundedIcon />
            </div>
        </div>
    )
}
