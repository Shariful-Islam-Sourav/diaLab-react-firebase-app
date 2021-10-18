import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel variant="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.andersgroup.org/wp-content/uploads/2018/11/banner-sp-specialty-lab.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="fs-2 fw-bold">Pathology Research Lab</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dentalbilling.com/wp-content/uploads/2021/06/Keep-your-full-schedule-for-years-to-come.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="fs-2 fw-bold">Affordable Pricing</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.facstl.com/wp-content/uploads/2019/07/dr-holding-skeleton-foot.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="fs-2 fw-bold">Professional Pathologists</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
