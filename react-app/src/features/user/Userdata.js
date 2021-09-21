import React from 'react';
import { Form } from 'react-bootstrap';
// import { CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css';
// import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
const Userdata = () => {

  return (

    <div className='account'>
      <h1>User</h1>
      <hr />
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Mr.Ant    Zebar" />
  </Form.Group>
  <>
  <Form.Label htmlFor="exampleColorInput">Icon Color</Form.Label>
  <Form.Control
    type="color"
    id="exampleColorInput"
    defaultValue="#00000"
    title="Choose your color"
  />
</>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label >Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="One pice , Naruto , Kiminonawa , Doremon" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      <hr />
    </div>

  )
}

export default Userdata;