import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1500px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-light uppercase text-[#00000077]">
        Wonderland
      </h1>
      <ul className="hidden md:flex font-light text-black">
        <li className="p-4">Home</li>
        <li className="p-4">Tours</li>
        <li className="p-4">Explore</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-light uppercase text-[#00000077] m-4">
          Wonderland
        </h1>
        <li className="p-4 border-b border-r-gray-700">Home</li>
        <li className="p-4 border-b border-r-gray-700">Company</li>
        <li className="p-4 border-b border-r-gray-700">Resources</li>
        <li className="p-4 border-b border-r-gray-700">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
