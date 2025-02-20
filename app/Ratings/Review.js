import React from 'react';
import StarRating from './StarRating';

const Review = ({ name, title, date, rating, text }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="text-[20px] font-bold text-[#1A202C]">{name}</div>
                    <div className="text-[14px] font-medium text-[#90A3BF]">{title}</div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-[14px] font-medium text-[#90A3BF]">{date}</span>
                    <StarRating initialRating={rating} />
                </div>
            </div>
            <div className="text-[14px] text-[#596780] leading-7">
                {text}
            </div>
        </div>
    );
};

export default Review;