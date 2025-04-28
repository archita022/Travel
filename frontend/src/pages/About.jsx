import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about.css';

// Images
import nishat from '../assets/images/nishat2.jpg';
import nishat2 from '../assets/images/nishat2.jpg';

import sohan from '../assets/images/sohan.jpg';
import sohan2 from '../assets/images/sohan2.jpg';

import archita from '../assets/images/archita.jpg';
import archita2 from '../assets/images/archita2.jpg';


import sourick from '../assets/images/sourick.jpg';
import sourick2 from '../assets/images/sourick.jpg';

import dona from '../assets/images/dona3.jpg';
import dona2 from '../assets/images/dona3.jpg';

import rupsa from '../assets/images/rupsa.jpg';
import rupsa2 from '../assets/images/rupsa2.jpg';


const profiles = [
  { name: 'Nishat Tasnim', img: [nishat,nishat2], role: 'Frontend Developer', about: 'A developer with expertise in MERN stack, Python, and C. I focus on building effective and innovative software solutions. Outside of work, I enjoy gaming, watching anime, and reading books.' },
  { name: 'Sohan Hossain', img: [sohan, sohan2], role: 'Frontend Developer', about: 'A developer specializing in MERN stack, Python, and C. I focus on creating dynamic and efficient applications. When I’m not coding, I enjoy gaming and exploring new trails.' },
  { name: 'Archita Saha', img: [archita, archita2], role: 'Front & Backend Developer', about: 'A developer proficient in MERN stack, Python, C and MySQL. I’m dedicated to crafting reliable and scalable software solutions. Aside from tech, I like dancing, gardening and watching movies' },
  { name: 'Dona Chandra', img: [dona, dona2], role: 'Frontend Developer', about: ' A developer with expertise in MERN stack, Python, and C. I’m committed to creating robust and efficient software solutions. Outside of work, I enjoy listening to music and staying active.' },
  { name: 'Sourick Pramanik', img: [sourick, sourick2], role: 'Frontend Developer', about: 'A developer skilled in MERN stack, Python and C. I’m passionate about building innovative software solutions. When I’m not coding, I enjoy discovering new places.' },
  { name: 'Rupsa Ghosh', img: [rupsa, rupsa2], role: 'Frontend Developer', about: 'A developer with expertise in MERN stack, Python, and C. I’m passionate about creating innovative and efficient solutions. Outside of work, I enjoy dancing and creating clay crafts. ' }
];
const ProfileCard = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (profile) => {
    navigate('/about2', { state: profile });
  };
  useEffect(()=>{
        window.scrollTo(0,0)
      })
  return (
    <div>
      <div className="row aboutrow">
        <h3 className='devheading'>Developers</h3>
        {profiles.map((profile, index) => (
          <div key={index} className="col-12 col-md-4 col-xl-4">

            <aside className="profile-card">
              <header>

                <a href="#profile">
                  <img src={profile.img[0]} className='profimage' alt={profile.name} />
                </a>

                <h1>{profile.name}</h1>
              </header>

              <div className="profile-bio">
                <p>{profile.role}</p>
              </div>

              <button className='readmore' onClick={() => handleReadMoreClick(profile)}>Read more</button>
            </aside>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
