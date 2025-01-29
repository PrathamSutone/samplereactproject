import Image from "next/image";
import HeartIcon from './heart.svg';
import NotificationIcon from './notification.svg';
import SettingIcon from './setting-2.svg';
import SearchIcon from './search-normal.svg';
import FilterIcon from './filter.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Import Plus Jakarta Sans font
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Page() {
  return (
    <div className={`flex items-center justify-between p-6 bg-white ${plusJakarta.className}`}>
      {/* Left Section */}
      <div className="ml-6 text-3xl font-bold text-[#3563E9]">
        MORENT
      </div>
      
      {/* Center Section */}
      <div className="relative flex items-center bg-white rounded-full border border-[#C3D4E9] w-1/3 h-12 ml-6">
        <SearchIcon className="w-6 h-6 ml-4 text-[#596780]" viewBox="0 0 24 24" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full px-4 py-2 text-sm font-medium text-[#596780] bg-white border-none rounded-full focus:outline-none"
          style={{ letterSpacing: '-0.28px' }}
        />
        <FilterIcon className="w-6 h-6 mr-4 text-[#596780]" viewBox="0 0 24 24" />
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="relative flex items-center justify-center w-12 h-12 bg-white border border-[#C3D4E9] rounded-full opacity-80">
          <HeartIcon className="w-5 h-5 text-[#596780]" />
        </button>
        
        <button className="relative flex items-center justify-center w-12 h-12 bg-white border border-[#C3D4E9] rounded-full opacity-80">
          <NotificationIcon className="h-5 text-[#596780]" />
          <span className="absolute w-3 h-3 bg-[#FF4423] rounded-full" style={{ top: '0', right: '0'}}></span>
        </button>
        
        <button className="flex items-center justify-center w-12 h-12 bg-white border border-[#C3D4E9] rounded-full opacity-80">
          <SettingIcon className="w-5 h-5 text-[#596780]" />
        </button>
      </div>
    </div>
  );
}