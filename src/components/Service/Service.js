import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ services }) => {
  const { id, name, cost, img } = services;
  return (
    <Col>
      <Card className="border-0 shadow rounded-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${cost}</Card.Text>
          <Button className="d-flex align-items-center shadow-sm rounded-pill bg-light-blue border-0 text-dark btn-hover">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
              alt="icon"
            />
            See Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
