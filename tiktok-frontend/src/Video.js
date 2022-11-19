import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url , channel , description , song , likes , shares , messages}) {
    const[playing , setPlaying] = useState(false)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    const videoRef = useRef(null);
    return (
        <div className='video'>
            <video className='video_player' onClick={handleVideoPress} loop ref={videoRef} src={url}></video>
           {/* VideoFooter */}
           <VideoFooter channel={channel} description={description}  song={song} />
            {/* VideoSideBar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
