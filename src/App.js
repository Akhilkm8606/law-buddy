// src/App.js
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import SingIn from './components/Forms/SingIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Forms/SignUp';
import Chat from './components/Chat/Chat';

const App = () => {
    return (
       <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/C" element={<Chat />} />
        </Routes>
       </Router>
    );
};

export default App;
