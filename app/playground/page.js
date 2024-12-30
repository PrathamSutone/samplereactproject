"use client";

import { useState } from 'react';

export default function Page() {
  const [size, setSize] = useState('Small');
  const [toppings, setToppings] = useState({
    Caramel: 0,
    Banana: 0,
    Chocolate: 1,
    Strawberry: 0,
  });

  const handleSizeClick = (newSize) => {
    setSize(newSize);
  };

  const handleToppingChange = (topping, delta) => {
    setToppings((prev) => ({
      ...prev,
      [topping]: Math.max(0, prev[topping] + delta),
    }));
  };

  const calculateTotal = () => {
    const basePrice = 3; // Updated base price to match the design
    const toppingPrice = Object.values(toppings).reduce((acc, curr) => acc + curr, 0);
    return basePrice + toppingPrice;
  };

  return (
    <div className="flex flex-col items-center bg-gray-300 min-h-screen">
      <div className="bg-gray-800 w-full p-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Cappuccino</h1>
        <div className="flex items-center bg-gray-700 text-white px-2 py-1 rounded-full">
          <span>⭐</span>
          <span className="ml-1">4.9</span>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl w-full p-6 mt-4 shadow-xl">
        <h2 className="text-lg font-semibold text-brown-800">Coffee Size</h2>
        <div className="flex mt-2">
          {['Small', 'Medium', 'Large'].map((item) => (
            <button
              key={item}
              onClick={() => handleSizeClick(item)}
              className={`px-4 py-2 ml-1 border ${
                size === item ? 'bg-brown-700 text-white' : 'text-gray-700 border-gray-400'
              } first:ml-0 rounded-full`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-brown-800">About</h2>
          <p className="text-gray-700 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem
            amet. Tincidunt cras volutpat aliquam porttitor molestie. Netus neque, habitasse id
            vulputate proin cras. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor
            arcu, elit.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-brown-800">Add Topping(1$)</h2>
          <div className="flex flex-col mt-2">
            {Object.keys(toppings).map((topping) => (
              <div key={topping} className="flex items-center justify-between py-2 border-b border-gray-400">
                <span className="text-brown-700">{topping}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToppingChange(topping, -1)}
                    className="bg-brown-700 text-white px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="mx-2">{toppings[topping]}</span>
                  <button
                    onClick={() => handleToppingChange(topping, 1)}
                    className="bg-brown-700 text-white px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center bg-black text-white px-6 py-3 rounded-full">
          <button className="flex-1 text-center font-semibold">Add to Cart</button>
          <span className="flex-1 text-right font-semibold">{calculateTotal()}$</span>
        </div>
      </div>
    </div>
  );
}