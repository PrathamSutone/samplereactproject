"use client";
import { useState, useRef } from 'react';
import TickSquare from './tick-square.svg';

export default function Sidebar() {
  const [checkedItems, setCheckedItems] = useState({
    sport: true,
    suv: true,
    mpv: false,
    sedan: false,
    coupe: false,
    hatchback: false,
    person2: true,
    person4: false,
    person6: false,
    person8: true,
  });

  const [price, setPrice] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    updatePrice(e);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      updatePrice(e);
    }
  };

  const updatePrice = (e) => {
    if (!sliderRef.current) return;
    const boundingRect = sliderRef.current.getBoundingClientRect();
    const newPercentage = Math.min(
      Math.max(0, ((e.clientX - boundingRect.left) / boundingRect.width) * 100),
      100
    );
    setPrice(newPercentage.toFixed(0));
  };

  return (
    <div
      className="bg-white p-8"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Section title="TYPE">
        <CheckboxItem
          checked={checkedItems.sport}
          text="Sport"
          number="(10)"
          onChange={() => handleCheckboxChange('sport')}
        />
        <CheckboxItem
          checked={checkedItems.suv}
          text="SUV"
          number="(12)"
          onChange={() => handleCheckboxChange('suv')}
        />
        <CheckboxItem
          checked={checkedItems.mpv}
          text="MPV"
          number="(16)"
          onChange={() => handleCheckboxChange('mpv')}
        />
        <CheckboxItem
          checked={checkedItems.sedan}
          text="Sedan"
          number="(20)"
          onChange={() => handleCheckboxChange('sedan')}
        />
        <CheckboxItem
          checked={checkedItems.coupe}
          text="Coupe"
          number="(14)"
          onChange={() => handleCheckboxChange('coupe')}
        />
        <CheckboxItem
          checked={checkedItems.hatchback}
          text="Hatchback"
          number="(14)"
          onChange={() => handleCheckboxChange('hatchback')}
        />
      </Section>
      <Section title="CAPACITY">
        <CheckboxItem
          checked={checkedItems.person2}
          text="2 Person"
          number="(10)"
          onChange={() => handleCheckboxChange('person2')}
        />
        <CheckboxItem
          checked={checkedItems.person4}
          text="4 Person"
          number="(14)"
          onChange={() => handleCheckboxChange('person4')}
        />
        <CheckboxItem
          checked={checkedItems.person6}
          text="6 Person"
          number="(12)"
          onChange={() => handleCheckboxChange('person6')}
        />
        <CheckboxItem
          checked={checkedItems.person8}
          text="8 or More"
          number="(16)"
          onChange={() => handleCheckboxChange('person8')}
        />
      </Section>
      <Section title="PRICE">
        <div
          ref={sliderRef}
          className="relative w-full h-2 bg-gray-400 rounded-lg flex items-center"
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute left-0 h-2 bg-blue-500 rounded-lg"
            style={{ width: `${price}%` }}
          ></div>
          <div
            className="w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-md cursor-pointer"
            style={{
              position: 'absolute',
              left: `${price}%`,
              transform: 'translateX(-50%)',
            }}
          ></div>
        </div>
        <p className="text-gray-600 font-semibold text-lg">Max. ${price}.00</p>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-sm tracking-wide text-gray-400 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function CheckboxItem({ checked, text, number, onChange }) {
  return (
    <div className="flex items-center gap-2 mb-4" onClick={onChange}>
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-md ${
          checked ? '' : 'border border-gray-400'
        }`}
      >
        {checked && (
          <div className="w-6 h-6">
            <TickSquare />
          </div>
        )}
      </div>
      <span className="text-black text-lg">{text}</span>
      <span className="text-gray-400 text-lg">{number}</span>
    </div>
  );
}