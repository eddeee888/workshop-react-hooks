import React, { Component } from 'react';
import AppRouter from 'src/AppRouter';
import Header from 'src/common/components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AppRouter />
      </>
    );
  }
}

export default App;
