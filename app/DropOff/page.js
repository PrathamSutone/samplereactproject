import ArrowDownIcon from './arrow-down.svg';

export default function Page() {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-start space-y-8">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-[#3563E94D] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
        <span className="font-semibold text-[#1A202C]">Drop - Off</span>
      </div>

      <div className="flex items-stretch space-x-8">
        <div className="flex flex-col items-start space-y-1">
          <span className="font-bold text-[#1A202C]">Locations</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-[#90A3BF]">Select your city</span>
            <ArrowDownIcon className="w-4 h-4 text-[#1A202C] pt-1" />
          </div>
        </div>

        <div className="border-l border-gray-300 self-stretch"></div>

        <div className="flex flex-col items-start space-y-1">
          <span className="font-bold text-[#1A202C]">Date</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-[#90A3BF]">Select your date</span>
            <ArrowDownIcon className="w-4 h-4 text-[#1A202C] pt-1" />
          </div>
        </div>

        <div className="border-l border-gray-300 self-stretch"></div>

        <div className="flex flex-col items-start space-y-1">
          <span className="font-bold text-[#1A202C]">Time</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-[#90A3BF]">Select your time</span>
            <ArrowDownIcon className="w-4 h-4 text-[#1A202C] pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}