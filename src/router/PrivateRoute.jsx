import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../auth';

export const PrivateRoute = ({children}) => {

    const {state} = useContext(AuthContex);
    const {logged} = state;
    const location = useLocation();
    const {pathname, search} = location;

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to='/login'/>
  
}
