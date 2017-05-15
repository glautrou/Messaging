import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <header>
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
                  <li><NavLink to="/messages" activeClassName="active">Messages</NavLink></li>
                  <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div id="page" className="container">
          {this.props.children}
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

export default MainLayout;
