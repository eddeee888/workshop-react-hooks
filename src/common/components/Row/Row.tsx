import React from 'react';
import './Row.css';

const Row: React.FunctionComponent = ({ children }) => (
  <div className="row">{children}</div>
);

export default Row;
