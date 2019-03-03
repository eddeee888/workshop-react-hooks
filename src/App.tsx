import React, { Component } from 'react';
import AppRouter from 'src/AppRouter';
import Header from 'src/common/components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    );
  }
}

export default App;
