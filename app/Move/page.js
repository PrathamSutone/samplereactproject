import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-64 h-4 bg-[#90A3BF] rounded-full">
        <div className="absolute top-0 left-0 h-4 bg-[#3563E9] rounded-full" style={{ width: '50%' }}></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3563E9] border-4 border-white rounded-full"></div>
      </div>
    </div>
  );
}