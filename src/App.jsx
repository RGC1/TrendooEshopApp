import React, { useState, useEffect } from 'react';
import './index.css'
import CustomerReviews from './sections/CustomerReviews'
import Hero from './sections/Hero'
import ImageInspiration from './components/Inspiration'
import Footer from './sections/Footer'
import ProductsGallery from './components/ProductsGallery'
import Subscribe from './sections/Subscribe'
import MyNav from './sections/Nav'
import productsJson from "../src/products.json"




function App() {
  const [favoriteMap, setFavoriteMap] =  useState({});
  return (
    <div className="relative"> 

      <MyNav 
      favorites={productsJson.filter(product => favoriteMap[product.id])}
      />
      <Hero/>
      <ProductsGallery
      onToggleFavorite={(productId) => setFavoriteMap({...favoriteMap,[productId]:!favoriteMap[productId]})}
      favoriteMap={favoriteMap}
      />
      <ImageInspiration/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
};

export default App