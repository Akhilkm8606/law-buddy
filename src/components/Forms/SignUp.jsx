import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import InputField from "../InputField/InputField";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');  
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState({}); 
  const navigate = useNavigate();

  const validate = () => {
    const validationErrors = {
      email: !email ? 'Email is required' : undefined,
      password: !password ? 'Password is required' : (password.length < 6 ? 'Password must be at least 6 characters long' : undefined),
      cpassword: (password && cpassword !== password) ? 'Passwords do not match' : undefined,
    };
    
    console.log('Validation Errors:', validationErrors);
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validate();
    console.log('Current state:', { email, password, cpassword });

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { email, password });
      navigate("/"); // Navigate to the homepage
    } else {
      setError(validationErrors);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex items-center justify-center rounded-lg shadow-2xl p-3 w-[800px]'>
        <div className='m-10 flex flex-col items-center justify-around w-[300px]'>
          <h2 className='text-center text-2xl font-bold mb-4'>Welcome to Law Buddy!</h2>
          <p className='text-center mb-6'>Your trusted partner in navigating legal challenges. Sign up today for expert advice at your fingertips!</p>
          <img src={logo} alt="logo" className='w-[160px] h-auto mb-3' />
        </div>
        <div className='m-4 p-4 rounded-lg w-[20rem]'>
          <form onSubmit={handleSubmit}>
            <InputField 
              label="Email" 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              error={error.email} 
              helperText={error.email}
              autoComplete="email"
            />
            <InputField 
              label="Password" 
              type="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              error={error.password} 
              helperText={error.password}
              autoComplete="new-password"
            />
            <InputField 
              label="Confirm Password" 
              type="password" 
              name="confirm-password" 
              value={cpassword} 
              onChange={(e) => setCpassword(e.target.value)} 
              error={error.cpassword} 
              helperText={error.cpassword}
              autoComplete="new-password"
            />
            <div className='text-center'>
              <button type="submit"  className='bg-white w-full text-black py-2 rounded-lg'>Sign Up</button>
            </div>
          </form>
          {/* Test Navigation Button */}
          
          <p className='text-center mt-4 text-gray-500'>By signing up, you agree to our <a href="/terms" className='text-amber-400'>Terms of Service</a> and <a href="/privacy" className='text-cyan-700'>Privacy Policy</a>.</p>
          <div className='text-center mt-4'>
            <p>Already have an account? <a href="/signin" className='text-blue-500 font-bold'>Log in here</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
