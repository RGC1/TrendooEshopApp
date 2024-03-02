import React from 'react';
const ReviewCard = ({ name, comment, rating, avatarUrl }) => {
    const avatarSize = 'h-12 w-12'; // Set the desired size for avatars

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className={`rounded-full overflow-hidden ${avatarSize} mr-4`}>
                    <img src={avatarUrl} alt={`${name}'s avatar`} className="w-full h-full object-cover" />
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
                name="Bradley Cooper"
                rating={5}
                comment="Great product! Fast shipping and excellent customer service."
                avatarUrl="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <ReviewCard
                name="Anna Kendrick"
                rating={5}
                comment="I love my purchase. The quality is amazing, and it arrived on time."
                avatarUrl="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <ReviewCard
                name="Junior Elvis Presley"
                rating={4}
                comment="The product is good, but it took longer than expected to deliver."
                avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            />
            {/* Add more ReviewCard components as needed source from https://tailwindui.com/components/application-ui/elements/avatars */}
        </div>
    );
};

export default ReviewCards;
