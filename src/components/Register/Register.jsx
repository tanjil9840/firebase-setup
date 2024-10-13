import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

   const {registerUser} = useContext(AuthContext)
   
    const handleRegister=(e)=>{
        e.preventDefault()
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const email= e.target.email.value;
        const password=e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;
        registerUser(email,password)

       
        
         
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
                <input type="Confirm-password" placeholder="confirm password"  name='confirmPassword' className="input input-bordered" required />
                
            </div>
            
            <button type='submit' className='btn btn-primary' >Register</button>
            
            
            
            
            
            
       </form>

        </div>
    );
};

export default Register;