import React from 'react';
import './Row.css';

function Row({ children }: {children: React.ReactNode}) { return (
  <div className="row">{children}</div>
); }

export default Row;
