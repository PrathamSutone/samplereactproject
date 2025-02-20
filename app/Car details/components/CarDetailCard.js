import StarIcon from './StarIcon';
import HeartIcon from './HeartIcon';

export default function CarDetailCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Nissan GT - R</h1>
        <HeartIcon />
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <span className="ml-2 text-sm font-medium text-gray-600">440+ Reviewer</span>
      </div>
      <p className="text-gray-600 mb-6">
        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="flex justify-between text-gray-500">
            <span>Type Car</span>
            <span className="font-semibold text-gray-700">Sport</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Steering</span>
            <span className="font-semibold text-gray-700">Manual</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-gray-500">
            <span>Capacity</span>
            <span className="font-semibold text-gray-700">2 Person</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Gasoline</span>
            <span className="font-semibold text-gray-700">70L</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-gray-900">$80.00/ days</span>
          <span className="text-sm line-through text-gray-400 ml-2">$100.00</span>
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Rent Now
        </button>
      </div>
    </div>
  );
}