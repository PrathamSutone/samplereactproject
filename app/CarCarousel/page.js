import Image from 'next/image';
import view1Image from './View 1.png';
import view2Image from './View 2.png';
import view3Image from './View 3.png';
import bgImage from './BG.png';

export default function CarPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Hero Section */}
      <div className="relative bg-[#3563E9] rounded-lg p-6 pb-16 mb-6 text-white w-full max-w-xl min-h-[200px] md:min-h-[350px] lg:min-h-[400px]">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">
            Sports car with the best design and acceleration
          </h1>
          <p className="text-base md:text-lg">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
      </div>
    </div>
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
        <div className="bg-white rounded-lg overflow-hidden">
        <Image src={view1Image} alt="Exterior View" width={150} height={100} layout="responsive" />
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
        <Image src={view2Image} alt="Interior View" width={150} height={100} layout="responsive" />
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
        <Image src={view3Image} alt="Seat View" width={150} height={100} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
