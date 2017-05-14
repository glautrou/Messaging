import React, { Component } from 'react';
import logo from './logo.svg';
import './AppHeader.css';
import {
  Link,
  NavLink
} from 'react-router-dom';

class AppHeader extends Component {
  render() {
    return (
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
    );
  }
}

export default AppHeader;
