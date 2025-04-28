import React from 'react';
import{Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from "../pages/About";
import About2 from "../pages/About2";
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SearchList from '../pages/SearchList';
import ThankYou from '../pages/ThankYou';
import Terms from '../pages/Terms';
import Contact from "../pages/Contact";
import Payment from "../pages/Payment";
import Gallery from "../components/Image-gallery/MasonryImagesGallery";

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about2' element={<About2/>} />
        <Route path='/tour' element={<Tours/>} />
        <Route path='/tour/:id' element={<TourDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/tour/search' element={<SearchList/>} />
        <Route path='/tandc' element = { <Terms /> } />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/gallery' element={<Gallery />} />
    </Routes>
  )
};

export default Routers;