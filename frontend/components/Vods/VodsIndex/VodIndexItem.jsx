import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './ChannelVideosIndex.module.css'

const VodIndexItem = ({vod, match, history, channel}) => {

    
    const navToVodShow = () => {
        
        let channelName = match.params.channelName || channel.channelName
        history.push(`/channels/${vod.channelId}/${channelName}/videos/${vod.id}`)    
    }
    
    return (
        <div className = {classes.vodItem}>
            {/* <div onClick = {navToVodShow} className = {classes.vodThumb}> */}
            <video onClick={navToVodShow} className={classes.videoPlayer}>
                    <source src={vod.videoUrl} />
            </video>
            {/* </div> */}
            <h4>{vod.title}</h4>
            <h6>{match.params.channelName}</h6>
            <h6>{vod.category}</h6>
        </div>


    )

}




export default withRouter(VodIndexItem)