import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { setTheme } from "../../store/slice/themeSlice";
import CartShow from "../CartShow/CartShow"; // Import the CartShow component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false); // For cart side panel
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const darkTheme = () => {
    dispatch(setTheme("black"));
  };

  const lightTheme = () => {
    dispatch(setTheme("white"));
  };

  const isDetailPage = location.pathname.startsWith("/detail/");
  const cart = useSelector((state: any) => state.cart);

  return (
    <>
      <nav className="bg-white p-4 shadow fixed z-10 left-0 top-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-800 text-lg font-bold">Logo</div>

          <div className="hidden md:flex items-center space-x-4 ml-4">
            {[
              { path: "/", name: "Product" },
              { path: "/screen2", name: "Screen 2" },
              { path: "/screen3", name: "Screen 3" },
              { path: "/screen4", name: "Screen 4" },
            ].map(({ path, name }, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `relative group text-gray-600 hover:text-green-500 ${
                    isActive ? "underline-active" : ""
                  }`
                }
              >
                {name}
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

            {isDetailPage && (
              <div
                className="relative flex items-center cursor-pointer"
                onClick={() => setIsCartOpen(true)} // Open the cart panel
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-add-to-cart--icon-design-png-image_4269918.jpg"
                  className="w-12"
                  alt="Cart Icon"
                />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
            )}

            <div>
              <img
                src="https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg"
                className="w-9 cursor-pointer"
                onClick={darkTheme}
                alt="Dark Mode Icon"
              />
            </div>
            <div>
              <img
                src="https://static.thenounproject.com/png/2853779-200.png"
                className="w-7 cursor-pointer"
                onClick={lightTheme}
                alt="Light Mode Icon"
              />
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-gray-800 text-lg font-bold">Logo</div>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {[
              { path: "/", name: "Product" },
              { path: "/screen2", name: "Screen 2" },
              { path: "/screen3", name: "Screen 3" },
              { path: "/screen4", name: "Screen 4" },
            ].map(({ path, name }, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-green-500 ${
                    isActive ? "font-bold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}
            {location.pathname === "/" && (
              <button
                className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500"
                onClick={() => {
                  navigate("/add-product");
                  setIsOpen(false);
                }}
              >
                Add Product
              </button>
            )}
            <button
              className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
              onClick={() => {
                navigate("/signup");
                setIsOpen(false);
              }}
            >
              Sign Up
            </button>
            <button
              className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-500"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              Log In
            </button>
            <div className="mt-4">
              <img
                src="https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg"
                className="w-7"
                alt="Dark Mode Icon"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Side Panel */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-end">
          <div className="w-80 bg-white h-full shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <CartShow setIsCartOpen={setIsCartOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
