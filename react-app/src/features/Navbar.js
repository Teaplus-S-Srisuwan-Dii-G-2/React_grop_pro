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
    <Navbar.Brand href="#home">AnimeList</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/"><Nav.Link href="/">movie de</Nav.Link></Link>
      <Link to="/accoud"><Nav.Link href="/accoud">accoud</Nav.Link></Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
    </Container>
  </Navbar>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default navbar;