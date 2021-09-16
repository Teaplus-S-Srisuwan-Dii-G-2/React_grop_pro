import React from "react";
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
function navbar({className}) {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        AnimeList
        </Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default navbar;