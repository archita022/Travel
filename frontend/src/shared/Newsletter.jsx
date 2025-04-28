import React from 'react';
import './newsletter.css';
import {Container, Row, Col} from "reactstrap";
import maleTourist from './../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <div>
      <section className='newsletter'>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type='email' placeholder='Enter your email'/>
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>Subscribe now to get useful traveling information delivered right to you. From weather updates and destination tips to travel hacks and expert advice, we’ve got everything you need to plan your next adventure with ease. Don’t miss out—stay informed and travel smarter!</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
};

export default Newsletter;