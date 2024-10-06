import React, { useState } from 'react';
import InputField from '../InputField/InputField'; // Assuming you have an InputField component
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');  
    const [error, setError] = useState({}); 


    const validate = () => {
        const validationErrors = {
          email: !email ? 'Email is required' : undefined,
          password: !password ? 'Password is required' : undefined,
        };
        
        console.log('Validation Errors:', validationErrors); // Log validation errors
        return validationErrors;
      };


      const handleSubmit = (e) =>{
        e.preventDefault();
        const validationErrors = validate()
        console.log('Current state:', { email, password });
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', { email, password });
          } else {
            setError(validationErrors); // Set errors if validation fails
          }

        


      }       
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex items-center justify-center rounded-lg shadow-2xl p-3 w-[800px]'>
        <div className='m-10 flex flex-col items-center justify-around w-[300px]'>
          <div>
            <h2 className='text-center text-2xl font-bold mb-4'>Welcome Back to Law Buddy!</h2>
          <p className='text-center mb-6'>Your trusted partner in navigating legal challenges. Sign in to access expert advice and personalized support!</p>

            </div>
            <div>
            <img src={logo} alt="logo" className='w-[160px] h-auto mb-3' />

            </div>
        </div>
        <div className='m-4 p-4 rounded-lg w-[20rem]'>
                   <form onSubmit={handleSubmit}>
            <InputField label="Email" type="text" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} error={error.email} />
            <InputField label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} error={error.password} />
            
            <div className='text-center'>
              <button type="submit" className='bg-white w-full text-black py-2 rounded-lg'>
                Sign In 
              </button>
            </div>

            <div className='text-center mt-4'>
              <Link to="/forgot-password" className='text-blue-500'>Forgot Password?</Link>
            </div>

            <div className='text-center mt-4'>
              <p>New here? <Link to="/signup" className='text-blue-500'>Create an account</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
