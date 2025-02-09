import React from 'react';
import ArrowDownIcon from './arrow-down.svg';
import Review from './Review';

export default function Page() {
    const reviews = [
        {
            name: 'Alex Stanton',
            title: 'CEO at Bukalapak',
            date: '21 July 2022',
            rating: 5,
            text: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
        },
        {
            name: 'Skylar Dias',
            title: 'CEO at Amazon',
            date: '20 July 2022',
            rating: 5,
            text: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
        }
    ];

    return (
        <div className="bg-white rounded-xl p-6 w-[1016px] h-[452px]">
            <div className="flex items-center mb-6">
                <h1 className="text-[20px] font-semibold text-[#1A202C]">Reviews</h1>
                <div className="flex items-center bg-[#3563E9] text-white rounded-lg ml-3 px-5 py-1 text-[14px] font-bold">
                    {reviews.length}
                </div>
            </div>

            {reviews.map((review, index) => (
                <Review
                    key={index}
                    name={review.name}
                    title={review.title}
                    date={review.date}
                    rating={review.rating}
                    text={review.text}
                />
            ))}

            <div className="flex justify-center items-center mt-10">
                <button className="flex items-center space-x-2 text-[16px] font-semibold text-[#90A3BF]">
                    <span>Show All</span>
                    <ArrowDownIcon />
                </button>
            </div>
        </div>
    );
}