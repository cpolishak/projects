import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    // Allows you to type in the input after you have set initial state for the input
    onInputChange = (event) => {
        this.setState ({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        // prevent default makes sure to stop the default behavior from happening when user hits enter/submits their search (it will refresh the page and form). this is done for now so we can test things.
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() { 
        return ( 
            <div className="search-bar ui secondary inverted segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;

