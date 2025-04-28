import React from 'react';
import "./footer.css";
import {Container, Row, Col , ListGroup , ListGroupItem } from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo1.png";

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/tour',
    display:'Tours'
  },{
    path:'/about',
    display:'About'
  }
]
const quick__links2=[
  {
    path:'/tandc',
    display:'T&C'
  },
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/contact',
    display:'Customer service'
  }
]
const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col lg='3'>
              <div className="logo">
              <img src={logo} alt="" />
              <p>Embark on unforgettable adventures and explore the globe with ease—your journey begins here. </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
              </div>
            </Col>
            <Col lg='3'>
             <h5 className='footer__link-title'>Discover</h5>
             <ListGroup className='footer__quick-links'>
              {quick__links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
              ))}
             </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
             <ListGroup className='footer__quick-links'>
              {quick__links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
              ))}
             </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
             <ListGroup className='footer__quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-map-pin-line"></i></span>
                      Address:
                    </h6>
                    <p className='mb-0'>Murshidabad, WestBengal</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-mail-line"></i></span>
                      Email:
                    </h6>
                    <p className='mb-0'>ardnss@globetrotter.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-phone-fill"></i></span>
                      Phone no:
                    </h6>
                    <p className='mb-0'>+0123456789</p>
                  </ListGroupItem>
             </ListGroup>
            </Col>
            <Col lg='12' className='text-center pt-5'>
              <p className='copyright'>Copyright {year}, design and develop by ARDNSS. All rights reserved. </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
};

export default Footer;