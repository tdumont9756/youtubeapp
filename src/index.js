import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//personal source code
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyAVXvLlP6D86Hv889GFWYQhkCi3Za712yQ";



class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null,
      searchTerm: ''
    };

    this.videoSearch('surfboards');
  }

  videoSearch(searchTerm){
    YTSearch({key: API_KEY, term: searchTerm}, (videos) =>{
      this.setState(
        {
          videos: videos,
          selectedVideo : videos[0]
        });
    });
  }

  render(){

    const videoSearch  = _.debounce((term)=>{this.videoSearch(term)}, 300);

    return(
      <div>
        <Searchbar onSearchTermChange={videoSearch} />
        <VideoDetail video= {this.state.selectedVideo} />
        <VideoList
         onVideoSelected = {(selectedVideo)=>{this.setState({selectedVideo:selectedVideo})}}
         videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
