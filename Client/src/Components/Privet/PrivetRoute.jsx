import React, { useContext } from 'react';
import { userContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    const location = useLocation(); 
    const { user  , loading} = useContext(userContext); 
    if(loading){ 
        return <div className='h-screen flex justify-center items-center '><FadeLoader color='#36d7b7'></FadeLoader></div>
    }
    if (user) {
        return children ; 
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivetRoute;