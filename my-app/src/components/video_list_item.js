import React from 'react';

const VideoListItem = (props) => {
  return <li className="video-list-item"
    onClick={() => props.onVideoSelect(props.video)}>
        {props.video.snippet.title} - <strong>{props.video.snippet.channelTitle}</strong>
    </li>  // the onClick function will pass the current selected video to video detail
}

export default VideoListItem;
