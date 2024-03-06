import React, { useContext } from 'react'
import { AuthContex } from '../auth'
import { Navigate } from 'react-router-dom';
Navigate
export const PublicRoute = ({children}) => {
    const {state} = useContext(AuthContex);
    const {logged} = state;

    if(logged){
        return <Navigate to= '/marvel'/>
    }else {
        return children;
    }
  
}
