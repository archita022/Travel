import React, {useState, useContext} from 'react';
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Base_URL} from "../../utils/config";
import {AuthContext} from "../../context/AuthContext";

const Booking = ({tour, avgRating}) => {
    const {price, reviews, title}=tour;
    const navigate=useNavigate();
    const {user} = useContext(AuthContext)
    const [booking, setBooking] = useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName: title,
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })
    const handleChange =e => {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    }
    const serviceFee = 10;
    const totalAmount = Number(price)*Number(booking.guestSize)+Number(serviceFee)
    const handleClick = async e =>{
        e.preventDefault();
        console.log(booking);
        try {
            if(!user || user===undefined || user===null){
                return alert('Please Sign in')
            }
            const res = await fetch(`${Base_URL}/booking`,{
                method:'post',
                headers:{'content-type':'application/json'},
                credentials: 'include',
                body: JSON.stringify(booking)
            })
            const result = await res.json()
            if(!res.ok){
                return alert(result.message);
            }
            navigate("/payment");
        } catch (error) {
            alert(error.message); 
        }
    }
  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center">
                <i className="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}({reviews?.length})
            </span>
        </div>
        {/* ==========booking form =========== */}
        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking-info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Full name' id="fullName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='phone' id="phone" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id="bookAt" required onChange={handleChange}/>
                    <input type="number" placeholder='Guest' id="guestSize" required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>
        {/* ==========booking form end =========== */}
        {/* ==========booking bottom========== */}
        <div className="booking__bottom ">
            <ListGroup>
                <ListGroupItem className='d-flex justify-content-between border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price}<i className="ri-close-line"></i> {booking.guestSize > 1 ? "people" : "person"}</h5>
                    <span>${price * booking.guestSize}</span>
                </ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between border-0 px-0'>
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>
  )
};

export default Booking;
