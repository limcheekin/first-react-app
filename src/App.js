import _ from "lodash";
import { Component } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyBwwPugM54Rs7G6ugyqqnWMLGepjH1WkHE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideos("reactjs");
  }

  searchVideos(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const searchVideos = _.debounce(term => this.searchVideos(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={searchVideos} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
      </div>
    );
  }
}

export default App;
