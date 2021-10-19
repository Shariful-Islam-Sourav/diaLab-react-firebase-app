import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const Appoinment = () => {
  return (
    <Container className="my-5">
        <h2 className="text-center mb-5">Book an Appoinment</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone No." />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Medical Issue (in short)</Form.Label>
          <Form.Control placeholder="Describe Shortly" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Meeting Date</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out if you want us to call you." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Appoinment;
