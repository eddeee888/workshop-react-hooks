import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ViewerContext from '../ViewerContext';
import './Nav.css';

function Nav() {
  const { viewer } = useContext(ViewerContext);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!viewer && (
        <>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </>
      )}
      {viewer && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </>
      )}
    </nav>
  );
}

export default Nav;
