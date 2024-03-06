import React from 'react';
import { useFavorites } from '../context/FavoritesContext';


function FavoriteList() {
    const { favorites, getFavoriteDetails } = useFavorites();

    return (
        <>
            {favorites.length > 0 && (
                <div className="absolute top-14 right-0 bg-white w-48 mt-2 p-2 rounded-md shadow-md">
                    <h2 className="text-lg font-bold mb-2">Favorited Items</h2>
                    <ul>
                    {favorites.map((productId) => (
    <li key={productId}>
        {}
        {getFavoriteDetails(productId).name}
    </li>
))}
                    </ul>
                </div>
            )}
        </>
    );
}


export default FavoriteList;
