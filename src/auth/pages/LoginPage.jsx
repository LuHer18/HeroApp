import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContex } from '../context/AuthContex';

export const LoginPage = () => {
  const navigate = useNavigate();
  const {login, state} = useContext(AuthContex)
  const {logged} = state;

  const onLogin = ()=> {
    login('Luis Herrera');

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, {
      replace: true,
    })
  }
  
  return (
    <div className='container'>
        <h1>Login</h1>
        <hr />

        <button 
          onClick={onLogin}
          className='btn btn-primary'
        >
          Login
        </button>

    </div>
  )
}
