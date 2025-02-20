"use client";
import React, { useState } from 'react';
import PickUp from './PickUp/page';
import DropOff from './DropOff/page';
import NavBar from './NavBar/page';
import Ads1 from './ads/Ad1';
import Ads2 from './ads/Ad2';
import Swap from './Swap.svg';
import CarsList from './CarMatrix/page';
import Footer from './Footer/Footer';
import SideBar from './SideBar/sidebar';

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      <NavBar onToggleSidebar={toggleSidebar} />
      <div className="flex">
        {/* Sidebar Section */}
        {isSidebarOpen && (
          <div className="w-1/4 min-h-screen bg-white p-4">
            <SideBar />
          </div>
        )}
        
        {/* Main Content Section */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}>
          <div className="flex flex-row w-full space-x-10 p-5">
            <div className="w-1/2">
              <Ads1/>
            </div>
            <div className="w-1/2">
              <Ads2/>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4 p-5 space-x-8">
            <div className="w-1/2">
              <PickUp/>
            </div>
            <div className='bg-blue-500 m-2 p-4 rounded-lg'>
              <Swap className="text-[#00000]"/>
            </div>
            <div className="w-1/2">
              <DropOff/>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4 p-5 w-full">
            <CarsList/>
          </div>
          
        </div>
      </div>
      <div>
        <Footer/>
        </div>
    </div>
  );
}