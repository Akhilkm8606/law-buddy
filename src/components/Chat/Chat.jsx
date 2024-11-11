import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { BiSearch, BiUser } from 'react-icons/bi';
import DotsLoader from '../Loader/DotLoader';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period, e.g., during navigation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botMessage = { text: `Bot: You said "${inputValue}"`, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <>
        {loading ? (
        <DotsLoader />
      ) : (
        <div className="flex flex-col h-screen">
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-white ">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
        
        </a>
        <div className="w-10 h-10  bg-white rounded-full flex items-center justify-center">
          <BiUser className="text-black text-2xl " />
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4 overflow-y-auto mx-4 my-3 rounded-lg shadow-lg border border-gray-300 sm:mx-10 lg:mx-20">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`my-2 p-3 rounded-lg max-w-xs border ${
        msg.sender === 'user' ? 'self-end text-right border-blue-500' : 'text-left border-gray-300'
      }`}
    >
      {msg.text}
    </div>
  ))}
</div>


      {/* Input Area */}
      <div className="flex items-center mx-4 my-3 sm:mx-10 lg:mx-20">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your queries here..."
          className="flex-1 p-2 border bg-transparent border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-800 text-black p-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <BiSearch className="text-xl" />
        </button>
      </div>
    </div>
      )}
    </>
   
  );
}

export default Chat;
