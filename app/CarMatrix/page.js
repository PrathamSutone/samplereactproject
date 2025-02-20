import CarCard from './carcard';
import Nissan from './nissan.png'
import Rollsroyce from './rollroyce.png'

export default function CarsList() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[#90A3BF] font-semibold text-16">Popular Car</h1>
        <a href="#" className="text-[#3563E9] font-semibold text-16">View All</a>
      </div>
      
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-wrap justify-center mt-5 space-x-5">
          <CarCard
            name="Koenigsegg"
            type="Sport"
            price="$99.00"
            perDay="day"
            imageUrl= {Nissan}
            like={true}
            fuel="90L"
            transmission="Manual"
            capacity="2 People"
          />
          <CarCard
            name="Nissan GT - R"
            type="Sport"
            price="$80.00"
            perDay="day"
            imageUrl={Rollsroyce}
            like={false}
            fuel="80L"
            transmission="Manual"
            capacity="2 People"
            oldPrice="$100.00"
          />
          <CarCard
            name="Rolls - Royce"
            type="Sedan"
            price="$96.00"
            perDay="day"
            imageUrl={Nissan}
            like={true}
            fuel="70L"
            transmission="Manual"
            capacity="4 People"
          />
          <CarCard
            name="Nissan GT - R"
            type="Sport"
            price="$80.00"
            perDay="day"
            imageUrl={Rollsroyce}
            like={false}
            fuel="80L"
            transmission="Manual"
            capacity="2 People"
            oldPrice="$100.00"
          />
        </div>
      ))}
    </div>
  );
}