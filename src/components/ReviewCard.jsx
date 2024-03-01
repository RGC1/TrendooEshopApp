import React from 'react';

const ReviewCard = ({ name, comment, rating }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="rounded-full bg-gray-300 w-12 h-12 flex items-center justify-center mr-4">
                    { /* You can replace the content inside the circle with an avatar or initials */}
                    <span className="text-gray-600 font-bold">{name.charAt(0)}</span>
                </div>
                <div>
                    <p className="text-lg font-semibold">{name}</p>
                    {rating && <p className="text-gray-500">Rating: {rating}/5</p>}
                </div>
            </div>
            <p className="text-gray-700">{comment}</p>
        </div>
    );
};

const ReviewCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ReviewCard
                name="Samantha Fox"
                rating={5}
                comment="Great product! Fast shipping and excellent customer service."


            />
            <ReviewCard
                name="Mike Tyson"
                rating={5}
                comment="I love my purchase. The quality is amazing, and it arrived on time."

            />
            <ReviewCard
                name="Frank Sinatra"
                rating={4}
                comment="The product is good, but it took longer than expected to deliver."
            />
            {/* Add more ReviewCard components as needed */}
        </div>
    );
};

export default ReviewCards;
