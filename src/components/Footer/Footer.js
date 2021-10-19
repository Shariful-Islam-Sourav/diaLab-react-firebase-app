import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-light">
      <Container className="py-2">
        <Row className="my-5 gap-4 text-center text-md-start">
          <Col>
            <img src="https://i.ibb.co/tKK0Cwt/Capture.png" alt="logo" 
              width="170px"/>
            <p className="ms-2">
            Over 135 Years of medical pathology test, All Focused On Our Patients. Leading-Edge Care from A Team Specialized in DiagnosIng & Treating patients.
            </p>
          </Col>
          <Col>
            <h4 className="mb-4">Our Location</h4>
            <p>
              <i className="fas fa-map-marker-alt dark-blue me-2"></i> 16/A Mark
              Street, CA 2200
            </p>
            <p>
              <i className="fas fa-phone dark-blue me-2"></i> +(200)345-0845
            </p>
            <p>
              <i className="fas fa-envelope dark-blue me-2"></i> support@dialab.com
            </p>
          </Col>
          <Col>
            <h4>Pay With</h4>
            <img
              src="https://i.ibb.co/FD7wfK4/paywith-mobile-version-W-1.png"
              alt="ssl"
              width="220px"
            />
          </Col>
        </Row>
        <div className="text-center">
        <small className="text-center">&copy; All rights reserved. Shariful Islam Sourav 2021</small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
