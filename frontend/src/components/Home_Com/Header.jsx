// Header.jsx
import React from "react";
import logo from "../../assets/logo1.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white p-2 shadow-sm h-[80px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-around">
        <div className="logo">
          <img
            src={logo}
            alt="ConstructionXpert"
            className="h-[40px] w-[40px]"
          />
        </div>
        <nav className="flex space-x-6 items-center">
          <Link to="/">
            <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
              Home
            </button>
          </Link>
          <Link to="/faq">
            <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
              FAQ
            </button>
          </Link>
          <Link to="pricing">
            <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
              Pricing
            </button>
          </Link>
          <Link to="/register">
            <button className="button">Register now</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
