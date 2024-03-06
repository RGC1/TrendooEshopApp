import React from 'react';

const ProductModal = ({ product, onClose, onFavorited, isfavorite }) => {
  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden relative">
          <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500" onClick={onClose}>
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img src={product.image} alt={product.item} className="w-full h-auto" />

          <div className="p-8">
            <h2 className="text-2xl text-gray-900">{product.item}</h2>
            <p className="text-lg text-gray-900 mt-3">£{product.price}</p>
            <p className="text-base text-gray-700 mt-4">{product.description}</p>
            <div className="flex justify-center mt-6">
              <button type="submit" className="buttonProducts flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={onFavorited}>{isfavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
