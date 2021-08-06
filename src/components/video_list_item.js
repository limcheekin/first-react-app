const VideoListItem = ({ video }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="media">
                <img className="mr-3" src={imageUrl} alt={video.snippet.title} />
                <div className="media-body">
                    <h5 className="mt-0">{video.snippet.title}</h5>
                    {video.snippet.description}
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;