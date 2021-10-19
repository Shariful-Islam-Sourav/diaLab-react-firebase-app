import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const service = services.find(
    (service) => service.id === parseInt(serviceId)
  );
  return (
    <div>
      {service?.name === undefined ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container className="my-5 service-section">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <img className="img-fluid" src={service.img} alt="item" />
            </Col>
            <Col>
              <h2 className="mt-3 mb-4">{service.name}</h2>
              <h4>
                <i className="fas fa-dollar-sign dark-blue"></i> {service.cost}
              </h4>
              <h5>
                <i className="far fa-clock dark-blue"></i> {service.duration}
              </h5>
              <p>{service.description}</p>
              <p>Call for Booking :</p>
              <h5 className="d-inline text-white rounded-3 py-2 px-3 bg-primary"><i className="fas fa-headset"></i> +(200)345-0845</h5>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ServiceDetails;
