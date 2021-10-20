import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../context/useAuth";
import "./Register.css";

const Register = () => {
  const { signInUsingGoogle, signInNewUser, error } = UseAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Handle inputs
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInNewUser(email, password, name);
  };
  return (
    <Container className="py-5 login-container">
      <Row
        xs={1}
        md={2}
        className="g-4 d-flex align-items-center justify-content-center h-100"
      >
        <Col>
          <img
            src="https://i.ibb.co/PM2ytrB/undraw-Access-account-re-8spm.png"
            className="img-fluid"
            alt="Phone-login"
            width="600px"
          />
        </Col>
        <Col>
          <h2 className="mb-3">Please Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-2">
              <input
                onBlur={handleName}
                type="text"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Your Name</label>
            </div>
            <div className="form-outline mb-2">
              <input
                onBlur={handleEmail}
                type="email"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Email address</label>
            </div>

            <div className="form-outline mb-2">
              <input
                onBlur={handlePassword}
                type="password"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Password</label>
            </div>
            <p className="text-danger">{error}</p>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Register
            </button>
            <p className="fw-bold mx-3 my-2 text-muted">OR</p>
          </form>
          <Button
            onClick={signInUsingGoogle}
            className="btn btn-primary btn-lg btn-block mb-3"
          >
            Continue with Google
          </Button>
          <Link to="/login">
            <p>Already registered? Login here</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
