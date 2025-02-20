"use client";
import React, { useState } from 'react';
import StarIcon from './Layer.svg'; // Ensure this is a valid SVG React component

const StarRating = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (index) => {
        setRating(index + 1);
        console.log(`Rating: ${index + 1}`);
    };

    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{ cursor: 'pointer' }}
                >
                    <StarIcon
                        style={{ fill: i < rating ? '#FFD700' : '#D1D5DB' }} // Use fill style for color
                    />
                </div>
            ))}
        </div>
    );
};

export default StarRating;