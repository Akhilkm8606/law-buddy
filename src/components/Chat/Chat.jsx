import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { BiSearch, BiUser } from 'react-icons/bi';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
      <div className='flex flex-col h-screen'>
        {/* Header */}
        <header className='flex justify-between items-center p-4 text-white my-5'>
          <div>
            <img src={logo} alt='logo' className='w-[50px]' />
          </div>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <BiUser className='text-black text-2xl' />
          </div>
        </header>

        {/* Chat Area */}
        <div className='flex-1 flex flex-col p-4  shadow-2xl rounded-md overflow-y-auto mx-[5rem] my-3 border-white  chat-container'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-lg max-w-xs ${
                msg.sender === 'user' ? 'bg-transparent border-2 self-end' : 'bg-transparent border-2 '
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className='flex  mx-[5rem] my-3'>
          <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Type your queries here...'
            className='flex w-full  bg-transparent border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={handleSend}
            className='bg-blue-800 text-white rounded-r-lg p-5 px-10flex items-center'
          >
            <BiSearch className='text-xl' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
