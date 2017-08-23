// react intro
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCWF65gNA1kfQwBKdvIrgijeFd0zLfNcKs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, searchText: 'memes'},
            (videos) => {
                this.setState({videos}); // es6 translation => this.setState({videos: videos})
            });

    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
