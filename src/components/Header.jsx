import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
      <navbar className="navbar">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </navbar>
    </header>
  );
}

export default Header;
