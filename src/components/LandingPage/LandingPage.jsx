import React from 'react';
import logo from '../../assets/logo.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 mt-4 sm:mt-8">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-auto mb-6 sm:w-30 lg:w-40"
        />
        <div className="text-center max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Welcome to Law Buddy!
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-6">
            Your trusted legal companion, here to assist you with any legal
            queries. Let’s get started—simply ask away, and we’ll guide you``
            through the complexities of the law!
          </p>
          <Link to="/c">
            <button className="bg-chat-gradient text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg lg:text-xl">
              Chat Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
