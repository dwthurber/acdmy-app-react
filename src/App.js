import React, { Component } from 'react';
import logo from './images/acdmyA.png';
import './App.css';
import Nav from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
