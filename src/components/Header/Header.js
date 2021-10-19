import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center fw-bold">
          <img
            src="https://img.icons8.com/color/50/000000/laboratory.png"
            alt="logo"
          />
          DiaLab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 green"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
          <div className="d-flex">
            <p>Signed as, </p>
            <p>Mark Otto</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;