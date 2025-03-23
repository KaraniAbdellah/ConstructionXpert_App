import React from "react";
import Project from "./Project";
import Task from "./Task";
import { LogOut } from "lucide-react";
import Resource from "./Resource";
import { Cookie } from "lucide-react";

export default function Main({setIsLogin}) {
  const handleLogout = () => {
    setIsLogin(false);
    Cookie.remove("token");
  };

  return (
    <div className="relative w-full h-screen">
      <Project></Project>
      <button
        onClick={() => handleLogout()}
        type="button"
        className="z-50 text-white absolute bottom-5 left-10 bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm p-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <LogOut />
      </button>
    </div>
  );
}
