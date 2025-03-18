// Header.jsx
import React from "react";
import logo from "../../assets/logo1.png";

const Header = () => {
  return (
    <header className="bg-white p-3 shadow-sm h-[80px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-around">
        <div className="logo">
          <img
            src={logo}
            alt="ConstructionXpert"
            className="h-[50px] w-[50px]"
          />
        </div>
        <nav className="flex space-x-6">
          <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
            Home
          </button>
          <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
            FAQ
          </button>
          <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
            Pricing
          </button>
          <button class="button">Register now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
