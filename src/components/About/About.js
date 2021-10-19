import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import './About.css'

const About = () => {
  return (
    <div className="bg-light my-5 py-5">
      <Container className="text-center">
        <h2 className="dark-blue">Our Pathology Laboratory</h2>
        <p className="w-50 mx-auto about-intro">
          PathologyLab has proved its quality services in field of Laboratory
          medicine. we always focusing on quality testing, maximum customer
          benefits & committed to provide end result.
        </p>
        <Row xs={1} md={2} lg={3} className="g-3 my-5">
          <Col>
            <Stack gap={3}>
              <div className="text-md-start">
                <h3>Home Visit</h3>
                <p className="fw-lighter">
                  Home & clinic visit for Blood collection disse porttitor diam
                  id maximus molesti Book Home Collection Online.
                </p>
              </div>
              <div className="text-md-start">
                <h3>Report Via SMS & E-Mail</h3>
                <p className="fw-lighter">
                  Report via SMS & E-MAIL to the patients & doctors gravida
                  varius orci, vitae blandit felis scelerisque nec.
                </p>
              </div>
            </Stack>
          </Col>
          <Col>
            <Stack gap={3}>
              <div className="text-md-start">
                <h3>24/7 Hours Service</h3>
                <p className="fw-lighter">
                  There are three 24-hour labs, open seven days a week and
                  holidays, available for patient convenience.
                </p>
              </div>
              <div className="text-md-start">
                <h3>Report in less than 24 hours</h3>
                <p className="fw-lighter">
                  We provide most of the test reports under 24 hours, some test
                  may take a little bit according to the process.
                </p>
              </div>
            </Stack>
          </Col>
          <Col className="border border-primary p-4 text-md-start">
            <h4 className="mb-3">Office Hours</h4>
            <div className="d-flex justify-content-between">
              <h6>Saturday:</h6>
              <h6>06:00 AM - 10:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Sunday:</h6>
              <h6>06:00 AM - 10:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Mondady:</h6>
              <h6>06:00 AM - 10:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Tuesday:</h6>
              <h6>06:00 AM - 10:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Wednesday:</h6>
              <h6>10:00 AM - 07:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Thursday:</h6>
              <h6>06:00 AM - 10:00 PM</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Friday:</h6>
              <h6>Closed</h6>
            </div>
            <small className="text-danger">
              *This is our office hours, but our hospital is open 24 Hours for
              patients.
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
