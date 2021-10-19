import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Service.css'
import { Link } from "react-router-dom";

const Service = ({ services }) => {
  const { id, name, description, img } = services;
  return (
    <Col>
      <Card className="border-0 shadow rounded-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0,68)}...</Card.Text>
          <Link to={`/service/${id}`}>
          <Button className="d-flex align-items-center shadow-sm rounded-pill bg-light-blue border-0 text-dark btn-hover">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
              alt="icon"
            />
            See Details
          </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
