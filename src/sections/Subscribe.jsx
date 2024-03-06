import React, { useState, useEffect } from 'react';

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

    // Get existing subscription data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('subscriptionData')) || [];

    // Add the new subscription data along with the current date
    existingData.push({
      email: subscriptionData.email,
      date: new Date().toLocaleString(), // Add the current date and time
    });

    // Save the updated array to local storage
    localStorage.setItem('subscriptionData', JSON.stringify(existingData));

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

  // Load email from local storage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setSubscriptionData((prevData) => ({
        ...prevData,
        email: storedEmail,
      }));
    }
  }, []);

  return (

    <section id="contact-us" className="bg-[#f8f6f2] container max-sm:mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 px-12">
      <div>
        <h3 className="text-4xl leading-[68px] text-center font-bold text-black" id="about">
          About Us
        </h3>
        <p className='text-justify p-2'>
          Trendoo was invented as a trendy, avant-garde fashion label known for its innovative designs and cutting-edge styles. We are a group of five passionate students dedicated to honing our skills in Front End Web Development. Our mission is to provide a seamless online shopping experience for individuals who appreciate quality and unique clothing options. Explore our collection of comfortable attire tailored for both women and men. 
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
                className="form-checkbox text-black myCheckbox"
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
                className="form-checkbox text-black myCheckbox"
              />
              <span className="text-black hover:underline ml-2">Instagram</span>
            </label>
          </div>
          <div className='inputSubscribe'>
            <input
              type="text"
              placeholder="subscribe@trendoo.com"
              className="input p-2 rounded-xl myCheckbox"
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
