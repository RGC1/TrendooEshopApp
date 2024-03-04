import React, { useState, useEffect } from 'react';
import products from '../../products.json';
import ProductCard from '../../sections/ProductCard';

import './style.css';

const ProjectGallery = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [displayedWomenProducts, setDisplayedWomenProducts] = useState(4);
  const [menProducts, setMenProducts] = useState([]);
  const [displayedMenProducts, setDisplayedMenProducts] = useState(4);
  const [showFilters, setShowFilters] = useState(false);
  const [filterByShirts, setFilterByShirts] = useState(false);
  const [filterByTShirts, setFilterByTShirts] = useState(false);
  const [filterByShirtsWomen, setFilterByShirtsWomen] = useState(false);
  const [filterByTShirtsWomen, setFilterByTShirtsWomen] = useState(false);
  const [filterByBlouserWomen, setFilterByBlouserWomen] = useState(false);

  useEffect(() => {
    filterPopularProducts();
    filterWomenProducts();
    filterMenProducts();
  }, [filterByShirts, filterByTShirts, filterByShirtsWomen, filterByTShirtsWomen, filterByBlouserWomen]);

  const filterPopularProducts = () => {
    const popularProductsData = products.filter(
      (product) => product.popularity === 'bestseller'
    );
    setPopularProducts(popularProductsData);
  };

  const filterWomenProducts = () => {
  let filteredWomenProducts = products.filter((product) => product.category === 'women');
  
  // Check how many checkboxes are checked
  const numCheckboxesChecked = [filterByShirtsWomen, filterByTShirtsWomen, filterByBlouserWomen].filter(Boolean).length;
  
  // If all checkboxes are checked, load all products
  if (numCheckboxesChecked === 3) {
    filteredWomenProducts = filteredWomenProducts.filter(
      (product) => product.subcategory === 'shirt' || product.subcategory === 'tshirt' || product.subcategory === 'blouser'
    );
  } else {
    // If exactly two checkboxes are checked, load products based on those checkboxes
    if (numCheckboxesChecked === 2) {
      if (filterByShirtsWomen && filterByTShirtsWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt' || product.subcategory === 'tshirt');
      }
      if (filterByShirtsWomen && filterByBlouserWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt' || product.subcategory === 'blouser');
      }
      if (filterByTShirtsWomen && filterByBlouserWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'tshirt' || product.subcategory === 'blouser');
      }
    } else {
      // If only one checkbox is checked, load products based on that checkbox
      if (filterByShirtsWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt');
      }
      if (filterByTShirtsWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'tshirt');
      }
      if (filterByBlouserWomen) {
        filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'blouser');
      }
    }
  }
  
  setDisplayedWomenProducts(filteredWomenProducts.length); // Update displayed women products count
  setWomenProducts(filteredWomenProducts);
};

  



  const filterMenProducts = () => {
    let filteredMenProducts = products.filter((product) => product.category === 'men');
  
    // If both filters are checked, load all men products
    if (filterByShirts && filterByTShirts) {
      filteredMenProducts = filteredMenProducts.filter(
        (product) => product.subcategory === 'shirt' || product.subcategory === 'tshirt'
      );
      setDisplayedMenProducts(filteredMenProducts.length);
    } else {
      // Load only shirts or t-shirts based on the checkbox checked
      if (filterByShirts) {
        filteredMenProducts = filteredMenProducts.filter((product) => product.subcategory === 'shirt');
        setDisplayedMenProducts(filteredMenProducts.length);
      }
      if (filterByTShirts) {
        filteredMenProducts = filteredMenProducts.filter((product) => product.subcategory === 'tshirt');
        setDisplayedMenProducts(filteredMenProducts.length);
      }
    }
    setMenProducts(filteredMenProducts);
  };
  

  const loadMoreWomenProducts = () => {
    setDisplayedWomenProducts(womenProducts.length);
  };

  const loadMoreMenProducts = () => {
    setDisplayedMenProducts(menProducts.length);
  };

  return (
    <>
      <div className="container" id="sectionMostPopular">
        <div className="section">
          <h2 className="titleProducts flex flex-wrap justify-center">Most Popular</h2>
          <div className="flex flex-wrap justify-center">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="section" id="sectionWomen">
          <h2 className="titleProducts flex flex-wrap justify-center">Women's Products</h2>



          {/* Filter By Dropdown */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter By
        </button>
        {showFilters && (
          <div className="dropdown ml-2">
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={filterByShirtsWomen}
                onChange={() => setFilterByShirtsWomen(!filterByShirtsWomen)}
              />
              Shirts
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={filterByTShirtsWomen}
                onChange={() => setFilterByTShirtsWomen(!filterByTShirtsWomen)}
              />
              T-Shirts
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={filterByBlouserWomen}
                onChange={() => setFilterByBlouserWomen(!filterByBlouserWomen)}
              />
              Blouser
            </label>
          </div>
        )}
      </div>



          <div className="flex flex-wrap justify-center">
            {womenProducts.slice(0, displayedWomenProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {displayedWomenProducts < womenProducts.length && (
            <div className="text-center">
              <button
                onClick={loadMoreWomenProducts}
                className="buttonProducts mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Explore more
              </button>
            </div>
          )}
        </div>
        <div className="section" id="sectionMen">
          <h2 className="titleProducts flex flex-wrap justify-center">Men's Products</h2>





          {/* Filter By Dropdown */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter By
        </button>
        {showFilters && (
          <div className="dropdown ml-2">
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={filterByShirts}
                onChange={() => setFilterByShirts(!filterByShirts)}
              />
              Shirts
            </label>
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={filterByTShirts}
                onChange={() => setFilterByTShirts(!filterByTShirts)}
              />
              T-Shirts
            </label>
          </div>
        )}
      </div>




          <div className="flex flex-wrap justify-center">
            {menProducts.slice(0, displayedMenProducts).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {displayedMenProducts < menProducts.length && (
            <div className="text-center">
              <button
                onClick={loadMoreMenProducts}
                className="buttonProducts mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Explore more
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
