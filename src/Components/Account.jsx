import React from 'react'
import Navbar from './Navbar'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

const Account = () => {

   const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem('token');   // Clear JWT
    navigate('/home');                  // Go to Sign Page
  };
     
  return (
    <div>
        <h1>Accounts</h1>
       
         <button onClick={handleLogout} className='btn btn-danger' >Sign Out</button>
         <Navbar/>
    </div>
  )
}

export default Account