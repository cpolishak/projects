import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
    state = {lat: null, errorMessage: ''};
  
    // Gets called one time when our content first shows up on the screen.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // these below are where we change state. 
            // MUST ALWAYS USE setState WHEN CHANGING STATE PROPERTIES
            position => {this.setState({lat: position.coords.latitude})},
            err => {this.setState({errorMessage: err.message})}
        ) 
    }

    // Helper function
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept the location request" />;
    }

    render() { 
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));