import React from 'react';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import styled from 'styled-components';

function Account() {

  return (
    <>
      <div className=''>
        <h1>Account</h1>
        <hr></hr>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="id" placeholder="ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
        </Form>
        <hr></hr>
      </div>

      <div className=''>
        <CloseButton />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );

}

export default Account;