import React from 'react'
import one from '../assets/images/one.jpg';

const Hero = () => {
    return (
        <section id="home" className="text-white bg-gradient-tr from-black-400 to-blue-700 min-h-screen ">
                <div className="relative md:left-10 left-2 top-24 xl:w-[45%] flex flex-col justify-center items-start max-xl:px-8 sm:p-16">
            <h1 className="home-1 md:text-[3.5rem] text-[2rem] bg-pink">Dress to Impress with 
                <span className="md:text-[3.5rem] text-[2.5rem] font-[600] font-sans-serif italic"> Happy Clothes Collection!</span>
            </h1>
            {/*<h1 className="home-2 md:text-[3.5rem] text-[2.5rem] font-[600] font-sans-serif italic">Happy clothes</h1>*/}
            <p className="home-3 md:text-[2.5rem] text-[2.5rem] font-[500] font-serif">Find happiness in every piece and express your unique style</p>
        </div>
    </section>
    )    
}


export default Hero;