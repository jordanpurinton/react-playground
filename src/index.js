// react intro
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyCWF65gNA1kfQwBKdvIrgijeFd0zLfNcKs';

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));