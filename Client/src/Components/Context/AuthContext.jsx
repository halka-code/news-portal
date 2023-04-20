import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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
    const googleProvider = new GoogleAuthProvider() ;
    const handelGoogleLogin = () => { 
        setLoading(true) ;
        return  signInWithPopup(auth , googleProvider) ; 
    }
    const githubProvider = new GithubAuthProvider() ;
    const githubHandler = () => { 
        return signInWithPopup(auth , githubProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => { 
            setUser(currentUser); 
            setLoading(false); 
        })
        return () => unsubscribe()
    },[])

    const contextValue = {register , user , loading  , updateName , login , logout , handelGoogleLogin , githubHandler};
    
    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
