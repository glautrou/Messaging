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
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <AppHeader />
          </header>

          <div id="page" className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>

          <footer className="footer">
            <AppFooter />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
