import React from 'react';
import ReviewCards from '../components/ReviewCard';
const CustomerReviews = () => {
    return (
        <section id="reviews" className="bg-slate-300">
            <div className="title">
                <h2 className='text-[1.7rem] md:[2.2rem] text-center'>See What Our Clients Say...</h2>
            </div>

            <div className="container max-sm:mt-12 flex justify-center items-center">
                {/* Use ReviewCards component to display review cards */}
                <ReviewCards />
            </div>
        </section>
    );
}

export default CustomerReviews;
