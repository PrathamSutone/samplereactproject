import TickSquare from './tick-square.svg';
import Ceklist from './Ceklist.svg';

const categories = [
  { name: 'Sport', count: 10, checked: true },
  { name: 'SUV', count: 12, checked: true },
  { name: 'MPV', count: 16, checked: false },
  { name: 'Sedan', count: 20, checked: false },
  { name: 'Coupe', count: 14, checked: false },
  { name: 'Hatchback', count: 14, checked: false },
];

const capacities = [
  { name: '2 Person', count: 10, checked: true },
  { name: '4 Person', count: 14, checked: false },
  { name: '6 Person', count: 12, checked: false },
  { name: '8 or More', count: 16, checked: true },
];

export default function NavBarSide() {
  return (
    <div className="w-full max-w-sm">
      <Section title="TYPE" items={categories} />
      <Section title="CAPACITY" items={capacities} />
      <PriceSection />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-xs font-semibold text-[#90A3BF] mb-7 tracking-widest"> {title}</h2>
      <div className="space-y-7">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            {item.checked ? <TickSquare /> : <Ceklist />}
              
            <span className="text-[20px] font-semibold text-[#596780] leading-[30px]">
              {item.name} ({item.count})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceSection() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-[#90A3BF] mb-7  tracking-widest">PRICE</h2>
      <div className="flex items-center space-x-3 mb-8">
        <div className="flex-1 h-3 bg-[#E0E3EB] rounded-[12px] relative">
          <div className="absolute top-0 left-0 h-3 bg-[#3563E9] rounded-[12px]" style={{ width: '70%' }}></div>
          <div className="absolute top-50% -translate-y-1/4  -translate-x-1/4 h-6 w-6 bg-[#3563E9] rounded-full border-4 border-white" style={{ left: '70%' }}></div>
        </div>
      </div>
      <div className="text-[20px] font-semibold text-[#596780] leading-[30px]">Max. $100.00</div>
    </div>
  );
}
