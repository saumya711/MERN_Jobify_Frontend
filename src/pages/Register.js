import { React, useState, useEffect } from 'react';
import { Logo, FormRow, Alert} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false
}

const Register = () => {
  
  const [ values, setValues] =  useState(initialState); 

  //global state and useNavigate
  const { isLoading, showAlert} = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember})
  }
  
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
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}

        {/* name input */}
        {!values.isMember && (
          <FormRow 
          type="name"
          value={values.name} 
          name='name'
          onChange={handleChange}
        />
        )}

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
        <p>
          { values.isMember ? 'Not a member yet?' : 'Already a Member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
          { values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>

    </Wrapper>
  )
  
}

export default Register
