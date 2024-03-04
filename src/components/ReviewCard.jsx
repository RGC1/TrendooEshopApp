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
                comment="Great product! I recently purchased some items from this fashion shop and I was very pleased with the quality of the clothing. The styles were trendy and the materials felt great. I would definitely order from them again. Excellent customer service."
                avatarUrl="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <ReviewCard
                name="Anna Kendrick"
                rating={5}
                comment="I've been shopping at this fashion store for a while now and I have to say, I'm pretty happy with them. They have a good selection of clothes and the quality is generally pretty good. I would recommend them to anyone looking for fashionable clothing."
                avatarUrl="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <ReviewCard
                name="Junior Elvis Presley"
                rating={4}
                comment="I have to say, I was a bit disappointed with the fashion shop at first. The clothes didn't seem very unique and the prices were a little higher than I would have liked. But after giving them a second chance, I have to say I'm pleasantly surprised. The quality of the clothing is much better than I expected and the styles are starting to grow on me."
                avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            />
            {/* Add more ReviewCard components as needed source from https://tailwindui.com/components/application-ui/elements/avatars */}
        </div>
    );
};

export default ReviewCards;
