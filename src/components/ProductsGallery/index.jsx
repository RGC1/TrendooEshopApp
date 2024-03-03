import React, { useState, useEffect } from 'react';
import products from '../../products.json';
import ProductCard from '../../sections/ProductCard'; 

import './style.css'

const ProjectGallery = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
    const firstEightProducts = shuffledProducts.slice(0, 8);
    setDisplayedProducts(firstEightProducts);
  }, []);

  const loadMore = () => {
    const nextProducts = products.slice(displayedProducts.length, displayedProducts.length + 8);
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
  };

  return (
    <>
    <h1 className="flex flex-wrap justify-center">Our Products</h1>
      <div className="flex flex-wrap justify-center">
      {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {displayedProducts.length < products.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default ProjectGallery;
