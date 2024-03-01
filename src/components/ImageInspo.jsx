import React from 'react';

const ItemBox = ({ name, image }) => (
    <div className='imagecontainer'>
        <p>{name}</p>
        <img src={image} alt={name} />
    </div>
);

export default ImageInspo