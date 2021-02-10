import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../../features/appSlice';
import './Channels.css'

export const Channels = ({id , channelName}) => {
    const dispatch = useDispatch(); // para disparar reducers
    
    return (
        <div className="channels" onClick={() => dispatch(
            setChannelInfo({
                channelId:id,
                channelName:channelName
        }))}>
            <h4><span className="channels_hash"> #</span>{channelName}</h4>
        </div>
    )
}
