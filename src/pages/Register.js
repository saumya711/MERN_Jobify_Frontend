import { React, useState, useEffect } from 'react';
import { Logo, FormRow, Alert} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true
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
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        {/* name input */}
        <FormRow 
          type="name"
          value={values.name} 
          name='name'
          onChange={handleChange}
        />
        {/* email input */}
        <FormRow 
          type="email"
          value={values.email} 
          name='email'
          onChange={handleChange}
        />
        {/* password input */}
        <FormRow 
          type="password"
          value={values.password} 
          name='password'
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>Submit</button>
      </form>

    </Wrapper>
  )
  
}

export default Register
