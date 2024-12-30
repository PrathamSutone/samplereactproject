"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [size, setSize] = useState('Small');
  const [toppings, setToppings] = useState({
    Caramel: 0,
    Banana: 0,
    Chocolate: 1,
    Strawberry: 0,
  });

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleToppingChange = (topping, change) => {
    setToppings((prev) => ({
      ...prev,
      [topping]: Math.max(prev[topping] + change, 0),
    }));
  };

  const getTotalPrice = () => {
    const toppingPrice = Object.values(toppings).reduce((a, b) => a + b, 0);
    return 4 + toppingPrice;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-full h-64 bg-gray-400">
        <Image
          src="/coffee-image.jpg"
          alt="Cappuccino"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-75 py-2 px-4 flex justify-between items-center">
          <h2 className="text-white text-xl">Cappuccino</h2>
          <div className="flex items-center text-white font-medium bg-brown-500 px-2 py-1 rounded-full">
            <span className="mr-1">⭐</span>4.9
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl shadow-md w-full p-6 mt-[-30px]">
        <h3 className="text-xl font-semibold mb-4">Coffee Size</h3>
        <div className="flex justify-around mb-6">
          {['Small', 'Medium', 'Large'].map((sizeOption) => (
            <button
              key={sizeOption}
              onClick={() => handleSizeChange(sizeOption)}
              className={`px-4 py-2 rounded-full border-2 ${
                size === sizeOption ? 'bg-brown-500 text-white' : 'border-brown-500'
              }`}
            >
              {sizeOption}
            </button>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">About</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus 
          velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. 
          Netus neque, habitasse id vulputate proin cras. Neque, vel duis sit vel 
          pellentesque tempor. A commodo arcu tortor arcu, elit.
        </p>
        <h3 className="text-xl font-semibold mb-4">Add Topping(1$)</h3>
        {Object.keys(toppings).map((topping) => (
          <div
            key={topping}
            className="flex justify-between items-center mb-2 border-b border-gray-300 py-2"
          >
            <span>{topping}</span>
            <div className="flex items-center">
              <button
                onClick={() => handleToppingChange(topping, -1)}
                className="px-2 py-1 text-lg font-bold text-brown-500"
              >
                -
              </button>
              <span className="mx-2">{toppings[topping]}</span>
              <button
                onClick={() => handleToppingChange(topping, 1)}
                className="px-2 py-1 text-lg font-bold text-brown-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
            Add to Cart
          </button>
          <span className="text-black font-semibold">{getTotalPrice()}$</span>
        </div>
      </div>
    </div>
  );
}