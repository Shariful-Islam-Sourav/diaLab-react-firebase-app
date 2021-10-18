import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-light">
      <Container className="text-center">
        <h2>Our Pathology Laboratory</h2>
        <p>
          PathologyLab has proved its quality services in field of Laboratory
          medicine. we always <br /> focusing on quality testing, maximum
          customer benefits & committed to provide end result.
        </p>
        <Row>
          <Col>
            <Stack gap={3}>
              <div>First item</div>
              <div>Second item</div>
            </Stack>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
