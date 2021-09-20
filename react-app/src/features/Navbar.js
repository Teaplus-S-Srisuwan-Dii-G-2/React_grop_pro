import React from "react";
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';


function navbar({className}) {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/"><Navbar.Brand href="#home">
        AnimeList
        </Navbar.Brand></Link>
      </Container>
    </Navbar>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default navbar;