import React from "react";
import one from "../assets/images/one.jpg";

const Hero = () => {
  return (
    <section id="home" className="text-white min-h-screen ">
      <div className="relative md:left-10 left-2 xl:w-[55%] flex flex-col justify-center items-start max-xl:px-8 sm:p-16">
        <h1 className="home-1 md:text-[3.5rem] text-[2rem]">
          Dress to Impress <br></br>
          <span className="md:text-[3.5rem] text-[2.5rem] font-[600] font-sans-serif italic">
            Collection!
          </span>
        </h1>
        <h1 className="home-2 md:text-[3.5rem] text-[2.5rem] font-[600] font-sans-serif italic">
          Happy clothes
        </h1>
        <p className="home-3  text-[1.5rem]">
          Find happiness in every piece and express your unique style
        </p>
      </div>
    </section>
  );
};

export default Hero;
