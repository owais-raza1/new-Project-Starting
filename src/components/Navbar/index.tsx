import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white p-4 shadow fixed z-10 left-0 top-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-lg font-bold">Logo</div>

        <div className="hidden md:flex space-x-4 ml-4">
          {["/", "/screen2", "/screen3", "/screen4"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `relative group text-gray-600 hover:text-green-500 ${
                  isActive ? "underline-active" : ""
                }`
              }
            >
              {`Screen ${index + 1}`}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {location.pathname === "/" && (
            <button
              className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500"
              onClick={() => {
                navigate("/add-product");
              }}
            >
              Add Product
            </button>
          )}

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

        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
