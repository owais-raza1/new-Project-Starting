import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white p-4 shadow fixed z-10 left-0 top-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-lg font-bold">Logo</div>

        <div className="flex space-x-4 ml-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group text-gray-600 hover:text-green-500 ${
                isActive ? "underline-active" : ""
              }`
            }
          >
            Products
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </NavLink>
          <NavLink
            to="/screen2"
            className={({ isActive }) =>
              `relative group text-gray-600 hover:text-green-500 ${
                isActive ? "underline-active" : ""
              }`
            }
          >
            Screen 2
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </NavLink>
          <NavLink
            to="/screen3"
            className={({ isActive }) =>
              `relative group text-gray-600 hover:text-green-500 ${
                isActive ? "underline-active" : ""
              }`
            }
          >
            Screen 3
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </NavLink>
          <NavLink
            to="/screen4"
            className={({ isActive }) =>
              `relative group text-gray-600 hover:text-green-500 ${
                isActive ? "underline-active" : ""
              }`
            }
          >
            Screen 4
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
          <button
            className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-500"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
