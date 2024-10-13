import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {

    const registerUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password )
        .then(result=>console.log(result.user))
        .catch(error=> console.error(error))

    }

    const loginUser=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const authInfo={
        registerUser,
        loginUser
    }
  
    const [user, setUser]=useState('nai user')
    console.log(children)
    return (
        <div>
       <AuthContext.Provider value={authInfo} >  {children} </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider; 