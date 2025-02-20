import Image from 'next/image';
import Car from './car.png';
import Layer from './Layer.svg';

export default function Page() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 font-jakarta">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-[#1A202C]">Rental Summary</h1>
        <p className="text-sm text-[#90A3BF] font-medium">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-24 h-20 bg-[#3563E9] rounded-lg flex items-center justify-center">
          <Image src={Car} alt="Car" className="rotate-[3deg]" />
        </div>
        <div className="ml-4">
          <h2 className="text-4xl font-bold text-gray-900">Nissan GT - R</h2>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Layer key={i} className="w-4 h-4" />
              ))}
            </div>
            <span className="ml-2 text-sm text-[#596780] font-medium">440+ Reviewer</span>
          </div>
        </div>
      </div>
      <hr className="border-[#C3D4E9] mb-4" />
      <div className="flex justify-between mb-2">
        <span className="text-[#90A3BF] font-medium">Subtotal</span>
        <span className="text-gray-900 font-semibold">$80.00</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-[#90A3BF] font-medium">Tax</span>
        <span className="text-gray-900 font-semibold">$0</span>
      </div>
      <div className="flex justify-between items-center bg-[#F6F7F9] p-2.5 rounded-[10px] mb-4">
        <span className="text-[#90A3BF] font-medium">Apply promo code</span>
        <button className="text-[#1A202C] font-medium">Apply now</button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Total Rental Price</h3>
          <p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
        </div>
        <span className="text-4xl font-bold text-gray-900">$80.00</span>
      </div>
    </div>
  );
}