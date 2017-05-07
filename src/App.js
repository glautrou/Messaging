import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
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
            <a className="navbar-brand" href="#">Messaging</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="page" className="container">
        <div className="page-header">
          <h1>Main page</h1>
        </div>
        <p>Content of the main page.</p>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">Copyright</p>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
