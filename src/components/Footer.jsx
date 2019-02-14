import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Footer;
