import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

  const VideoItem = props.videos.map((video)=> {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
  }); //this is where we mapped out each video array and pass it one by one to VideoListItem

  return (
    <ul>{VideoItem}</ul>
  ) //this is where we render the VideoItem that contains VideoListItem
}

export default VideoList;
