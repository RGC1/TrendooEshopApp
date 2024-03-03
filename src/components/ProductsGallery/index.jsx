import React, { useState, useEffect } from 'react';
import products from '../../products.json';
import ProductCard from '../../sections/ProductCard'; 

import './style.css'

const ProjectGallery = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [displayedWomenProducts, setDisplayedWomenProducts] = useState(4)
  const [menProducts, setMenProducts] = useState([]);
  const [displayedMenProducts, setDisplayedMenProducts] = useState(4)


  useEffect(() => {
    filterPopularProducts();
    filterWomenProducts();
    filterMenProducts();
  }, []);

  const filterPopularProducts = () => {
    const popularProductsData = products.filter(product => product.popularity === "bestseller");
    setPopularProducts(popularProductsData);
  };

  const filterWomenProducts = () => {
    const womenProductsData = products.filter(product => product.category === "women");
    setWomenProducts(womenProductsData);
  };

  const filterMenProducts = () => {
    const menProductsData = products.filter(product => product.category === "men");
    setMenProducts(menProductsData);
  };

  const loadMoreWomenProducts = () => {
    setDisplayedWomenProducts(womenProducts.length);
  };

  const loadMoreMenProducts = () => {
    setDisplayedMenProducts(menProducts.length);
  };

  return (
    <>
      <div className="container">
        <div className="section">
          <h2 className="flex flex-wrap justify-center">Popular Products</h2>
          <div className="flex flex-wrap justify-center">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="flex flex-wrap justify-center">Women's Products</h2>
          <div className="flex flex-wrap justify-center">
            {womenProducts.slice(0, displayedWomenProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {displayedWomenProducts < womenProducts.length && (
            <div className="text-center">
              <button onClick={loadMoreWomenProducts} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>


      {/* {displayedProducts.length < products.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )} */}




    </>
  );
}

export default ProjectGallery;
