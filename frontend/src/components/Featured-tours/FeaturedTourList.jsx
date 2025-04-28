import React from 'react';
import TourCard from '../../shared/TourCard';
import{Col} from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import {Base_URL} from "../../utils/config";

const FeaturedTourList = () => {
  const{data: featuredTours, loading, error} = useFetch(`${Base_URL}/tours/search/getFeaturedTours`); 
  return (
    <div>
      {
        loading && <h4>Loading..........</h4>
      }
      {
        error && <h4>{error}</h4>
      }
        {!loading && !error && featuredTours?.map(tour=>(
                <Col lg='3' md='6' sm='6' className='mb-4 d-inline-block ' key={tour._id}>
                    <TourCard tour={tour}/>
                </Col>
        ))}
    </div>
  )
};

export default FeaturedTourList;