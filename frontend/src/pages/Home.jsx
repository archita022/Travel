import React, {useEffect} from 'react';
import "../styles/home.css";
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  useEffect(()=>{
      window.scrollTo(0,0)
    })
  return (
    <div>
      { /* ========== hero section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travelling opens the door to creating {""}
                  <span className='highlight'>memories</span>
                </h1>
                <p>Travel isn't just a journey—it’s a story waiting to be written. 🌍✨
                Before you chase sunsets and collect memories, let us guide you with tips and treasures to make every step magical. From hidden gems to handy hacks, know a little more so you can wander a lot freer. The world is calling—let’s make it unforgettable! 🧳💫</p>
              </div>
            </Col>
            <Col lg='2'>
             <div className="hero__img-box">
              <img src={heroImg} alt=""/>
             </div>
            </Col>
            <Col lg='2'>
             <div className="hero__img-box hero__video-box mt-4">
              <video src={heroVideo} alt="" controls/>
             </div>
            </Col>
            <Col lg='2'>
             <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=""/>
             </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      { /* ========== hero section end ========== */}
      <section>
        <Container>
          <Row className='d-flex'>
            <Col lg='3'><br/>
              <h5 className="services__subtitle">What we serve</h5><br/>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <Col>
            <ServiceList />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==========featured tour section start ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ==========featured tour section end ==========*/}
      {/* ========== experience section start ==========*/}  
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>Years of journeys, countless adventures, and stories from every corner of the world— we bring it all together to make your experience extraordinary. 🌟
                 Every step, every detail is crafted with care—because your adventure deserves nothing less than the best. Let our experience be the compass to your perfect getaway! 🧭✈️</p>
            </div>
            <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
            </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt=""/>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== experience section end ==========*/}  
      {/* ========== gallery section start ==========*/}  
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== gallery section end ==========*/} 
      {/* ========== testimonial section start ==========*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
            <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== testimonial section end ==========*/} 
      <Newsletter/>
    </div>
  )
};

export default Home;