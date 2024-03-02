import React, { useState } from 'react';

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
    
    <section id="contact-us" className="max-container flex flex-col items-center gap-10">
      <h3 className="text-4xl leading-[68px] text-center font-bold">
        CONNECT WITH US ON
        <span className="text-purple-400 text-4xl leading-[68px] text-center font-bold"> SOCIAL MEDIA</span>
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@trendoo.com"
          className="input"
          name="email"
          value={subscriptionData.email}
          onChange={handleInputChange}
        />
        <div className="flex items-center gap-2">
          {/* YouTube Checkbox */}
          <label className="flex items-center">
            <input
              type="checkbox"
              name="youtube"
              checked={subscriptionData.youtube}
              onChange={handleInputChange}
              className="form-checkbox text-purple-700"
            />
            <span className="text-purple-700 hover:underline ml-2">YouTube</span>
          </label>
          {/* Instagram Checkbox */}
          <label className="flex items-center">
            <input
              type="checkbox"
              name="instagram"
              checked={subscriptionData.instagram}
              onChange={handleInputChange}
              className="form-checkbox text-purple-700"
            />
            <span className="text-purple-700 hover:underline ml-2">Instagram</span>
          </label>
        </div>
        <button className="button px-6 py-3" onClick={handleSubscriptionSubmit}>
          Subscribe
        </button>
      </div>
    </section>
    
  );
};

export default Subscribe;
