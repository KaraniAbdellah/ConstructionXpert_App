import React from "react";
import Project from "./Project";
import Task from "./Task";
import { LogOut, House } from "lucide-react";
import Resource from "./Resource";
import Cookie from "js-cookie";
import { useNavigate, Link } from "react-router";

export default function Main({ setIsLogin }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    Cookie.remove("token");
    navigate("/auth");
  };

  return (
    <div className="w-full h-full">
      <Project></Project>
      <div className="z-1 text-white absolute bottom-5 left-10 flex flex-col justify-between items-center">
        <Link to="/">
          <button
            type="button"
            className="bg-sky-600 opacity-80 mb-2 hover:bg-sky-700 focus:outline-none font-medium rounded-md text-sm p-2 text-center"
          >
            <House />
          </button>
        </Link>
        <button
          onClick={() => handleLogout()}
          type="button"
          className=" bg-red-600 opacity-80 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm p-2 text-center"
        >
          <LogOut />
        </button>
      </div>
    </div>
  );
}
