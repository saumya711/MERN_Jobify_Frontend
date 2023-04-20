import { React, useState, useEffect } from 'react';
import Logo from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  
  const [ values, setValues] =  useState(initialState); 

  //global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target);
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <Wrapper className="full-page">
      <form className='form'>

      </form>

    </Wrapper>
  )
  
}

export default Register
