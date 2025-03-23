// Header.jsx
import React from "react";
import logo from "../../assets/logo1.png";
import { Link, useNavigate } from "react-router";
import Cookie from "js-cookie";

const Header = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    Cookie.remove("token");
    navigate("/auth");
  };
  return (
    <header className="bg-white z-10 fixed w-full p-2 shadow-sm h-[80px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-around">
        <div className="logo">
          <img
            src={logo}
            alt="ConstructionXpert"
            className="h-[40px] w-[40px]"
          />
        </div>
        <nav className="flex space-x-6 items-center">
          <button
            onClick={() => window.scroll(0, 0)}
            className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center"
          >
            Home
          </button>
          <Link to="/faq">
            <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
              FAQ
            </button>
          </Link>
          <Link to="/pricing">
            <button className="font-medium text-gray-800 hover:text-zinc-700 transition-all flex items-center">
              Pricing
            </button>
          </Link>

          {!isLogin ? (
            <Link to="/auth">
              <button className="button">Register now</button>
            </Link>
          ) : (
            <button onClick={() => handleLogout()} className="button">
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
