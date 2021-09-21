import React from "react";
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import  Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function navbar({className}) {
    return (
      <Navbar bg="dark" variant="dark">
    <Container>
    
   
    <Nav className="me-auto"> 
    <Link to="/"><Nav.Link href="/">Anime List</Nav.Link></Link>
    <Link to="/topanime"><Nav.Link href="/topanime">Anime Detail</Nav.Link></Link>
      {/* <Link to="/"><Nav.Link href="/">Anime Detail</Nav.Link></Link> */}
      <Link to="/account"><Nav.Link href="/account">Login</Nav.Link></Link>
      <Link to="/user"><Nav.Link href="/user">Profile</Nav.Link></Link>

    </Nav>
    </Container>
  </Navbar>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default navbar;