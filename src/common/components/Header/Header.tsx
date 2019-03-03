import React from 'react';
import logo from 'src/logo.svg';
import './Header.css';

const Header: React.FunctionComponent = () => (
  <header>
    <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
    <div>React hooks workshop</div>
  </header>
);

export default Header;