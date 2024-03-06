import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import FavoriteModal from "../../components/FavoriteModal";

import "./style.css";


const MyNav = ({ favorites }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayFavorites, setDisplayFavorites] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(null);


  // Function to open the dropdown menu
  const openDropdown = () => {
    setDropdownOpen(true);
  };

  // Function to close the dropdown menu
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Function to toggle the mobile menu and close dropdown
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setDropdownOpen(false); // Close the dropdown when toggling mobile menu
    }
  };

  // Function to display favorited items
  const DisplayFavoriteItems = (displayFavorites, clickEvent) => {

    clickEvent.preventDefault();

    setDisplayFavorites(displayFavorites);
  }

  const openFavoriteModal = (favorite) => {
    setSelectedFavorite(favorite);
  };

  const closeFavoriteModal = () => {
    setSelectedFavorite(null);
  };

  return (
    <>
      <nav id="nav">
        <div className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b">
          <div className="relative flex items-center justify-between h-16">
            <div >
              <a href="/" className="flex items-end mt-6 ml-6">
                <img src={logo} alt="logo" height="50%" width="50%" />
              </a>
            </div>
            <div className="hidden sm:block mt-6 mr-8">
              <div className="flex space-x-6">
                <a
                  href="#home"
                  className="rounded-md px-2 py-2 text-md font-medium"
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className=" px-5 py-2 text-md font-medium"
                >
                  ABOUT US
                </a>
                <button
                  onMouseEnter={openDropdown}
                  className="rounded-md px-5 py-2 text-md font-medium bg-[#545454] "
                >
                  PRODUCTS
                </button>
                {dropdownOpen && (
                  <div
                    id="dropdownNavbar"
                    className="absolute mt-8 w-48 rounded-lg shadow-lg;"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    style={{
                      left: "58%",
                    }}
                  >
                    <ul
                      className="mt-4 py-2 text-sm"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a href="#sectionWomen" className="block px-8 py-2 flex justify-center">
                          WOMEN
                        </a>
                      </li>
                      <li>
                        <a href="#sectionMen" className="block  px-8 py-2 flex justify-center">
                          MEN
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                <a
                  href="#footer"
                  className="rounded-md px-3 py-2 text-md font-medium"
                >
                  CONTACT US
                </a>
              </div>
            </div>
            {/* Favorite Button */}
            <a href="" className="text-lg" onClick={(e) => DisplayFavoriteItems(!displayFavorites, e)}>
              {/* Favorite button icon */}
              <svg className="mt-8 mr-6 h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.72 2 12.32 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.82-3.4 7.22-8.55 11.53L12 21.35z" />
              </svg>
            </a>
            {/* Display favorited items list */}
            {displayFavorites && (
              <div className="absolute top-14 right-0 bg-white w-80 mt-2 p-2 rounded-md shadow-md z-10">
                <h2 className="text-lg font-bold mb-2">Favorited Items</h2>
                <ul>
                  {favorites.map((favorite) => (
                    <li key={favorite.id} className="flex items-center">
                      <a
                        className="mt-2 cursor-pointer text-black flex items-center"
                        onClick={() => openFavoriteModal(favorite)}
                      >
                        <img
                          src={favorite.image}
                          alt={favorite.item}
                          className="w-16 mr-2 mt-3"
                        />
                        <span className="mt-3">{favorite.item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex items-center sm:hidden mt-8">
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div id='drop'
        className={`${menuOpen ? "block mobileMenu" : "hidden"
          } sm:hidden`}
      >
        <div className=" pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 text-white font-small "
          >
            HOME
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-white font-small"
          >
            ABOUT US
          </a>

          {menuOpen && (
            <div id="mobileDropdown" className="block sm:hidden">
              <button
                className="block px-3 py-2 text-white font-small"
                onClick={openDropdown}
              >
                PRODUCTS
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="absolute mt-6 w-48 rounded-lg shadow-lg"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  style={{
                    left: "32%",
                    top: "1.7%"
                  }}
                >
                  <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#sectionWomen" className="block text-white px-4 py-2">
                        WOMEN
                      </a>
                    </li>
                    <li>
                      <a href="#sectionMen" className="block text-white px-4 py-2">
                        MEN
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          <a
            href="#footer"
            className="block px-3 py-2 text-white font-small"
          >
            CONTACT US
          </a>
        </div>
      </div>
      {selectedFavorite && (
        <FavoriteModal
          favorite={selectedFavorite}
          onClose={closeFavoriteModal}
        />
      )}
    </>
  );
};

export default MyNav;