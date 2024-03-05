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


  // Function to filter the property "popularity" to show the popular products.
  const filterPopularProducts = () => {
    const popularProductsData = products.filter(
      (product) => product.popularity === 'bestseller'
    );
    setPopularProducts(popularProductsData);
  };

  // Function to filter the property category for women products and to check if any additional filer has been applied by the user.
  const filterWomenProducts = () => {
    let filteredWomenProducts = products.filter((product) => product.category === 'women');

    // Check how many checkboxes are checked
    const numCheckboxesChecked = [filterByShirtsWomen, filterByTShirtsWomen, filterByBlouserWomen].filter(Boolean).length;

    // If all checkboxes are checked, load all products
    if (numCheckboxesChecked === 3) {
      filteredWomenProducts = filteredWomenProducts.filter(
        (product) => product.subcategory === 'shirt' || product.subcategory === 'tshirt' || product.subcategory === 'blouser'
      );
      setDisplayedWomenProducts(filteredWomenProducts.length); // Update displayed women products count
    } else {
      // If exactly two checkboxes are checked, load products based on those checkboxes
      if (numCheckboxesChecked === 2) {
        if (filterByShirtsWomen && filterByTShirtsWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt' || product.subcategory === 'tshirt');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
        if (filterByShirtsWomen && filterByBlouserWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt' || product.subcategory === 'blouser');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
        if (filterByTShirtsWomen && filterByBlouserWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'tshirt' || product.subcategory === 'blouser');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
      } else {
        // If only one checkbox is checked, load products based on that checkbox
        if (filterByShirtsWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'shirt');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
        if (filterByTShirtsWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'tshirt');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
        if (filterByBlouserWomen) {
          filteredWomenProducts = filteredWomenProducts.filter((product) => product.subcategory === 'blouser');
          setDisplayedWomenProducts(filteredWomenProducts.length);
        }
      }
    }
    setWomenProducts(filteredWomenProducts);
  };


  // Function to filter the property category for men products and to check if any additional filer has been applied by the user.
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

  // Function to load more products if the women products are set to 4, otherwise set it back to 4.
  const loadMoreWomenProducts = () => {
    setDisplayedWomenProducts(displayedWomenProducts === 4 ? womenProducts.length : 4);
  };

  // Function to load more products if the men products are set to 4, otherwise set it back to 4.
  const loadMoreMenProducts = () => {
    setDisplayedMenProducts(displayedMenProducts === 4 ? menProducts.length : 4);
  };

  return (
    <>
      <div className="container">

        {/* Most Popular Section: map over the items with bestseller value to display them in this section*/}
        <div className="section" id="sectionMostPopular">
          <h2 className="titleProducts flex flex-wrap justify-center">Most Popular</h2>
          <div className="flex flex-wrap justify-center">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Women's Section */}
        <div className="section" id="sectionWomen">
          <h2 className="titleProducts flex flex-wrap justify-center">Women's Products</h2>

          {/* Filters for women products */}
          <div className="flex justify-center mt-4">
            <button
              className="buttonProducts text-white py-1 px-3 rounded"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
            {showFilters && (
              <div className="flex items-center">
                <label className="inline-block mr-4 ml-4 mb-6">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filterByShirtsWomen}
                    onChange={() => setFilterByShirtsWomen(!filterByShirtsWomen)}
                  />
                  Shirts
                </label>
                <label className="inline-block mr-4 mb-6">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filterByTShirtsWomen}
                    onChange={() => setFilterByTShirtsWomen(!filterByTShirtsWomen)}
                  />
                  T-Shirts
                </label>
                <label className="inline-block mb-6">
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
          {/* Coditional for showing women cards, if the products are more then 4 in total, the button will be render with the onClick event LoadMoreWomenProducts*/}
          {womenProducts.length > 4 && (
            <div className="text-center">
              <button
                onClick={loadMoreWomenProducts}
                className="buttonProducts mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {/* Ternary operator used inside the button's text. If displayedWomenProducts is equal to 4, it displays "Explore more"; otherwise, it displays "Explore less".*/}
                {displayedWomenProducts === 4 ? 'Explore more' : 'Explore less'}
              </button>
            </div>
          )}
        </div>

        {/* Men's Section */}
        <div className="section" id="sectionMen">
          <h2 className="titleProducts flex flex-wrap justify-center">Men's Products</h2>

          {/* Filters for men products */}
          <div className="flex justify-center mt-4">
            <button
              className="buttonProducts text-white py-1 px-3 rounded"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
            {showFilters && (
              <div className="flex items-center">
                <label className="inline-block mr-4 ml-4 mb-6">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filterByShirts}
                    onChange={() => setFilterByShirts(!filterByShirts)}
                  />
                  Shirts
                </label>
                <label className="inline-block mb-6">
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
          {/* Coditional for showing women cards, if the products are more then 4 in total, the button will be render with the onClick event LoadMoreWomenProducts*/}
          {menProducts.length > 4 && (
            <div className="text-center">
              <button
                onClick={loadMoreMenProducts}
                className="buttonProducts mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {/* Ternary operator used inside the button's text. If displayedWomenProducts is equal to 4, it displays "Explore more"; otherwise, it displays "Explore less".*/}
                {displayedMenProducts === 4 ? 'Explore more' : 'Explore less'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
