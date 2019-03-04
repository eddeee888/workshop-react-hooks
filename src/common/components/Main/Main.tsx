import React from 'react';
import './Main.css';

const Main: React.FunctionComponent = ({ children }) => (
  <main>
    <div className="main__content">{children}</div>
  </main>
);

export default Main;
