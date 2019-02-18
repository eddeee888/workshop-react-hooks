import React, { Component } from 'react';
import AppRouter from 'src/AppRouter';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width={100}
            height={100}
          />
          React hooks workshop
          <AppRouter />
        </header>
      </div>
    );
  }
}

export default App;
