import React from 'react';
import { Form } from 'react-bootstrap';
// import { CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css';


const Account = () => {
  
    return (

    <div className='account'>
      <h1>Account</h1>
      <hr/>
      <Form>
        <Form.Group className="user-id mb-3" controlId="formBasicEmail">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="id" placeholder="ID" />
        </Form.Group>
        <Form.Group className="user-name mb-3" controlId="formBasicPassword">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>
      </Form>
      <hr/>
    </div>
  
)}

export default Account;