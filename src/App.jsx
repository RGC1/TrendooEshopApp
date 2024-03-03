import React from 'react'
import './index.css'
import CustomerReviews from './sections/CustomerReviews'
import Hero from './sections/Hero'
{/*import Inspiration from './sections/Favourites'*/}
import Footer from './sections/Footer'
import ProductsGallery from './components/ProductsGallery'
import Subscribe from './sections/Subscribe'
import MyNav from './sections/Nav'




function App() {
  return (
    <div className="relative"> 

      <MyNav/>
      <Hero/>
      <ProductsGallery/>
      {/*<Inspiration/>*/}
      <CustomerReviews/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
}

export default App