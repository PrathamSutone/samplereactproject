import { useState } from 'react';

export default function Page() {
  const [toppings, setToppings] = useState({
    caramel: 0,
    banana: 0,
    chocolate: 1,
    strawberry: 0,
  });

  const handleIncrease = (type) => {
    setToppings({ ...toppings, [type]: toppings[type] + 1 });
  };

  const handleDecrease = (type) => {
    setToppings({ ...toppings, [type]: Math.max(0, toppings[type] - 1) });
  };

  const calculateTotal = () => {
    const total = Object.values(toppings).reduce((acc, val) => acc + val, 0) + 4;
    return `$${total}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-white">
        <div className="bg-gray-400 h-48"></div>
        <div className="flex items-center justify-between bg-gray-500 text-white p-4">
          <h1 className="text-lg font-semibold">Cappuccino</h1>
          <span className="bg-brown-500 p-1 rounded-full px-2">⭐ 4.9</span>
        </div>
        <div className="p-4">
          <div>
            <h2 className="font-bold my-2">Coffee Size</h2>
            <div className="flex space-x-2 mb-4">
              <button className="border rounded-full px-4 py-1 text-brown-700 border-brown-200">Small</button>
              <button className="border rounded-full px-4 py-1 text-brown-700 border-brown-200">Medium</button>
              <button className="border rounded-full px-4 py-1 text-brown-700 border-brown-200">Large</button>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-2">About</h2>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum vivamus velit lorem amet. Tincidunt cras volutpat aliquam porttitor molestie. Neque, vel duis sit vel pellentesque tempor. A commodo arcu tortor arcu, elit.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Add Topping(1$)</h2>
            {Object.keys(toppings).map((topping) => (
              <div key={topping} className="flex items-center justify-between mb-2">
                <span className="capitalize">{topping}</span>
                <div className="flex items-center">
                  <button onClick={() => handleDecrease(topping)} className="border-2 border-brown-500 rounded-full px-2">-</button>
                  <span className="mx-2">{toppings[topping]}</span>
                  <button onClick={() => handleIncrease(topping)} className="border-2 border-brown-500 rounded-full px-2">＋</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className="bg-black text-white py-2 px-6 rounded-full">Add to Cart</button>
            <span className="font-bold text-lg">{calculateTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}