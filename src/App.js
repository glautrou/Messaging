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
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home';
import MessagesPage from './components/MessagesPage';
import About from './components/About';

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
            <Route exact path="/messages" component={MessagesPage}/>
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
