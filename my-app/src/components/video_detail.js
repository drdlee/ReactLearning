import React from 'react';

const VideoDetail = (props) => {
  if(!props.selVideo){
    return <div>Loading...</div>
  }

  return (
    <div>
      {props.selVideo.snippet.title}
    </div>
  )
}

export default VideoDetail;
