import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  const headerStyle = {
    listStyleType: 'none',
    overflow: 'hidden',
    backgroundColor: '#333',
    fontFamily: 'sans-serif',
    display: 'flex-start',
    textDecoration: 'none'
  };

  return (
    <div style={headerStyle}>
      <Navbar>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/godzilla" style={{ textDecoration: 'none' }}>Godzilla</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/mothra" style={{ textDecoration: 'none' }}>Mothra</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/rodan" style={{ textDecoration: 'none' }}>Rodan</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/kingg" style={{ textDecoration: 'none' }}>King Ghidorah</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/mechagodzilla" style={{ textDecoration: 'none' }}>Mechagodzilla</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/gigan" style={{ textDecoration: 'none' }}>Gigan</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/kingkong" style={{ textDecoration: 'none' }}>King Kong</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/hedorah" style={{ textDecoration: 'none' }}>Hedorah</Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
