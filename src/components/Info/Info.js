import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Info = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="d-flex flex-row align-items-center justify-content-between rounded-3 border-0 shadow px-5 py-3">
            <div>
              <h3>Find Your Test</h3>
              <p>From our huge list of tests.</p>
            </div>
            <i className="fas fa-flask fs-1 dark-blue"></i>
          </Card>
        </Col>
        <Col>
          <Card className="d-flex flex-row align-items-center justify-content-between rounded-3 border-0 shadow px-5 py-3">
            <div>
              <h3>Home Service</h3>
              <p>We will come to your place.</p>
            </div>
            <i className="fas fa-home fs-1 dark-blue"></i>
          </Card>
        </Col>
        <Col>
          <Card className="d-flex flex-row align-items-center justify-content-between rounded-3 border-0 shadow px-5 py-3">
            <div>
              <h3>We are near you</h3>
              <p>Nearby Location.</p>
            </div>
            <i className="fas fa-map-marker-alt fs-1 dark-blue"></i>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
