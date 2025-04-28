import React, {useEffect, useRef, useState, useContext} from 'react';
import "../styles/tour-details.css";
import {Container, Row, Col, Form, ListGroup, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import {Base_URL} from "../utils/config";
import {AuthContext} from "../context/AuthContext";

const TourDetails = () => {
  const {id} =useParams();
  const reviewsMsgRef=useRef('');
  const[tourRating, setTourRating]=useState(null);
  const {user} = useContext(AuthContext);
  // Fetch data from database
  const {data:tour, loading, error} = useFetch(`${Base_URL}/tours/${id}`);
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;
  const{totalRating, avgRating} = calculateAvgRating(reviews);
  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  // Submit review to the server
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    try {
      if(!user || user === undefined || user === null){
        alert('Please sign in');
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      };
      const res = await fetch(`${Base_URL}/reviews/${id}`,{
        method:'post',
        headers:{'content-type':'application/json'},
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });
      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [tour]);
  return (
    <div>
      <section>
        <Container>
        {loading && <h4 className='text-center pt-5'>Loading.......</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
            <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
                <span className="tour__rating d-flex align-items-center gap-1">
                 <i className="ri-star-fill" style={{color :"orange"}}></i>
                 {avgRating === 0 ? null : avgRating}
                 {totalRating === 0 ? ("Not Rated") :
                 <span>({reviews?.length})</span>}
                </span>
                <span><i className="ri-map-pin-user-fill"></i>{address}</span>
              </div>
              <div className="tour__extra-details">
                <span><i className="ri-map-pin-2-line"></i>{city}</span>
                <span><i className="ri-money-dollar-circle-line"></i>${price} /per person</span>
                <span><i className="ri-map-pin-time-line"></i>{distance}k/m</span>
                <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
             </div>
             {/* ========== tour reviews section ========== */}
              <div className="tour__reviews mt-4">
                <h4>Reviews({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  {/* Rating section with radio buttons */}
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <label key={num} style={{
                        cursor: "pointer", color: tourRating >= num ? "orange" : "#aaa", fontSize: "1.5rem"}}>
                        <input type="radio" name="rating" value={num} onChange={() => setTourRating(num)}
                        checked={tourRating === num} style={{ display: "none" }}/> <i className="ri-star-s-fill"></i>
                      </label>
                    ))}
                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewsMsgRef} placeholder='share your thoughts' required/>
                    <Button className='btn-success' style={{borderRadius:"25px"}} type='submit'>Submit</Button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'>
                  {reviews?.map((review, index) => (
                    <div className="review__item" key={index}>
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>{review.username}</h5>
                            <p>{new Date(review.createdAt || Date.now()).toLocaleDateString("en-US", options)}</p>
                          </div>
                          <span className='d-flex align-items-center'>
                            {review.rating}<i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
             {/* ========== tour reviews section end ========== */}
            </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
          )}
        </Container>
      </section>
      <Newsletter/>
    </div>
  );
};
export default TourDetails;