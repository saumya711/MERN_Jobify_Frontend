import React from 'react';
import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';

import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span> Tracking</span> App
          </h1>
          <p>
            I'm baby twee pinterest coloring book enamel pin. 
            IPhone put a bird on it readymade narwhal. Pop-up mlkshk vegan venmo, 
            yuccie food truck mustache 90's pok pok pabst. 
          </p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  )
}

export default Landing

