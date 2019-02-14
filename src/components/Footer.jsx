import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Footer() {

  const footer = {

  };

  return (
    <div style={footer}>
      <Navbar bg="dark" variant="dark" sticky="bottom">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Footer;
