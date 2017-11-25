import React from 'react';
import Nav from './Nav';
import logo from './logo.png';
import './Header.css';

const Header = () => (
  <div className="Header">
    <div className="container">
      <Nav />
      <img className="Logo" src={logo} alt="Slope logo" />
    </div>
  </div>
);

export default Header;
