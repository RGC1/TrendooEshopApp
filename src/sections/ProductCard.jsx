import React, { useState } from 'react';
import ProductModal from '../components/CardProductModal';


function ProductCard({ product, onToggleFavorite, isfavorited }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className="bg-[#f8f6f2] cardContainer block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">

                {/* Onclick Modal opens when image is clicked */}
                <div onClick={openModal}>
                    <img
                        className="imageCard rounded-t-lg"
                        src={product.image}
                        alt={product.item}
                    />

                    {/* When user hover on image quickview appears */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                        <p className="text-lg font-bold">Quick View</p>
                    </div>
                </div>

                {/* Product Price div */}
                <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-55 rounded-tl-lg text-lg font-medium text-gray-900">
                    £{product.price}
                </div>

                {/* Code for heart favourite button */}
                <button
                    type="button"
                    className="absolute top-2 right-2 focus:outline-none"
                    onClick={onToggleFavorite}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-8 w-8 ${isfavorited ? 'text-red-500' : 'text-gray-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isfavorited
                                    ? 'M12 21l-1.314-1.257C5.486 15.314 2 12.101 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.321.894 4.5 2.278C12.179 3.894 13.759 3 15.5 3 18.58 3 21 5.42 21 8.5c0 3.601-3.486 6.814-8.686 11.243L12 21z'
                                    : 'M12 21l-1.314-1.257C5.486 15.314 2 12.101 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.321.894 4.5 2.278C12.179 3.894 13.759 3 15.5 3 18.58 3 21 5.42 21 8.5c0 3.601-3.486 6.814-8.686 11.243L12 21z'
                            } />
                    </svg>
                </button>
            </div>

            {/* Product name div */}
            <div className="p-6">
                <h5
                    className="textCard mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {product.item}
                </h5>
            </div>

            {/* Code for opening and closing modal */}
            {isModalOpen && <ProductModal product={product} onClose={closeModal} onFavorited={onToggleFavorite} isfavorite={isfavorited} />}

        </div>
    );
}

export default ProductCard;