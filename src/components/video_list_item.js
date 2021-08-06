const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="media">
                <img className="mr-3" src={imageUrl} alt={video.snippet.title} />
                <div className="media-body">
                    <h5 className="mt-0">{video.snippet.title}</h5>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;