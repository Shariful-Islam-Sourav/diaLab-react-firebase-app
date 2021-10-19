import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Gallary = () => {
    return (
        <Container className="my-5">
            <h2>Our Patients with</h2>
            <h2 className="fw-bold dark-blue mb-5">Medicare Doctors</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-02-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-01-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-08-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-07-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-19-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-18-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-16-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-17-1200x800.jpg" alt="medicare"/>
                </Col>
                <Col>
                <img className="img-fluid" src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-15-1200x800.jpg" alt="medicare"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallary;