// react intro
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyCWF65gNA1kfQwBKdvIrgijeFd0zLfNcKs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('meme');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm},
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                })
            })
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
