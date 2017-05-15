import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  IndexRoute } from 'react-router-dom';

import './App.css';

// Layouts
import MainLayout from './MainLayout';

// Pages
import Home from './Home';
import MessagesPage from './MessagesPage';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/messages" component={MessagesPage}/>
          <Route path="/about" component={About}/>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
