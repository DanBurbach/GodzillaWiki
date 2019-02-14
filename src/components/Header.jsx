import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

  const headerStylesLeft = {
    listStyleType: 'none',
    overflow: 'hidden',
    backgroundColor: '#333',
    fontFamily: 'sans-serif',
    display: 'flex-start',
  };

  return (
    <div style={headerStylesLeft}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Link to="/godzilla">Godzilla</Link>
          <Link to="/mothera">Mothera</Link>
          <Link to="/rodan">Rodan</Link>
          <Link to="/kingg">King Ghidorah</Link>
          <Link to="/mechagodzilla">Mechagodzilla</Link>
          <Link to="/gigan">Gigan</Link>
          <Link to="/kingkong">King Kong</Link>
          <Link to="/hedorah">Hedorah</Link>
        </Navbar.Header>
      </Navbar>
    </div>
  );
}

export default Header;
