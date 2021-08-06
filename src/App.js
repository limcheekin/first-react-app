import { Component } from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyBwwPugM54Rs7G6ugyqqnWMLGepjH1WkHE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    
    YTSearch({ key: API_KEY, term: 'reactjs' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

export default App;
