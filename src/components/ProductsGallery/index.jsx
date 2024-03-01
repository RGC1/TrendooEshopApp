import React from 'react';
import products from '../../products.json';
import ProductCard from '../../sections/ProductCard'; // Assuming ProductCard is the correct component

import './style.css'

const ProjectGallery = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProjectGallery;
