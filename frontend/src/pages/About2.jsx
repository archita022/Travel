import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/about2.css';
function About2() {
  const location = useLocation();
  const { state } = location;
  const profile = state || { name: 'Guest', img: '', role: '', about:'' };
  return (
    <div className="background">
      <div className="overlay" >
        <img src={profile.img[1]} className='profileimage' alt=" "/>
        {/* <h1>{profile.name}</h1>
        <p>{profile.role}</p> */}
      </div>
      <div className="info">
        <h2 style={{fontSize:'40px'}}>{profile.name}</h2>
        <p style={{color:'red', fontSize:'17px', fontStyle:'italic'}}> {profile.role}</p>
        <p style={{fontSize:'18px'}}>{profile.about}</p>
      </div>
    </div>
  );
}
export default About2;