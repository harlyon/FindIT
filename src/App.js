import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from './Components/Route';

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
            <BaseRoute />
        </Router>
      </div>
    );
  }
}

export default App;
