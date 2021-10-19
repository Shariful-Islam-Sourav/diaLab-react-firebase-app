import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../context/useAuth';
import './Register.css'

const Register = () => {
    const {signInUsingGoogle} = UseAuth();
   
    return (
        <Container className="py-5 login-container">
      <Row xs={1} md={2} className="g-4 d-flex align-items-center justify-content-center h-100">
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
          <form>
            <div className="form-outline mb-2">
              <input type="email" className="form-control form-control-lg" required/>   
              <label className="form-label">Email address</label>
            </div>

            <div className="form-outline mb-2">
              <input type="password" className="form-control form-control-lg" required/>
              <label className="form-label">Password</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
              <p className="fw-bold mx-3 my-2 text-muted">OR</p>
          </form>
          <Button onClick={signInUsingGoogle} className="btn btn-primary btn-lg btn-block mb-3">
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