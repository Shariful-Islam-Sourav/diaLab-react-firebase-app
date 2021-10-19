import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Pathologists = () => {
  return (
    <Container className="text-center my-5">
      <h2 className="mb-3">Our Expert Pathologists</h2>
      <p className="fw-light mb-5">
        Our pathologists team is experienced and working for your health.
      </p>
      <Row className="py-4 gap-4">
        <Col>
          <img
            className="rounded-circle mb-3"
            src="https://i.ibb.co/86FWVHX/team-1.jpg"
            alt="pathologist"
          />
          <h4>Alina James</h4>
          <p className="dark-blue">HEAD - QUALITY ASSURANCE</p>
        </Col>
        <Col>
          <img
            className="rounded-circle mb-3"
            src="https://i.ibb.co/SrX4z9v/team-2.jpg"
            alt="pathologist"
          />
          <h4>Golam Murshed</h4>
          <p className="dark-blue">HEAD Clinical Pathology</p>
        </Col>
        <Col>
          <img
            className="rounded-circle mb-3"
            src="https://i.ibb.co/K5qjjrr/team-3.jpg"
            alt="pathologist"
          />
          <h4>Marry Jane</h4>
          <p className="dark-blue">Chemical Pathologist</p>
        </Col>
        <Col>
          <img
            className="rounded-circle mb-3"
            src="https://i.ibb.co/vxqTnqJ/team-4.jpg"
            alt="pathologist"
          />
          <h4>Amelia Moore</h4>
          <p className="dark-blue">Microbiologist</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Pathologists;
