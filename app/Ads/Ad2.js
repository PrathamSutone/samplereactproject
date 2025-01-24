import Image from 'next/image';
import carImage from './Ads2.png';

export default function Ads() {
  return (
    <div className="relative bg-blue-500 p-10 rounded-lg h-screen">
      <div className="absolute inset-0">
        <Image src={carImage} alt="Car" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="relative flex flex-col items-start justify-center space-y-4 text-left max-w-[50%]">
        <h1 className="text-white text-4xl font-semibold leading-none">
          The Best Platform for Car Rental
        </h1>
        <p className="text-white text-lg">
          Ease of doing a car rental safely and reliably. Of course at a low price.
        </p>
        <button className="bg-[#3563E9] text-white text-lg font-semibold py-2 px-5 rounded-md">
          Rental Car
        </button>
      </div>
    </div>
  );
}