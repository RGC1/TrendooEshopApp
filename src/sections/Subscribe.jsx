import React, { useState } from 'react';

import './Subscribe.css'

const Subscribe = () => {
  // State to manage subscription data
  const [subscriptionData, setSubscriptionData] = useState({
    email: '',
    youtube: false,
    instagram: false,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkbox inputs separately
    setSubscriptionData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle subscription submission
  const handleSubscriptionSubmit = () => {
    // You can handle the subscription data as needed, send it to a server
    console.log('Subscription submitted:', subscriptionData);
    // Reset the input fields after submission
    setSubscriptionData({
      email: '',
      youtube: false,
      instagram: false,
    });

    // Open YouTube and Instagram links in new tabs if subscribed
    if (subscriptionData.youtube) {
      window.open('https://www.youtube.com/user/trendoo', '_blank');
    }
    if (subscriptionData.instagram) {
      window.open('https://www.instagram.com/trendoo', '_blank');
    }
  };

  return (

    <section id="contact-us" className="bg-[#f8f6f2] container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-12">
      <div>
        <h3 className="text-4xl leading-[68px] text-center font-bold text-black" id="about">
          About Us
        </h3>
        <p className='text-center p-2'>
          Tredoo was invented as a trendy, avant-garde fashion label known for its innovative designs and cutting-edge styles. We are a group of five passionate students dedicated to honing our skills in Front End Web Development. Our mission is to provide a seamless online shopping experience for individuals who appreciate quality and unique clothing options. Explore our collection of comfortable attire tailored for both women and men. Select your favorite items and proceed to the store to make your purchase while they're still in stock.
        </p>
      </div>
      <div>
        <h3 className="text-4xl leading-[68px] ml-8 text-center font-bold text-black" id="subscribe">
          Connect with us on
          <span className="text-[#c1ff72] text-4xl leading-[68px] text-center font-bold"> Social Media</span>
        </h3>

        <div className="lg:max-w-[100%] w-full flex items-center flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">

          <div className="flex items-center gap-2">
            {/* YouTube Checkbox */}
            <label className="flex items-center text-black">
              <input
                type="checkbox"
                name="youtube"
                checked={subscriptionData.youtube}
                onChange={handleInputChange}
                className="form-checkbox text-black"
              />
              <span className="text-black hover:underline ml-2">YouTube</span>
            </label>
            {/* Instagram Checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                name="instagram"
                checked={subscriptionData.instagram}
                onChange={handleInputChange}
                className="form-checkbox text-black"
              />
              <span className="text-black hover:underline ml-2">Instagram</span>
            </label>
          </div>
          <div className='inputSubscribe'>
            <input
              type="text"
              placeholder="subscribe@trendoo.com"
              className="input p-2 rounded-xl"
              name="email"
              value={subscriptionData.email}
              onChange={handleInputChange}
            />
            <button className="buttonProducts ml-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubscriptionSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </section>

  );
};

export default Subscribe;
