import React from 'react';
import './Paper.css';

function Paper({ children }: {children: React.ReactNode}) {return (
  <div className="paper">{children}</div>
); }

export default Paper;
