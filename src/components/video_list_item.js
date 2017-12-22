import React from 'react';

//{video} is the same const video = props.video;

const VideoListItem = ({video, onVideoClick}) => {

    const thumbUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick ={() => onVideoClick(video) } className = "list-group-item"> 
            <div className ="video-item media">
                <div className ="media-left">
                    <img className = "media-object" src= {thumbUrl}/>
                </div>
                <div className ="media-body">
                    <div className ="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;