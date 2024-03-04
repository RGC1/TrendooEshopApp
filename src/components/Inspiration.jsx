import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
            <h2 style={{ padding: '30px', marginTop: '40px', textAlign: 'center'}}>Need some inspiration? Here are some recommendations:</h2>
            <Carousel>
                {imageUrls.map((url, index) => (
                    <Carousel.Item key={index} style={{ height: '400px', width: '100%'}}>
                        <img className='d-block w-100 h-100 object-fit-cover' src={url} alt={`Fashion Image ${index}`} />
                    </Carousel.Item>
            ))}
            </Carousel>   
            </div>
    );
};

export default ImageInspiration
