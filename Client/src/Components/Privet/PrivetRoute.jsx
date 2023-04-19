import React, { useContext } from 'react';
import { userContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const location = useLocation(); 
    const { user  , loading} = useContext(userContext); 
    if(loading){ 
        return <h1>Loading..</h1>
    }
    if (user) {
        return children ; 
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivetRoute;