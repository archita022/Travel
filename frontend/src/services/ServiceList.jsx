import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "react-bootstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: " Get accurate weather updates to plan your trips smartly."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Enjoy your journey with the assistance of professional tour guides."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your travel experience just the way you want it."
    }
]
const ServiceList = () => {
  return (
    <div className='d-flex gap-4'>
     {servicesData.map((item,index)=>(
        <Col lg='4' md='6' sm='12' className='mb-4 ' key={index}>
            <ServiceCard item={item}/>
        </Col>
      ))}   
    </div>
  )
};

export default ServiceList;