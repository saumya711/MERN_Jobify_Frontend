import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo'>
        </img>
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
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  )
}

export default Landing

