import React, { useEffect, useState } from 'react';
import InputField from '../InputField/InputField'; // Assuming you have an InputField component
import logo from "../../assets/logo.png"; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import DotsLoader from '../Loader/DotLoader';

const SignIn = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');  
  const [error, setError] = useState({}); 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate a loading period, e.g., during navigation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  const validate = () => {
    const validationErrors = {
      email: !email ? 'Email is required' : undefined,
      password: !password ? 'Password is required' : undefined,
    };
    console.log('Validation Errors:', validationErrors);
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log('Current state:', { email, password });
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { email, password });
    } else {
      setError(validationErrors);
    }
  };

  return (
    <>
    {loading ? (
        <DotsLoader />
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 sm:p-6   ">
        <div className="flex flex-col md:flex-row items-center justify-center rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-[300px] mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome Back to Law Buddy!</h2>
            <p className="text-white text-sm sm:text-base mb-6">
              Your trusted partner in navigating legal challenges. Sign in to access expert advice and personalized support!
            </p>
            <img src={logo} alt="logo" className="w-[120px] sm:w-[160px] h-auto mb-3" />
          </div>
          <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error.email}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error.password}
              />
              <div className="text-center mt-4">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full rounded-lg transition-all duration-300">
                  Sign In
                </button>
              </div>
  
              <div className="text-center mt-4">
                <Link to="/forgot-password" className="text-blue-500">Forgot Password?</Link>
              </div>
  
              <div className="text-center mt-4">
                <p>New here? <Link to="/signup" className="text-blue-500 font-bold">Create an account</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </>
  
  );
};

export default SignIn;
