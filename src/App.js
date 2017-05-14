import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Link,
  IndexLink,
  NavLink
} from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">Messaging</Link>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                  <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="page" className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>

          <footer className="footer">
            <div className="container">
              <p className="text-muted">Copyright</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
