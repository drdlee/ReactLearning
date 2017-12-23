import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD2eVWpbZ_vHlJNZ066OoumVA01fYnS0RU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: ''};
    this.onSearch('reactJS');
  }

  onSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={(term) => this.onSearch(term)} />
        <VideoDetail selVideo={this.state.selectedVideo} />
        <VideoList onVideoSelect={(selectVid) => this.setState({selectedVideo: selectVid})} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
