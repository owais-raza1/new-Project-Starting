import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <span>Logo</span>
        </div>

        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <NavLink
            to="/"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/screen2"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Screen 2
          </NavLink>
          <NavLink
            to="/screen3"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Screen 3
          </NavLink>
          <NavLink
            to="/screen4"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Screen 4
          </NavLink>
        </div>

        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400 py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
          <p>
            <NavLink
              to="/privacy-policy"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </NavLink>{" "}
            |{" "}
            <NavLink
              to="/terms-of-service"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Terms of Service
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
