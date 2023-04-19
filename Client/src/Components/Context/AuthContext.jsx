import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.init';

export const userContext = createContext(null);

const AuthContext = ({ children }) => {
    const auth = getAuth(app); 
    const [loading, setLoading] = useState(true); 
    const [user , setUser] = useState(null) ; 

    const register  = (email , password )=>{ 
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth , email , password)
    }
    let updateName = (name)=> {
        // setLoading(false) 
        updateProfile(auth.currentUser , { 
            displayName: name
        })
    }
    let login = (email , password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logout = ()=> { 
        signOut(auth)
        .then(()=>{}).catch(err => console.log(err))
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => { 
            setUser(currentUser); 
            setLoading(false); 
        })
        return () => unsubscribe()
    },[])

    const contextValue = {register , user , loading  , updateName , login , logout};
    
    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
