const VideoDetail = ({ video }) => {
    console.log(video);
    if (!video) { 
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    console.log("videoId = " + videoId);
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(url);
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={video.snippet.title} />
            </div> 
            <h2>{video.snippet.title}</h2>
            <div>{video.snippet.description}</div>
        </div>
    );
}

export default VideoDetail;