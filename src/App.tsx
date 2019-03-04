import React, { Component } from 'react';
import AppRouter from 'src/AppRouter';
import Header from 'src/common/components/Header';
import './App.css';
import { UsersProvider } from './common/components/UsersContext/UsersContext';
import { ViewerProvider } from './common/components/ViewerContext/ViewerContext';

class App extends Component {
  render() {
    return (
      <>
        <UsersProvider>
          <ViewerProvider>
            <Header />
            <AppRouter />
          </ViewerProvider>
        </UsersProvider>
      </>
    );
  }
}

export default App;
