import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/signup">Sign up</NavLink>
    <NavLink to="/login">Log in</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </nav>
);

export default Nav;
