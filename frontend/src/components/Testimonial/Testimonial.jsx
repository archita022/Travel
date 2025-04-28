import React from 'react';
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
const Testimonial = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                }
            }
        ]
    }
  return (
    <div>
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Traveling with Globetrotter was an amazing experience! Their attention to detail, seamless service, and expert guides turned my trip into an adventure of a lifetime. I’ll always choose them for my future travels!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=""/>
                    <div>
                        <h5 className='mb-0 mt-3'>Aarav Mehta </h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Globetrotter made my dream vacation a reality! From personalized recommendations to incredible guides, every part of the trip was perfectly planned. It was a good experience, and I’ll definitely be traveling with them again!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt=""/>
                    <div>
                        <h5 className='mb-0 mt-3'>Olivia Bennett</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>I’ve traveled with many companies, but Globetrotter truly stands out. The personalized care, great local experiences, and stress-free planning made my trip so special. They exceeded all my expectations!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt=""/>
                    <div>
                        <h5 className='mb-0 mt-3'>Liam Parker</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>From the moment I booked with Globetrotter, everything felt effortless. Their team handled all the details, and the experiences they curated were beyond amazing. I discovered places I never would have found on my own!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava04} className='w-25 h-25 rounded-2' alt=""/>
                    <div>
                        <h5 className='mb-0 mt-3'>Meera Joshi</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
};

export default Testimonial;