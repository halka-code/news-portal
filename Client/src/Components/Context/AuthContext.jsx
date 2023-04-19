import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase/firebase.init';

export const userContext = createContext(null);

const AuthContext = ({ children }) => {
    const auth = getAuth(app); 
    const [loading, setLoading] = useState(true); 
    const [user , setUser] = useState(null) ; 

    const register  = (email , password)=>{ 
        return createUserWithEmailAndPassword(auth , email , password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => { 
            setUser(currentUser); 
            setLoading(false); 
        })
        return () => unsubscribe()
    },[])

    const contextValue = {register , user , loading };
    
    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
