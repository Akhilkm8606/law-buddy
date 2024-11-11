import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import InputField from "../InputField/InputField";
import { useNavigate } from 'react-router-dom';
import DotsLoader from '../Loader/DotLoader';

function SignUp() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');  
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState({}); 
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading period, e.g., during navigation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    e.preventDefault();
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
    <>
        {loading ? (
        <DotsLoader />
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 sm:p-6`">
        <div className="flex flex-col md:flex-row items-center justify-center rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-[300px] mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to Law Buddy!</h2>
            <p className="text-white`` text-sm sm:text-base mb-6">
              Your trusted partner in navigating legal challenges. Sign up today for expert advice at your fingertips!
            </p>
            <img src={logo} alt="logo" className="w-[120px] sm:w-[160px] h-auto mb-3" />
          </div>
          <div className="w-full max-w-sm">
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
              <div className="text-center mt-4">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full rounded-lg transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-4 text-gray-500 text-xs sm:text-sm">
              By signing up, you agree to our <a href="/terms" className="text-amber-400">Terms of Service</a> and <a href="/privacy" className="text-cyan-700">Privacy Policy</a>.
            </p>
            <div className="text-center mt-4">
              <p className="text-sm sm:text-base">Already have an account? <a href="/signin" className="text-blue-500 font-bold">Log in here</a>.</p>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  
  );
}

export default SignUp;
