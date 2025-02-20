"use client";

import Image from 'next/image';
import { useState } from 'react';
import HeartIcon from './heart.svg';
import GasStationIcon from './gas-station.svg';
import Profile2UserIcon from './profile-2user.svg';
import CarIcon from './Car.svg';

export default function CarCard({ name, type, price, perDay, imageUrl, like, fuel, transmission, capacity, oldPrice }) {
  const [isLiked, setIsLiked] = useState(like);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-72">
      <div className="flex  justify-between items-start">
        <div>
          <h2 className="text-[20px] font-bold text-[#1A202C]">{name}</h2>
          <p className="text-[14px] text-[#90A3BF]">{type}</p>
        </div>
        <button
          onClick={toggleLike}
          className={`mt-2 rounded-full focus:outline-none ${
            isLiked ? "text-red-500" : "text-gray-400"
          }`}
        >
          <HeartIcon className={`heart-icon ${isLiked ? "fill-red-500 stroke-red-500" : "fill-none stroke-gray-400"}`} />
        </button>
      </div>
      
      <div className="my-10 flex justify-center">
        <Image src={imageUrl} alt={name} className="object-contain" width={192} height={108} />
      </div>
      
      <div className="flex justify-between items-center text-[14px] text-[#90A3BF]">
        <div className="flex items-center space-x-1">
          <GasStationIcon />
          <span>{fuel}</span>
        </div>
        <div className="flex items-center space-x-1">
          <CarIcon />
          <span>{transmission}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Profile2UserIcon />
          <span>{capacity}</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[20px] font-bold text-[#1A202C]">{price}/ {perDay}</span>
          {oldPrice && <span className="text-[14px] text-[#90A3BF] line-through">{oldPrice}</span>}
        </div>
        <button className="bg-[#3563E9] text-white text-[16px] font-semibold rounded px-4 py-2">Rent Now</button>
      </div>
    </div>
  );
}
