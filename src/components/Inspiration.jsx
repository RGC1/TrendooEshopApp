import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageInspiration = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const apiKey = '6FeaPh0XHiaVxX60hJoMiqxISkh0KrYDF7SQb5svK3UyNWNj4Bwiq6ZC'

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    Authorization: apiKey,
                },
                params: {
                    query: 'fashion',
                    per_page: 5,
                    orientation: 'landscape',
                },
            });

            {/*console.log('API Response:', response.data);*/}
            //Extracts random image URL
            const randomFashionImage = response.data.photos.map(photo => photo.src.original);
            //Sets the random image to the state
            setImageUrls(randomFashionImage);
        } catch (error) {
            console.error('Error fetching Pexels API:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Initial fetch

        const intervalId = setInterval(() => {
            fetchData(); // Will fetch new images every 5 seconds
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [apiKey]);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Carousel items */}
            {imageUrls.map((url, index) => (
            <div key={index} className={`hidden duration-700 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
                <img src={url} className="absolute block w-full h-full" alt={`Carousel Image ${index}`} />
            </div>
            ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {imageUrls.map((_, index) => (
            <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-300'}`}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
            />
            ))}
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            {/* Previous button content */}
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            {/* Next button content */}
        </button>
    </div>
    );
};

export default ImageInspiration
