import React from "react";
import Image from "react-bootstrap/Image";
// import { CloseButton } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css";
// import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import './userdata.css'
const Userdata = () => {
  return (
    <div className="account">
      <h1>User</h1>
      <hr />
      <Container >
        <div className="flex-container">
          <div className="user-item">

            <div className="user-profile">

              <img className="profile" src="https://artsofcarvercounty.org/wp-content/uploads/2015/01/SteveProfile-171x180.png" />
            </div>


            <h1>Tom Smith</h1>
          </div>
        </div>

      </Container>
      <h1>Favorite Anime</h1>
      <Container>

      </Container>
      <hr />
    </div>
  );
};

export default Userdata;
