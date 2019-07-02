import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };
    
    // ***** General rule for callbacks in react. You should use the fat arrow function syntax for them to avoid any issues with setState of undefined type of errors. It makes sure the this is referring properly *****
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() { 
        return ( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            placeholder="Enter something in and see up to 10 images related to that query returned from Unsplash"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;