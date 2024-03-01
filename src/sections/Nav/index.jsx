import React, { useState } from 'react'

import './style.css'

import logo from '../../assets/images/Logo.jpg'

const MyNav = () => {
    return (
        <>
            <nav className="">
                <div className="container mx-auto justify-between md:felx hidden bg-black">
                    <a href="" className="my-2 flex items-end gap-3">
                        <img src={logo} alt="logo" height={71} width={71} />
                    </a>
                    <ul>
                        <li> <a href="#home">Home</a></li>
                        <li> <a href="#about">About Us</a></li>
                        <li> <a href="#products">Products</a></li>
                        <li> <a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default MyNav;