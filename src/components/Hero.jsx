import React from "react";
import Typed from "react-typed";
import Main from "../assets/main.jpg";

function Hero() {
  return (
    <div
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${Main})`,
      }}
    >
      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-3xl sm:text-2xl text-2xl font-thin md:py-1">
          Explore Wonderland
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-6xl sm:text-4xl text-4xl font-bold py-4 uppercase">
            Visit us
          </p>
          <Typed
            className="md:text-6xl sm:text-4xl font-bold text-4xl md:pl-4 pl-2 uppercase"
            strings={["today.", "tomorrow.", "anytime."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-lg mx-4 text-[#ffffff71]">
          Discover breathtaking landscapes and rich cultural heritage at our
          enchanting tourist destination.
        </p>
        <button className="w-[200px] rounded-md my-6 mx-auto py-3 font-medium text-xl bg-blue-500 hover:bg-blue-800">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
