import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = { 
        // use empty array with our state in this case instead of null because then we can call the .map method to iterate through the pictures. We are going to be wanting images in an array, so this makes better sense to do it like this.
        images: []
     };

    // use the async - await to make the axios call but without doing it too soon. And the arrow function is used to avoid the "this.setState is not a function" error that would be associated with a search if we didn't use it.
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }, 
        });

        this.setState({ images: response.data.results });
    }

    render() { 
        return ( 
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>   
         );
    }
}
 
export default App;

