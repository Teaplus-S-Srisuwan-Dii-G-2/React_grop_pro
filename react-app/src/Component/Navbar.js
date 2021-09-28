import React from "react";
import PropTypes from "prop-types";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import  Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import '../features/userdata/userdata.css'
import '../features/card.css'
import firebaseConfig from '../config';
function navbar({className}) {
    return (
      
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <Container>
  <Navbar.Brand href="#home">RSV-Anime</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
  <Nav.Link > <Link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link></Nav.Link>
     <Nav.Link> <Link to="/topanime"><i class="fa fa-list-ul" aria-hidden="true"></i> Anime List</Link></Nav.Link>
  <Nav.Link>  <Link to="/search"><i class="fa fa-search" aria-hidden="true"></i> Anime Search</Link></Nav.Link>

      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
    </Nav>
    <Nav>
  
    
       {/* <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button> */}

     <Nav.Link ><Link to="/user"><i class="fa fa-user-circle-o " aria-hidden="true"></i> Profile</Link></Nav.Link>
    <Nav.Link > <Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link></Nav.Link>
       <Nav.Link > <i class="fa fa-sign-out" aria-hidden="true" onClick={() => firebaseConfig.auth().signOut()}></i>Sign Out</Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>









  //     <Navbar bg="dark" variant="dark" >
  //   <Container>
  //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    
   
  //   <Nav className="me-auto"> 
  //   <Link to="/"><Nav.Link href="/"><i class="fa fa-home" aria-hidden="true"></i> Anime</Nav.Link></Link>
  //   <Link to="/topanime"><Nav.Link href="/topanime"><i class="fa fa-list-ul" aria-hidden="true"></i> Anime List</Nav.Link></Link>
  //   <Link to="/search"><Nav.Link href="/topanime"><i class="fa fa-search" aria-hidden="true"></i> Anime Search</Nav.Link></Link>

  //     {/* <Link to="/"><Nav.Link href="/">Anime Detail</Nav.Link></Link> */}


  //     <Navbar.Text>
  //      <Link to="/account"><Nav.Link href="/account"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Nav.Link></Link>
  //     {/* <Link to="/user"><Nav.Link href="/user"><i class="fa fa-user-circle-o " aria-hidden="true"></i> Profile</Nav.Link></Link> */}

  //     </Navbar.Text>
      
  //   </Nav>
  //   </Container>
  // </Navbar>
    );
  }
  Navbar.propTypes = {
    className: PropTypes.string.isRequired
  };
  export default navbar;