import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} 
from 'react-router-dom';
import Home from './HomeComponent.js';
import About from './AboutComponent';
import Contact from './ContactComponent';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <div className="App">
       <div className="container">
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
             <hr/>
              {/* can take these route paths below and move them to other areas within the html and it will display them wherever you put them */} 
            <Switch>
              <Route exact={true} path="/" component={Home} />  
              <Route path="/about/company" component={About} />
              <Route path="/about/jobs" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
       </div>
     </div>
     </Router>
     );
  }
}
 
export default App;
