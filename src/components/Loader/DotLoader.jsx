
import React from 'react';

const DotsLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-100"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
};

export default DotsLoader;
