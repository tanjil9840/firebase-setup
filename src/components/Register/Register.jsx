import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError]=useState("")
    const [emailError, setEmailError]=useState(" ")

   const {registerUser,setUser} = useContext(AuthContext)
   
    const handleRegister=(e)=>{
        e.preventDefault()
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email= e.target.email.value;
        const password=e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;
        registerUser(email,password)
        .then(result=>{
            setUser(result.user)
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error.message)
        })

        if(!/@gmail\.com$/.email){
            setEmailError('email no founded')
            return
        }

        setEmailError(' ')

        if (password.length<6){
            setError('password must be atleast 6 carractor')
            return
        }


        if(password !==confirmPassword){
            setError("passwords didn't match")
            return
        }

        if(!/(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)){
            setError("please charcator number and spring")
            return
        }


        setError(' ')
        

       
        
         
    }
    return (
        <div className='w-{40%} mx-auto border-2  border-blue-500  p-6' >
         <form onSubmit={handleRegister} >  
            <div className='' >
                <p>name </p>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                
            </div>

            <div>
                <p>Photo </p>
                <input type="photo" placeholder="Photo" name='photo' className="input input-bordered" required />
                
            </div>
            <div>
                <p> email </p>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                
            </div>
            <div>
                <p>password </p>
                <input type="password" placeholder="password" className="input input-bordered" required name='password' />
                
            </div>
            <div>
                <p>confirm password </p>
                <input type="password" placeholder="confirm password"  name='confirmPassword' className="input input-bordered" required />
                
            </div>
            
            <button type='submit' className='btn btn-primary' >Register</button> <br />
            
            {
                error && <small className='text-red-700' > {error} </small>
        
            }
            {
                emailError&& <small> {emailError} </small>
            }
            
            
            
            
       </form>

        </div>
    );
};

export default Register;