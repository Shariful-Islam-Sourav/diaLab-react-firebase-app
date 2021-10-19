import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useFirebase from "../../hook/useFirebase";
import "./Header.css";

const Header = () => {
  const {user, signOutUser} = useFirebase();
  return (
    <Navbar bg="light" expand="lg" className="sticky-top shadow-sm">
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
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Log In
            </Nav.Link>
          </Nav>
          
          <i className="fas fa-user me-2"></i>
            <small className="me-2">{user?.displayName}</small>
            {user.email && <Button onClick={signOutUser}>Logout</Button>}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
