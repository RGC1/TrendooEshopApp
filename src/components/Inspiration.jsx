import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'flowbite-react';


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

        fetchData(); // Initial fetch
    }, [apiKey]);

    return (
        <div style={{ paddingTop: '50px', textAlign: 'center'}}>
            <h2 style={{ fontSize: '27px', marginBottom: '20px'}}>Still undecided? Check these for some inspiration:</h2>
                <div style={{ height: '500px'}}>
                    <Carousel>
                        {imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Fashion Image ${index}`} />
                        ))}
                    </Carousel>
                </div>
        </div>
    );
};

export default ImageInspiration
