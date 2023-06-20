import React from 'react';
import { FormRow, Alert } from '../../components';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  const {user, showAlert, displayAlert, isLoading, updateUser} = useAppContext()
  const [name, setName] = useState(user?.name)
  const [emai, setEmail] = useState(user?.emai)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  return (
    <h1>
      Profile Page
    </h1>
  )
}

export default Profile
