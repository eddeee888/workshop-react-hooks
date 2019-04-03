import React from 'react';
import './Main.css';

function Main({ children }: {children: React.ReactNode}) {return (
  <main>
    <div className="main__content">{children}</div>
  </main>
); }

export default Main;
