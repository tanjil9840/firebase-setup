import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext= createContext(null)



const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const registerUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password )
        

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
        loginUser,
        user, 
        setUser,
        
    }
  
   
    console.log(children)
    return (
        <div>
       <AuthContext.Provider value={authInfo} >  {children} </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider; 