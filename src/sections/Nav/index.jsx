import React, { useState } from "react";
import "./style.css";

import logo from "../../assets/images/Logo.jpg";


const MyNav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    // Function to open the dropdown menu
    const openDropdown = () => {
      setDropdownOpen(true);
    };
  
    // Function to close the dropdown menu
    const closeDropdown = () => {
      setDropdownOpen(false);
    };

  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex-shrink-0 items-center">
              <a href="" className="my-2 flex items-end gap-3">
                <img src={logo} alt="logo" height={71} width={71} />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4"></div>
              <a
                href="#home"
                className=" text-black rounded-md px-3 py-2 text-sm font-medium mr-6 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Home
              </a>
              <a
                href="#about"
                className=" text-black rounded-md px-3 py-2 mr-6 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                About us
              </a>
              <button
                onMouseEnter={openDropdown} // Add onMouseEnter handler to open dropdown
                onMouseLeave={closeDropdown} // Add onMouseLeave handler to close dropdown
                className="text-black rounded-md px-3 py-2 mr-6 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Products{" "} 
              </button>
              {/* Conditionally render the dropdown menu based on dropdownOpen state */}
              {dropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className=" absolute mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                  onMouseEnter={openDropdown} // Keep dropdown open when hovering over it
                  onMouseLeave={closeDropdown} // Close dropdown when mouse leaves it
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Woman
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Men
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <a
                href="#contact"
                className=" text-black rounded-md px-3 py-2 mr-6 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;