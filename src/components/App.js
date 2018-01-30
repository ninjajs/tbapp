import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../css/App.css';
import Board from './Board';
import { view } from 'react-easy-state'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default view(App);
