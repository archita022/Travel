import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/thank-you.css";

const ThankYou = () => {
  return (
    <div>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className='mb-3 fw-semibold '>Thank You</h1>
                        <h4 className='mb-4 '>Your booking has been confirmed!</h4>
                        <Button className='primary__btn w-25' href='/home'>Back to Home</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
};

export default ThankYou;