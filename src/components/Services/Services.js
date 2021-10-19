import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const slicedServices = services.slice(0, 6);
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 dark-blue">Services</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {slicedServices.map((service) => (
          <Service services={service} key={service.id}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
