import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageInspiration = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const apiKey = '6FeaPh0XHiaVxX60hJoMiqxISkh0KrYDF7SQb5svK3UyNWNj4Bwiq6ZC'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: apiKey,
                    },
                    params: {
                        query: 'fashion',
                        per_page: 5,
                    },
                });
                //Extracts random image URL
                const randomFashionImage = response.data.photos.map(photo => photo.src.original);
                //Sets the random image to the state
                setImageUrls(randomFashionImage);
            } catch (error) {
                console.error('Error fetching Pexels API:', error);
            }
        };

        fetchData();
    }, [apiKey]);

    return (
        <Carousel>
            {imageUrls.map((url, index) => (
                <Carousel.Item key={index}>
                    <img className='d-block w-100' src={url} alt={`Fashion Image ${index}`} />
                </Carousel.Item>
            ))}
        </Carousel>    
    );
};

export default ImageInspiration
