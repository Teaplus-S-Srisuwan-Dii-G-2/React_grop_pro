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
const Userdata = () => {
  return (
    <div className="account">
      <h1>User</h1>
      <hr />
      <Container >
        <Row className="justify-content-center">
        <Col xs={{ order: 'last' }}>First, but last</Col>
          <Col >
            <Image
              src="https://artsofcarvercounty.org/wp-content/uploads/2015/01/SteveProfile-171x180.png"
              rounded
            />
          </Col>
          <Col xs={{ order: 'first' }}>Third, but first</Col>
        </Row>
        <Row >
          <h2 >Tom Smith</h2>
        </Row>
      </Container>
      <h1>Favorite Anime</h1>
      <Container>

      </Container>
      <hr />
    </div>
  );
};

export default Userdata;
