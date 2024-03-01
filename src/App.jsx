import React from 'react'
import './index.css'
import CustomerReviews from './sections/CustomerReviews'
import Hero from './sections/Hero'
import Favourites from './sections/Favourites'
import Footer from './sections/Footer'
import Products from './sections/Products'
import Subscribe from './sections/Subscribe'
import MyNav from './sections/Nav'




function App() {
  return (
    <div className="relative"> 

      <MyNav/>
      <h1> Hello </h1>
      <Hero/>
      <Products/>
      <Favourites/>
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
}

export default App