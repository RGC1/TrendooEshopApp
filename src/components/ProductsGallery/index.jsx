import React from 'react';
import products from '../../products.json';
import ProductCard from '../ProductCard'; // Assuming ProductCard is the correct component

const ProjectGallery = () => {
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProjectGallery;
