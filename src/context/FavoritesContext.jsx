import React, { createContext, useContext, useState } from 'react';
// import ProductCard from "../sections/ProductCard";



const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const getFavoriteDetails = (productId) => {
    return {
      id: productId,
      name: `Product ${productId}`,
    };
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, getFavoriteDetails }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};


export default FavoritesContext;
