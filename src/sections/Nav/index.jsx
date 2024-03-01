import React from 'react'
import './style.css'

import logo from '../../assets/images/Logo.jpg'

const MyNav = () => {
    return (
        <>
            <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex-shrink-0 items-center">
                    <a href="" className="my-2 flex items-end gap-3">
                        <img src={logo} alt="logo" height={71} width={71} />
                    </a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4"></div>
                        <a href="#home" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium mr-6" >Home</a>
                        <a href="#about" className="bg-gray-900 text-white rounded-md px-3 py-2 mr-6 text-sm font-medium" >About Us</a>
                        <a href="#products" className="bg-gray-900 text-white rounded-md px-3 py-2 mr-6 text-sm font-medium" >Products</a>
                        <a href="#contact" className="bg-gray-900 text-white rounded-md px-3 py-2 mr-6 text-sm font-medium" >Contact Us</a>
                    
                </div>
              </div>
              </div>
              </div>
            </nav>
        </>
    )
}


export default MyNav;