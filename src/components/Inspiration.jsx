import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'flowbite-react';


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
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Fashion Image ${index}`} />
                ))}
            </Carousel>
    </div>
    );
};

export default ImageInspiration
