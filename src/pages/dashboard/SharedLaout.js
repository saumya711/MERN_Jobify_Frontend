import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout.js';

const SharedLaout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-jobs'>add job</Link>
        <Link to='all-jobs'>all job</Link>
      </nav>
      < Outlet />
    </Wrapper>
  )
}

export default SharedLaout
