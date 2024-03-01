import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageInspo from './ImageInspo';


const ImageContainer = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: '6FeaPh0XHiaVxX60hJoMiqxISkh0KrYDF7SQb5svK3UyNWNj4Bwiq6ZC'
                    },
                    params: {
                        query: 'fashion',
                        per_page: 7,
                    },
                });
                //Extracts random image URL
                const randomFashionImage = response.data.photos[Math.floor(Math.random() * response.data.photos.length)].src.original;
                //Sets the random image to the state
                setImageUrl(randomFashionImage);
            } catch (error) {
                console.error('Error fetching Pexels API:', error);
            }
        };
})
};

export default ImageContainer
